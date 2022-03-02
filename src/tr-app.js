import { LitElement, html, css } from 'lit';
import { router, navigator, outlet } from 'lit-element-router';
import { setPassiveTouchGestures } from '../utils/settings.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../redux/store';

// These are the actions needed by this element.
import { initMetadata, initConfig, setLang, setActivity } from '../redux/actions.js';

import '@material/mwc-snackbar';
import '@material/mwc-circular-progress';

export class TrApp extends connect(store)(router(navigator(outlet(LitElement)))) {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: white;
      }
      mwc-circular-progress {
        position: fixed;
        top : 50%;
        left: calc(50% - 25px);
      }
    `;
  }

  render() {
    return html`
      <tr-home route='home' 
        @authorized=${()=>this.navigate("/dashboard")}
        @change-lang=${e=>store.dispatch(setLang(e.detail.lang))}
        @success=${this.setNotif} 
        @error=${this.setNotif}></tr-home>
      <tr-dashboard route='dashboard' .params=${this.params} .query=${this.query}
        @set-activity=${()=>store.dispatch(setActivity(true))}
        @change-lang=${e=>store.dispatch(setLang(e.detail.lang))}
        @completed=${this.completed}
        @success=${this.setNotif} 
        @error=${this.setNotif}></tr-dashboard>
      <tr-view404 route='view404'></tr-view404>
      <mwc-snackbar></mwc-snackbar>
      <mwc-circular-progress indeterminate closed=true></mwc-circular-progress>
    `;
  }

  /**
   * once dashboard rendered for the first time
   */
  completed() {
    this.waiting.closed = true
  }

  setNotif(e) {
    if (e.detail.waiting) {
      this.waiting.closed = false
    }
    if (e.detail.log && this.dashboard.style.display != "none" && e.detail["message_"+ this.lang]) {
      this.dashboard.setNotif(e)
    }
    let msg = e.detail.message;
    if (e.detail["message_"+ this.lang]) {
      msg = e.detail["message_"+ this.lang];
    }
    if (e.detail.hasOwnProperty('is_error')) {
      if (e.detail.is_error) {
        this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "#a33";
      } else {
        this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "#0085ff";
      }
    }
    if (msg) {
      this.toast.labelText = msg;
      this.toast.show();
    }
    store.dispatch(setActivity(false))
  }

  get dashboard() {
    return this.shadowRoot.querySelector("tr-dashboard")
  }

  get toast() {
    return this.shadowRoot.querySelector("mwc-snackbar")
  }

  get waiting() {
    return this.shadowRoot.querySelector("mwc-circular-progress")
  }

  static get properties() {
    return {
      page: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      title: { type: String },
      metadata: { type: Object },
      lang: { type: String }
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
    // prevent unaccess history
    console.log(route, params, query, data)
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (userSession && userSession.finalToken) {
      if (route == "home") {
        return history.forward()
      }
    } else {
      if (route != "home") {
        window.location.href = "/";
      }
    }
    this._routeChanged();
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
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
    fetch("/src/config.json").then(r => r.json()).then(j => {
      store.dispatch(initConfig(j));
    })
    window.addEventListener('online', () => {
      this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "rgb(51, 51, 51)";
      this.toast.labelText = "You are now online"
      this.toast.show()
    })
    window.addEventListener('offline', () => {
      this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "rgb(51, 51, 51)";
      this.toast.labelText = "You are now offline"
      this.toast.show()
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
    if (this.lang != state.app.lang) {
      this.lang = state.app.lang;
    }
  }
}
customElements.define('tr-app', TrApp);
