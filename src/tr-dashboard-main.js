import { html, LitElement } from 'lit';
import { styles } from './tr-dashboard-styles.js';

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';

import { bannerProcedureDefinition } from './tr-dashboard-bannerDefinition.js';
import { bannerProcedureOperation } from './tr-dashboard-bannerOperation.js';
import { mainView } from './tr-dasboard-mainView.js';
import { PlatformModel} from './PlatformModel';

import './elements/procedures-menu.js'


export class TrDashboard extends connect(store)(LitElement) {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      lang: { type: String },
      userRole: { type: String },
      config: { type: Object },
      procedures: { type: Array },
      isForTesting: { type: Boolean }, // New property
      sops: { type: Array },
      analytics: { type: Array },
      myPendingCertifApprovals: { type: Array },
      selectedViewInfo: {type: Object},
      desktop:{type: Boolean},
      proceduresList: { type: Array },
      tabs: { type: Array },
      userSession: { type: Object },    
    };
  }


  stateChanged(state) {
    console.log('stateChanged executed');
    if (JSON.stringify(state.app.proceduresList) !== JSON.stringify(this.previousProceduresList)) {
      this.previousProceduresList = [...state.app.proceduresList];
      this.proceduresList = [...state.app.proceduresList];
      this.updateUserSession();  // Ejecutar solo si cambió
    }
  }
  

  constructor() {
    super();
    this.lang = 'en';  // Default language
    this.userRole = '';  
    this.config = {};  
    this.desktop=true
    this.procedures = [
      { label_en: 'Procedure 1', label_es: 'Proceso 1' },
      { label_en: 'Procedure 2', label_es: 'Proceso 2' }
    ];  // Placeholder data
    this.isForTesting = false; // Default
    this.sops = [];
    this.analytics = [];
    this.myPendingCertifApprovals = [];
    this.selectedViewInfo={}
    this.query = {};
    this.proceduresList=[]
    this.tabs=[]
  }

  firstUpdated() {

    super.firstUpdated();

    // Restaurar pestañas desde sessionStorage
    const savedTabs = JSON.parse(sessionStorage.getItem('openTabs'));
    const activeTab = sessionStorage.getItem('activeTab');

    if (savedTabs && savedTabs.length) {
      this.tabs = savedTabs;
      this.shadowRoot.querySelector('tab-state').tabs = this.tabs;
      
      // Si existe una pestaña activa guardada, restaurarla
      if (activeTab) {
        this.shadowRoot.querySelector('tab-state').activateTab(activeTab);
        this._paramsChanged(activeTab);  // Actualizar el contenido
      } else {
        // Si no hay pestaña activa, selecciona la última
        const lastActiveTab = this.tabs[this.tabs.length - 1];
        if (lastActiveTab) {
          this.shadowRoot.querySelector('tab-state').activateTab(lastActiveTab.route);
          this._paramsChanged(lastActiveTab.route);
        }
      }
    }    

    const mediaQuery = window.matchMedia('(min-width: 960px)');
    this.desktop = mediaQuery.matches;
    mediaQuery.addEventListener('change', (e) => this.desktop = e.matches);
  
    // Fetch user session data after the component has been rendered for the first time
    this.updateUserSession();
  
  // Escuchar el evento de cambio de pestaña
  this.shadowRoot.querySelector('tab-state').addEventListener('tab-changed', (e) => {
    const route = e.detail.route;    
    this._paramsChanged(route);  // Cambiar el contenido según la ruta seleccionada
  });
  
  
    // Watch for changes in sessionStorage, specifically for procedures_list
    // window.addEventListener('sessionUpdated', (e) => {
    //   if (e.detail.key === 'userSession') {
    //     this.updateUserSession(); // Actualiza el estado del componente cuando se emite el evento
    //   }
    // });
  
    // Fetch config.json
    fetch('/config.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch config.json: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.config = data;
        if (typeof data.isForTesting === 'boolean') {
          this.isForTesting = data.isForTesting;
        } else {
          console.warn("isForTesting is not defined as a boolean in config.json");
        }
      })
      .catch(error => {
        console.error("Error fetching config.json:", error);
      });
  }
  
  // This function checks for userSession updates and updates the component's state accordingly
  updateUserSession() {
    const userSession = JSON.parse(sessionStorage.getItem("userSession"));
  
    if (userSession && userSession.userRole) {
      this.userRole = userSession.userRole;
    } else {
      console.warn("User session not found or invalid.");
    }
  
    this.sops = []
    if (userSession !== undefined && userSession.all_my_sops && userSession.all_my_sops.length) {
      this.sops = userSession.all_my_sops[0].my_sops;
    }
  
    this.analytics = []
    if (userSession !== undefined && userSession.all_my_analysis_methods && userSession.all_my_analysis_methods.length) {
      this.analytics = userSession.all_my_analysis_methods[0].my_analysis_method_certifications;
    }
  
    if (userSession.all_my_pending_certif_approvals !== undefined && userSession.all_my_pending_certif_approvals.num_objects > 0) {
      this.myPendingCertifApprovals = userSession.all_my_pending_certif_approvals.objects;
    }
  
    // Check if procedures_list exists and then map it
    if (userSession && userSession.procedures_list && userSession.procedures_list.procedures) {
      this.proceduresList = userSession.procedures_list.procedures.map(p => p);
    } else {
      this.proceduresList = [];
    }
  }
  
  
  menuLabel(option){
    if (this.lang===undefined){
      this.lang="en"
    }
    let label=""
    if (option["label_"+this.lang]!==undefined){
      label=option["label_"+this.lang]
    }
    if (option.counter!==undefined){
      if (option.counter.variable!==undefined){
        let contVal=0
        if (this[option.counter.variable]!==undefined){
          contVal=this[option.counter.variable].length
        }
        if (option.counter.position==='start'){
          label=contVal+" "+label
        }
        if (option.counter.position==='end'){
          label=label+" "+contVal
        }
      }
    }
    return label
  }
  selectedMenu(option){
    if (this.desktop===true){
      this.selectedMenuDesktop(option)
    }else{
      this.selectedMenuMobile(option)
    }
  }
  selectedMenuDesktop(option) {
    if (option.clickRoute === undefined) {
      alert("Route not defined");
      console.log('Selected option:', option);
      return;
    }
  
    if (option.componentToOpen !== undefined) {
      this._paramsChanged(option.componentToOpen);
    }
  
    this.selectedViewInfo = option;
    console.log(`Selected route: ${option.clickRoute}`, 'selectedViewInfo', this.selectedViewInfo);
    history.pushState({}, '', option.clickRoute);
  
    this.addTab(option);

    // Cerrar el menú móvil después de seleccionar una opción
    const mobileMenu = this.shadowRoot.querySelector('#mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
    }
  }
  selectedMenuMobile(option) {   
   //alert('mobile') 
    if (option.clickRoute === undefined) {
      alert("Route not defined");
      console.log('Selected option:', option);
      return;
    }
  
    if (option.componentToOpen !== undefined) {
      this._paramsChanged(option.componentToOpen);
    }
  
    this.selectedViewInfo = option;
    console.log(`Selected route: ${option.clickRoute}`);
    history.pushState({}, '', option.clickRoute);

    this.addTab(option);

    // Cerrar el menú móvil después de seleccionar una opción
    const mobileMenu = this.shadowRoot.querySelector('#mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
    }
  }  
  get trProc() {
    return this.shadowRoot.querySelector("tr-procedures")
  }
  _paramsChanged(componentToOpen) {
   // alert(componentToOpen)
    this.requestUpdate(); // call it to wait the page props complete updated
    switch (componentToOpen) {
      case 'procedures':        
        this.trProc.ready = false
        this.trProc.procName = this.query.procName
        this.trProc.viewName = this.query.viewName
        this.trProc.filterName = this.query.filterName
        this.trProc.resetView()
        this.trProc.authorized()
        this.trProc.render()
        this.drawerState = false;
        break;
      case 'notifications':
     //   alert('case '+componentToOpen)
        import('@trazit/platform-notif/platform-notif');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'certifications':
        import('@trazit/user-certifications/user-certifications');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'incidents':
        import('@trazit/my-incidents/my-incidents');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'user':
        import('@trazit/user-settings/user-settings');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'tutorial':
        //import('@trazit/video-tutorial/video-tutorial');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'endpoints':
        import('@trazit/endpoints-list/endpoints-list');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'holidayscalendar':
        //import('@trazit/holiday-calendars/holiday-calendars');
        this.drawerState = false;
        this.requestUpdate(); // Forzar una actualización para que se renderice el componente.
        break;
      case 'platformusersessions':
        ////import('@trazit/platform-usersessions/platform-usersessions');
        break;  
      default:
        import('./tr-default');
    }
    this.drawerState = false;
  }
  // Método para agregar y activar pestaña
  addTab(option) {
    let tab = {
      procName: this.query.procName,
      viewName: this.query.viewName,
      filterName: this.query.filterName || '',
      route: option.clickRoute,
      tabLabel_en: option.label_en,
      tabLabel_es: option.label_es
    };

    // Verificar si la pestaña ya existe
    let existingTab = this.tabs.find(t => t.route === tab.route);
    if (existingTab) {
      // Si la pestaña ya existe, marcarla como activa
      if (this.shadowRoot.querySelector('tab-state')){
        this.shadowRoot.querySelector('tab-state').activateTab(tab.route);
      }
    } else {
      // Si no existe, agregarla y activarla
      this.tabs = [...this.tabs, tab];
      this.shadowRoot.querySelector('tab-state').tabs = this.tabs;  // Actualizar las pestañas en TabState
      this.shadowRoot.querySelector('tab-state').activateTab(tab.route);
      console.log("Pestaña agregada y activada:", tab);
      sessionStorage.setItem('openTabs', JSON.stringify(this.tabs));
    }

    // Guardar en sessionStorage
    let openViews = JSON.parse(sessionStorage.getItem("openViews")) || [];
    if (!openViews.find(v => v.route === tab.route)) {
      openViews.push(tab);
      sessionStorage.setItem("openViews", JSON.stringify(openViews));
    }

    // Actualizar la UI
    this.requestUpdate();
  }

  // updated(updates) {
  //   // except authenticated users, not allowed to route the sub project pages
  //   if (updates.has('params')) {
  //     this._paramsChanged()
  //   }
  //   if (updates.has("lang")) {
  //     this.changeLang()
  //   }
  // }  

  logout() {
    window.sessionStorage.clear();
    window.location.href = "/";
  }

  userSession() {
    return html`
      <label id="sessionLabel" style="font-size:1vw;">
        User Role: ${this.userRole}
      </label>
    `;
  }

  changeLang() {
    this.lang = this.lang === 'en' ? 'es' : 'en';
  }

  stateChanged(state) {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"));
    this.userRole = userSession ? userSession.userRole : '';

    if (JSON.stringify(this.config) !== JSON.stringify(state.app.config)) {
      this.config = state.app.config;
      if (this.config.local === true) {
        this.PlatformModel = PlatformModel;
      } else if (userSession && userSession.platform_settings) {
        this.PlatformModel = userSession.platform_settings;
      }
    }

    if (this.lang !== state.app.lang) {
      this.lang = state.app.lang;
    }

    if (state.app.activity) {
      this.startSession = new Date().getTime();
    }
  }

  userSessionInfo() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (userSession) {
      return html`
        <label id="sessionLabel" style="font-size:1vw;">
          ${userSession.header_info.first_name} ${userSession.header_info.last_name} (${userSession.userRole})<br>
          ${this.lang == "en" ? "Session" : "Sesión"} Id: ${userSession.appSessionId} (${this.config.dbName}${this.config.isForTesting===true ? " - Testing" : ""})<br>
          ${this.desktop ? this.lang == "en" ? "Date: " : "Fecha: " : null}${userSession.appSessionStartDate}
        </label>
      `
    }
  }  
  render() {    
    return html`
      ${this.userRole.includes("trazit_pm") || this.userRole === 'proc_management'
        ? bannerProcedureDefinition(this,
            this.lang, 
            this.config,             
            this.lang === 'en' ? 'es' : 'en',           
            this.isForTesting,
            PlatformModel
          )          
        : bannerProcedureOperation(this,
            this.lang, 
            this.config,           
            this.lang === 'en' ? 'es' : 'en', 
            PlatformModel,
            this.isForTesting,
            this.sops,
            this.analytics,
            this.myPendingCertifApprovals,
            this.proceduresList,
            this.tabs
          )
      }
      
      ${this.selectedViewInfo===undefined? nothing :
        mainView(this, this.desktop, this.config, true, this.lang, this.selectedViewInfo, this.notifs, this.query)}
      `;
  }
  
// Función para abrir el menú en desktop
openMenu(menu) {
  menu.open = true;
  this.requestUpdate();
}

// Función para cerrar el menú en desktop
closeMenu(menu) {
  menu.open = false;
  this.requestUpdate();
}

  keepMenuOpen(menu) {
    // Mantiene el menú abierto si el ratón está sobre el submenú
    menu.open = true;
    this.requestUpdate();
  }

  allPending() {
    let s = this.sops.filter(s => s.status == "NOT_PASS")
    let a = this.analytics.filter(s => s.status == "NOT_PASS")
    if (s.length+a.length > 0) {
      return html`<span style="color: red">${s.length+a.length}</span>`
    } else {
      return null
    }
  }

  pendingSOP() {
    let p = this.sops.filter(s => s.status == "NOT_PASS")
    if (p.length) {
      return html`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=psop")}>${p.length}</span>`
    } else {
      return null
    }
  }

  pendingAnalytic() {
    let p = this.analytics.filter(s => s.status == "NOT_PASS")
    if (p.length) {
      return html`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=panalytic")}>${p.length}</span>`
    } else {
      return null
    }
  }
  myPendingCertificationApprovals() {
    let p = this.analytics.filter(s => s.status == "NOT_PASS")
    if (p.length) {
      return html`<span style="color: #d73535cc;" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${p.length}</span>`
    } else {
      return null
    }
  }  
  notifsPipeChanged(updates) {
    // populate the notifs session state
//    if (sessionStorage.getItem("notifs")) {
//      this.notifs = JSON.parse(sessionStorage.getItem("notifs"))
      this.notifs=this.notifs.reverse()
//console.log('notifsPipeChanged', 'this.notifs', this.notifs)
      let maxNumNotifs=10
      if (this.notifs.length>0){
        let inotifs=0;
        for (inotifs = 0; inotifs < maxNumNotifs; inotifs++) { 
          if (inotifs<=this.notifs.length-1){
            this.lastNotifs[inotifs]=this.notifs[inotifs]
          }
        }
        if (this.notifs.length>maxNumNotifs
          ){
          let fakeLastNotif={}
          fakeLastNotif.message_en='... (Click to open view)'
          fakeLastNotif.message_es='... (Pulsa para abrir ventana)'
          this.lastNotifs[9]=fakeLastNotif
        }
      }
//    }

  }
  setNotif(e) {
    if (e.detail.message_en==='.'){
      return
    }
    if (e.detail.log) { // logging as required
      // delete unnecessity objects
      delete e.detail.log
      delete e.detail.finalToken
      this.notifs = [
        ...this.notifs,
        e.detail
      ]
      sessionStorage.setItem("notifs", JSON.stringify(this.notifs))
      this.requestUpdate()
      this.notifsPipeChanged()
    }
  }    
  certsUpdated() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    this.requestUpdate()
    this.updateProceduresMenu()
  }  


// Función para determinar si está en modo móvil
isMobile() {
  return window.innerWidth <= 768;
}

// Implementación de la lógica para mostrar/ocultar el menú móvil
toggleMobileMenu() {
  const mobileMenu = this.shadowRoot.querySelector('#mobileMenu');
  mobileMenu.classList.toggle('open');
  
  if (mobileMenu.classList.contains('open')) {
    document.addEventListener('click', this.closeMenuOnOutsideClick);
  } else {
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }
}

// Implementación para mostrar submenús en móvil
toggleMobileMenuItem(menu) {
  menu.isOpen = !menu.isOpen;
  const dropdown = this.shadowRoot.querySelector(`#${menu.id} .operation-dropdown-content`);
  if (dropdown) {
    dropdown.style.display = menu.isOpen ? 'block' : 'none';
  }

  // Si es un submenú, cerrar todos los demás submenús en modo móvil
  if (this.isMobile()) {
    const allDropdowns = this.shadowRoot.querySelectorAll('.operation-dropdown-content');
    allDropdowns.forEach(drop => {
      if (drop !== dropdown) {
        drop.style.display = 'none'; // Cerrar otros submenús
      }
    });
  }
}


closeMenuOnOutsideClick(event) {
  return
  const mobileMenu = this.shadowRoot.querySelector('#mobileMenu');
  if (mobileMenu && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.remove('open');
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }
}
// Función para abrir/cerrar el submenú en móvil
toggleMobileSubmenu = function(menu) {
  menu.open = !menu.open;
  this.requestUpdate(); // Actualizar el componente para reflejar el cambio en la UI
}
// Función para abrir/cerrar el menú Procedures en modo móvil
toggleProcedureMenuMobile = function(menu) {
  menu.open = !menu.open;
  this.requestUpdate(); // Actualizar el componente para reflejar los cambios en la UI
}

// Función para comprimir/desplegar el área de tabs
toggleTabArea() {
  this.tabAreaVisible = !this.tabAreaVisible;
  this.requestUpdate();
}

// Función para eliminar una pestaña
removeTab(tab) {
  this.tabs = this.tabs.filter(t => t.route !== tab.route);
  let openViews = JSON.parse(sessionStorage.getItem("openViews")) || [];
  openViews = openViews.filter(t => t.route !== tab.route);
  sessionStorage.setItem("openViews", JSON.stringify(openViews));
  this.requestUpdate();
}
}customElements.define('tr-dashboard', TrDashboard);
