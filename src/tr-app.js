import { LitElement, html, css } from 'lit-element';
import { router, navigator, outlet } from 'lit-element-router';
import { setPassiveTouchGestures } from '../utils/settings.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../redux/store';

// These are the actions needed by this element.
import { initMetadata } from '../redux/actions.js';

import '@material/mwc-snackbar';

export class TrApp extends connect(store)(router(navigator(outlet(LitElement)))) {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: white;
      }
    `;
  }

  render() {
    return html`
      <tr-home route='home' @authorized=${()=>this.navigate("/dashboard")}></tr-home>
      <tr-dashboard route='dashboard' .params=${this.params}></tr-dashboard>
      <tr-view404 route='view404'></tr-view404>
      <mwc-snackbar></mwc-snackbar>
    `;
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
      title: { type: String },
      metadata: { type: Object }
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
    console.log(route, params, query, data)
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
  }

  updated(updates) {
    super.updated(updates)
    if (updates.has('page') || updates.has('params'))
      this._pageChanged();
  }

  firstUpdated() {
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
