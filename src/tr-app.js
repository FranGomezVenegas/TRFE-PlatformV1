import { LitElement, html, css } from 'lit-element';
import { router, navigator, outlet } from 'lit-element-router';
import { Layouts, Factors, displayFlex, horizontal, centerAligned } from '@collaborne/lit-flexbox-literals';
import { setPassiveTouchGestures } from '../utils/settings.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../redux/store';

// These are the actions needed by this element.
import { initMetadata } from '../redux/actions.js';

import '@material/mwc-drawer';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-snackbar';

export class TrApp extends connect(store)(router(navigator(outlet(LitElement)))) {
  static get styles() {
    return [
      Layouts, Factors,
      css`
      :host {
        display: block;
      }
      .container {
        height: 100vh;
      }
      div[hidden] {
        display: none;
      }
      mwc-drawer[hidden] {
        display: none;
      }
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: rgba(177, 242, 244);
        --mdc-theme-on-primary: white;
      }
      .header {
        ${displayFlex}
        ${horizontal}
        ${centerAligned}
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        cursor: pointer;
      }
      .header img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      mwc-icon-button.menu[hidden] {
        display: none;
      }
      nav {
        margin-right: 10px;
      }
      nav a {
        text-decoration: none;
        color: white;
        margin-right: 20px;
        cursor: pointer;
      }
      main {
        color: #2F4F4F;
        margin-bottom: 60px;
      }
      .app-footer {
        font-size: 16px;
        background-color: #2F4F4F;
        color: white;
      }
      .app-footer a {
        text-decoration: none;
        color: #A9A9A9;
        margin-bottom: 10px;
      }
      .horiz {
        ${displayFlex}
        ${horizontal}
      }
      img.follow {
        width: 30px; height: 30px;
        margin-right: 10px;
      }
    `];
  }

  render() {
    return html`
      <div class="container layout vertical">
        <mwc-drawer ?hidden=${!this.auth} style="height:70px" hasHeader type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
          <div @click=${()=>this.navigate("/")} class="header" slot="title" style="margin:-30px auto">
            <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
            <p>${this.title}</p>
          </div>
          <div>
            <mwc-list>
              <mwc-list-item @click="${() => this.navigate('/dashboard/procedures')}">
                <span>Procedures</span>
              </mwc-list-item>
            </mwc-list>
          </div>
          <div slot="appContent">
            <mwc-top-app-bar-fixed>
              <mwc-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}" @click="${() => this.drawerState = !this.drawerState}"></mwc-icon-button>
              <div @click=${()=>this.navigate("/")} ?hidden=${!this.desktop} class="header" slot="title">
                <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
                <p>${this.title}</p>
              </div>
              <nav slot="actionItems">
                <a ?hidden=${!this.desktop} href="/dashboard/procedures">Procedures</a>
              </nav>
            </mwc-top-app-bar-fixed>
          </div>
        </mwc-drawer>      
        <main class="layout vertical flex">
          <tr-home route='home' @authorized=${()=>this.navigate("/dashboard")}></tr-home>
          <tr-dashboard route='dashboard'></tr-dashboard>
          <tr-view404 route='view404'></tr-view404>
        </main>
        <mwc-snackbar></mwc-snackbar>
      </div>
    `;
  }

  get drawer() {
    return this.shadowRoot.querySelector("mwc-drawer")
  }

  get snackbar() {
    return this.shadowRoot.querySelector("mwc-snackbar")
  }

  static get properties() {
    return {
      auth: { type: Boolean },
      page: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      desktop: { type: Boolean },
      title: { type: String },
      metadata: { type: Object },
      drawerState: { type: Boolean }
    };
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { 
        title: 'Home',
        description: "Trazit Platform",
        img: "./images/trazit-removebg.png"
      }
    }, {
      name: 'home',
      pattern: 'home',
      data: { 
        title: 'Home',
        description: "Menuju sebuah bangsa mandiri energi",
        img: "./images/logo.png"
      }
    }, {
      name: 'dashboard',
      pattern: 'dashboard'
    }, {
      name: 'dashboard',
      pattern: 'dashboard/:menu'
    }, {
      name: 'view404',
      pattern: '*'
    }];
  }

  router(route, params, query, data) {
    this.activeRoute = route;
    this.params = params;
    this.query = query;
    this.data = data;
    this._routeChanged();
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
    this.auth = false;
    this.page = "";
    this.params = {};
    this.query = {};
    this.data = {};
    this.title = 'Trazit Platform';
    this.metadata = {};
    this.drawerState = false;
  }

  updated(updates) {
    super.updated(updates)
    if (updates.has('page') || updates.has('params'))
      this._pageChanged();
  }

  firstUpdated() {
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
        this.drawer.open = !this.drawer.open;
    });
    installMediaQueryWatcher(`(min-width: 460px)`, desktop => this.desktop = desktop);
    window.addEventListener('online', () => {
      this.snackbar.labelText = "You are now online"
      this.snackbar.show()
    })
    window.addEventListener('offline', () => {
      this.snackbar.labelText = "You are now offline"
      this.snackbar.show()
    })
  }

  async _routeChanged() {
    await this.requestUpdate(); // call it to wait the router complete updated
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'home' in that case. And if the page doesn't exist, show 'view404'.
    if (this.activeRoute == "") {
      this.page = "home";
    } else if (['home', 'dashboard', 'view404'].indexOf(this.activeRoute) !== -1) {
      this.page = this.activeRoute;
    } else {
      this.navigate("/view404");
    }
  }

  async _pageChanged() {
    await this.requestUpdate(); // call it to wait the router complete updated
    switch (this.page) {
      case 'home':
        import('./tr-home');
        break;
      case 'dashboard':
        import('./tr-dashboard');
        break;
      case 'view404':
        import('./tr-view404');
        break;
    }
    if (this.page == 'home') {
      store.dispatch(initMetadata({
        title: this.title +' - '+ this.data.title,
        image: './images/'+ this.data.img
      }));
    } else if (this.page == 'content') {
      store.dispatch(initMetadata({
        title: this.title +' - '+ this.params.menu
      }));
    }
    this.drawerState = false;
  }

  stateChanged(state) {
    if (JSON.stringify(state.app.metadata) != JSON.stringify(this.metadata)) {
      this.metadata = state.app.metadata;
      updateMetadata({
        ...state.app.metadata,
        url: window.location.href
      })
    }
  }
}
customElements.define('tr-app', TrApp);
