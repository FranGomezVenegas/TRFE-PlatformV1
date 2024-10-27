import { LitElement, html, css } from 'lit';
import { router, navigator, outlet } from 'lit-element-router';
import { setPassiveTouchGestures } from '../utils/settings.js';
import '@trazit/tr-styling/src/tr-styling';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../redux/store';

// These are the actions needed by this element.
import { initMetadata, initConfig, setLang, setActivity } from '../redux/actions.js';

import '@material/mwc-snackbar';
//import '@material/mwc-circular-progress';
import '@material/web/progress/linear-progress.js';
//import '@material/web/snackbar/snackbar.js'; // 20240828 not implemented yet by material design v3


import './loading-logo';

//import { Client1Theme } from '@trazit/tr-styling/src/theme-cliente1.js';

export class TrApp extends connect(store)(router(navigator(outlet(LitElement)))) {
  static get styles() {
    return [//Client1Theme,
      css`
      :host {
        display: block;
        background-color: white;
      }
      loading-logo {
        display: none;
      }
      loading-logo[active] {
        display: block;
      }        
      md-circular-progress {
        position: fixed;
        top : 50%;
        left: calc(50% - 25px);
        color : #FFFFFF;
        color : rgba(36, 192, 235, 1);
        --mdc-theme-primary: rgba(36, 192, 235, 1);
      }
    `,];
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
      <tr-resetpass route='resetpass'></tr-resetpass>
      <mwc-snackbar></mwc-snackbar>
      <md-circular-progress indeterminate closed></md-circular-progress>
      <loading-logo id="loadingLogo"></loading-logo>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    
    fetch("./config.json")
    .then(response => response.json())
    .then(config => {
      this.config = config;
      if (config.theme) {
        this.currentTheme = config.theme;
        this.applyTheme(); // Llama a applyTheme para asegurar que el tema se aplique
        this.requestUpdate();
      }
    })
    .catch(error => {
      console.error('Error al cargar config.json:', error);
    });     
    // Escuchar eventos personalizados para mostrar y ocultar el progreso circular
    window.addEventListener('show-progress', this.showProgress.bind(this));
    window.addEventListener('hide-progress', this.hideProgress.bind(this));
  
    this.waiting.closed = true;
    this.loadingLogo.removeAttribute('active');
    
    fetch("/config.json").then(r => r.json()).then(j => {
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
  
  showProgress() {
    //console.log("showProgress called");
    this.waiting.closed = false; // Mostrar el progreso
    this.loadingLogo.setAttribute('active', '');
  }
  
  hideProgress() {
    console.log("hideProgress called");
    this.waiting.closed = true; // Ocultar el progreso
    this.loadingLogo.removeAttribute('active');
  }
  
  
  completed() {
    console.log('completed'); // Asegúrate de que se está llamando
    this.waiting.style.display = 'none'; // Alternativa 1
    // o bien
    // this.waiting.setAttribute('closed', ''); // Alternativa 2

    this.loadingLogo.removeAttribute('active');
}


  async ensureToastAvailable() {
    if (this.toast === null) {
      this.toast = this.shadowRoot.querySelector('mwc-snackbar');
  
      if (!this.toast) {
        this.toast = document.createElement('mwc-snackbar');
        this.shadowRoot.appendChild(this.toast);
  
        // Esperar a que el shadowRoot esté disponible
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }
    }
  
    // Esperar a que shadowRoot esté disponible
    while (!this.toast.shadowRoot) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
  
    return this.toast;
  }
    

  async setNotif(e) {    
    if (e.detail.waiting) {
      this.showProgress()
      this.waiting.closed = true;
    }
    const toast = await this.ensureToastAvailable();
    if (this.toast===null){
      let toast = this.shadowRoot.querySelector('mwc-snackbar');
  
      if (!toast) {
        toast = document.createElement('mwc-snackbar');
        this.shadowRoot.appendChild(toast);
      }      
      
    }

    if (e.detail.log && this.dashboard.style.display != "none" && e.detail["message_"+ this.lang]) {
      this.dashboard.setNotif(e)
    }
    let msg = undefined
    if (e.detail.message_en!==undefined&&e.detail.message_en!=='.'){
      msg = e.detail.message;
      if (e.detail["message_"+ this.lang]) {
        msg = e.detail["message_"+ this.lang];
      }
    }
    let toastColor=""
    if (e.detail.hasOwnProperty('is_error')) {
      if (e.detail.is_error) {
        toastColor="#a33" 
        //this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "#a33";
      } else {
        toastColor="#0085ff"
        //this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "#0085ff";
      }
    } else {
      toastColor="#0085ff"
      //this.toast.shadowRoot.querySelector(".mdc-snackbar__surface").style.backgroundColor = "#0085ff";
    }

    
  if (msg) {
    const snackbarSurface = toast.shadowRoot.querySelector('.mdc-snackbar__surface');
    if (snackbarSurface) {
      snackbarSurface.style.backgroundColor = toastColor;
      toast.labelText = msg;
      toast.show();
    } else {
      console.error('No se encontró el elemento .mdc-snackbar__surface en el shadowRoot.');
    }
  }
        
    store.dispatch(setActivity(false))
  }

  get dashboard() {
    return this.shadowRoot.querySelector("tr-dashboard")
  }
  get resetpass() {
    return this.shadowRoot.querySelector("tr-resetpass")
  }

  get toast() {
    return this.shadowRoot.querySelector("mwc-snackbar")
  }

  get waiting() {
    return this.shadowRoot.querySelector("md-circular-progress");
  }

  get loadingLogo() {
    return this.shadowRoot.querySelector("#loadingLogo")
  }

  static get properties() {
    return {
      page: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      title: { type: String },
      metadata: { type: Object },
      currentTheme: { type: String },
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
        description: "TRAZiT, Let's trace to the next level",
        img: "./images/logo.png"
      }
    }, {
      name: 'dashboard',
      pattern: 'dashboard'
    }, {
      name: 'dashboard',
      pattern: 'dashboard/:menu'
    }, {
      name: 'resetpass',
      pattern: 'resetpass'
    },{
      name: 'view404',
      pattern: '*'
    }];
  }

  router(route, params, query, data) {
    this.activeRoute = route;
    this.params = params;
    this.query = query;
    this.data = data;
    if (route==='resetpass'){
      window.location.href = "/resetpass/";
      this._routeChanged();
      return
    }
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
    this.currentTheme = 'trazit';
    window.addEventListener('unload', this.handleUnload.bind(this));
  }
  connectedCallback() {
    super.connectedCallback();

    // Verifica si ya existe tr-styling en el documento
    if (!document.querySelector('tr-styling')) {
      const trStyling = document.createElement('tr-styling');
      trStyling.config = { theme: 'trazit' }; // O el tema por defecto
      document.body.appendChild(trStyling);
    }
  }
  applyTheme() {
    let trStyling = document.querySelector('tr-styling');
    if (!trStyling) {
      trStyling = document.createElement('tr-styling');
      document.body.appendChild(trStyling);
    }
    trStyling.config = { theme: this.currentTheme };
  }
  handleUnload(event) {
    // Realizar la acción de logout utilizando sendBeacon
    const url = '/api/logout'; // Cambia esta URL a tu endpoint real de logout
    const data = JSON.stringify({ userId: 'USER_ID' }); // Ajusta los datos según sea necesario
    
    navigator.sendBeacon(url, data);
    
    // Opcionalmente, puedes realizar alguna otra acción antes de que la pestaña se cierre
    console.log('User is closing the tab, logout triggered.');
  }

  updated(updates) {
    super.updated(updates)
    if (updates.has('page') || updates.has('params'))
      this._pageChanged();
  }

  async _routeChanged() {
    await this.updateComplete; // call it to wait the router complete updated
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'home' in that case. And if the page doesn't exist, show 'view404'.
    if (this.activeRoute == "") {
      this.page = "home";
    } else if (['home', 'dashboard', 'view404', 'resetpass'].indexOf(this.activeRoute) !== -1) {
      this.page = this.activeRoute;
    } else {
      this.navigate("/view404");
    }
  }

  async _pageChanged() {
    await this.updateComplete; // call it to wait the router complete updated
    switch (this.page) {
      case 'home':
        import('./tr-home');
        break;
      case 'dashboard':
        import('./tr-dashboard-main.js');
        break;
      case 'view404':
        import('./tr-view404');
        break;
      case 'resetpass':
        import('./tr-resetpass');
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

  // updateMetadata(metadata) {
  //   if (metadata.title) {
  //     document.title = metadata.title;
  //   }
  //   if (metadata.description) {
  //     let metaDescription = document.querySelector('meta[name="description"]');
  //     if (!metaDescription) {
  //       metaDescription = document.createElement('meta');
  //       metaDescription.name = "description";
  //       document.head.appendChild(metaDescription);
  //     }
  //     metaDescription.content = metadata.description;
  //   }
  //   if (metadata.url) {
  //     let linkCanonical = document.querySelector('link[rel="canonical"]');
  //     if (!linkCanonical) {
  //       linkCanonical = document.createElement('link');
  //       linkCanonical.rel = "canonical";
  //       document.head.appendChild(linkCanonical);
  //     }
  //     linkCanonical.href = metadata.url;
  //   }
  // }
  

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
