import { html, css, unsafeCSS, nothing } from 'lit';
import { ProceduresMenu } from './elements/procedures-menu';
//import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { navigator } from 'lit-element-router';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';
import '@spectrum-web-components/action-menu/sync/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js';
import '@spectrum-web-components/divider/sp-divider.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button';
import '@material/mwc-drawer'; // Still not released for @material/web
import '@material/mwc-top-app-bar-fixed'; // Still not released for @material/web
import '@trazit/relogin-dialog/relogin-dialog';
import '@trazit/tr-procedures/tr-procedures';
import './elements/tab-state';
import '@trazit/tr-procedures/src/components/ProcManagement/proc-management-home';
import { PlatformModel} from './PlatformModel';
import { MdFilledIconButtonStyles } from './md3-buttons-styles';

export class TrDashboard extends connect(store)(navigator(ProceduresMenu)) {
  static get styles() {
    return [          
   
      css`
      ${MdFilledIconButtonStyles}

      :host {
        display: block;
          --md-icon-button-icon-size: 32px;
  --md-sys-color-on-surface-variant: #dc362e;
  background-color: #fff8f6;
      }
      div#headerContent{
        padding: 3px;
        z-index: 1;
        position: relative;
      }
      div#procmgr { 
        /* background-image: url(/images/background_proc_management.jpg); */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        width: 100%;        
      }
      div[hidden] {
        display: none;
      }
      mwc-drawer {
        height: 80px;
        --mdc-drawer-width: 70%; 
        position: sticky;
        top: 0;
        z-index: 10;       
      }
      mwc-drawer.isfortesting.false {
        height: 80px;
        --mdc-drawer-width: 70%;
      }
      mwc-drawer.isfortesting.true {
        height: 80px;
        --mdc-drawer-width: 70%;        
      }
     .isfortesting.false {
          background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(214, 233, 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
          background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
          background : linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          border-radius : 12px;
          position: sticky;
          -moz-border-radius : 12px;
          -webkit-border-radius : 12px;
          box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
          --background-gradient:linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
          
      }
      .isfortesting.true {
        background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(224 214 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
        background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
        background : linear-gradient(166deg, rgba(224 214 248 / 81%) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        border-radius : 12px;
        -moz-border-radius : 12px;
        -webkit-border-radius : 12px;
        box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
        --background-gradient: linear-gradient(166deg, rgba(98, 0, 238, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
      }      
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: var(--background-gradient);
        --mdc-theme-on-primary: #57cbee;
      }
    .container {
      height: 100vh;
    }
    .flex-row {
      display: flex;
      flex-direction: row;
    }
    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Myriad Pro;
      font-style: normal;
    }
      .header img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      md-outlined-icon-button[hidden] {
        display: none;
      }
      nav[hidden] {
        display: none;
      }
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
      nav a {
        text-decoration: none;
        background-color: #2ec3ec;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin-right: 20px;
        cursor: pointer;
      }
      sp-action-menu {
        margin-right: 5px;
      }
      sp-action-menu * {
        font-family : Myriad Pro;
        font-size : 18px;
        color : #24C0EB;
        color : rgb(36, 192, 235);   
      }
      #sessionLabel {
        font-family : Myriad Pro;
        font-size : 14px;
        line-height : 21px;
        color : #24C0EB;
        color : rgb(36, 192, 235);        
      }
      .sublist[hidden] {
        display: none;
      }
      md-list-item {
        font-size: 12px;   
        width: 90%;     
      }
      .subproc {
        margin-left: 15px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 960px) {
        mwc-drawer {
          padding-top: 0;
          height: 50px;
        }
        .header img {
          width: 50px;
          height: 50px;
          margin-right: 0;
          margin-left: -10px;
        }
        #sessionLabel {
          line-height:normal;
          font-size:10px;
        }
        main {
          padding: 0 10px 10px;
          margin-top:-15px;
        }
        #tabHandle {
          position: absolute;
          top: 0px; 
          transform-origin: right bottom;
          transform: rotate(-180deg);
          cursor: pointer;
          
          /* left:-40px; */
          right: 60px;
        }
        #tabHandle md-icon {
          --mdc-icon-size: 50px;
          color: rgb(82, 193, 245);
        }
        #tabHandle div {
          border-radius: 10%;
          text-align: center;
          font-size: 10px;
          font-weight: bold;
          font-family: arial;
          background: #03a9f4;
          color: white;
          padding: 5px;
          margin-top: -18px;  
                
        }
        hr{
          height:100vh;
          width:.5vh;
          border-width:0;
          color:#000;
          background-color:#000;
        }   
        sp-menu-item.notif_item_divfalse{
          display:flex;
          align-items:center;          
          color: red; /* #0085ff; */
        }
        sp-menu-item.notif_item_divtrue{
          display:flex;
          align-items:center;          
          color: blue; /* #a33; */
        }       
      }
      div#headerout {
        position: absolute;
        z-index:9999;
        right: 10px;
      }
    `];
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

  async loadConfig() {
    try {
      const response = await fetch('../../config.json');
      this.config = await response.json();
    } catch (error) {
      console.error('Error loading config:', error);
    }
  }  
  firstUpdated() {
    this.loadConfig()
    console.log('PlatformModel', this.PlatformModel)
    super.firstUpdated()
    this.startSession = new Date().getTime()
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
    // installMediaQueryWatcher(`(min-width: 960px)`, desktop => {
    //   this.desktop = desktop
    // });
      const mediaQuery = window.matchMedia('(min-width: 960px)');
      this.desktop = mediaQuery.matches;
      mediaQuery.addEventListener('change', (e) => this.desktop = e.matches);

    if (!sessionStorage.getItem("partialToken") || !sessionStorage.getItem("userSession")) {
      return this.navigate("/")
    }
    if (this.tabBar!=null){
      this.updateComplete.then(() => {
        this.dispatchEvent(new CustomEvent('completed'))
        this.tabBar.updateComplete.then(() => {
          this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.paddingLeft = "5px";
          if (this.isForTesting){
            this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.background = "linear-gradient(166deg, rgba(98, 0, 238, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);";
          }else{
            this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.background = "linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);";
          }
        })
        // this.drawer.shadowRoot.querySelector(".mdc-drawer__content").style.backgroundColor = "#d6e9f8";
        // this.actMenu.forEach(a => {
        //   a.shadowRoot.querySelector("sp-action-button").style.color = "rgb(3, 169, 244)"
        //   a.shadowRoot.querySelector("sp-action-button").style.backgroundColor = "transparent"
        // })
      })    
    }
    if (this.tabBar===null){return}
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.sops = []
    if (userSession!==undefined&&userSession.all_my_sops&&undefined){
      this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    }
    this.analytics = []
    if (userSession!==undefined&&userSession.all_my_analysis_methods&&undefined){
      this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    }
    if (userSession.all_my_pending_certif_approvals!==undefined&&userSession.all_my_pending_certif_approvals.num_objects>0){
      this.myPendingCertifApprovals = userSession.all_my_pending_certif_approvals.num_objects>0 ? userSession.all_my_pending_certif_approvals.objects : this.myPendingCertifApprovals
    }
  }

  userSession() {
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
    //alert(this.userRole)
    return html`

      ${this.userRole.includes("trazit_pm")||this.userRole==='proc_management' ?
      html`
        ${this.proceduresManagementPlatform()}        
      `
      :html`
        ${this.proceduresOperationPlatform()}
      `}
     
      
    ` 
    ;
  }
  // <!-- ${this.setStyle()} -->
  setStyle(){
    console.log('setStyle')
    //let chartObj=this.shadowRoot.querySelector("section#actions")
    let chartObj = this.shadowRoot.querySelectorAll("mwc-top-app-bar-fixed")
    
    //let chartObj = document.querySelector("mdc-top-app-bar")
    if (chartObj!==undefined&&chartObj!==null&&chartObj.length>0){
      chartObj.forEach((r, i) => {
        console.log(i, r)
      })
      //let violetObj = chartObj.querySelectorAll.map
      //alert("Esooo")
    }
    console.log('chartObj', chartObj)
  }
  /**
   * updating the cert number state once mark completed done
   */
  certsUpdated() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    this.requestUpdate()
    this.updateProceduresMenu()
  }

  tabState() {
    return html`
      <tab-state
        .lang=${this.lang} 
        .config=${this.config} 
        .params=${this.params} 
        .query=${this.query}
        .selectedProc=${this.selectedProc}></tab-state>
    `
  }

  tabMobileState() {
    return html`
      <tab-state
        ?hidden=${!this.showTab} 
        .lang=${this.lang} 
        .config=${this.config} 
        .params=${this.params} 
        .query=${this.query}
        .selectedProc=${this.selectedProc}></tab-state>
    `
  }

  get tabBar() {
    return this.shadowRoot.querySelector("mwc-top-app-bar-fixed")
  }

  get subMenu() {
    return this.shadowRoot.querySelectorAll("sp-action-menu.subMenu")
  }

  get actMenu() {
    return this.shadowRoot.querySelectorAll("sp-action-menu.topMenu")
  }

  get drawer() {
    return this.shadowRoot.querySelector("mwc-drawer")
  }

  get myCerts() {
    return this.shadowRoot.querySelector("my-certifications")
  }

  get tabs() {
    return this.shadowRoot.querySelector("tab-state")
  }

  get relogin() {
    this.shadowRoot.querySelector("relogin-dialog")
  }

  static get properties() {
    return {
      params: { type: Object }, // route params which is passed from parent element (root app)
      query: { type: Object }, // route query which is passed from parent element (root app)
      desktop: { type: Boolean },
      drawerState: { type: Boolean },
      config: { type: Object },
      lang: { type: String },
      flag: { type: String },
      sops: { type: Array },
      analytics: { type: Array },
      notifs: { type: Array },
      lastNotifs: { type: Array },
      notifsCollapse: { type: Boolean },      
      procCollapse: { type: Boolean },
      airCollapse: { type: Boolean },
      waterCollapse: { type: Boolean },
      certCollapse: { type: Boolean },
      personalCollapse: { type: Boolean },
      showTab: { type: Boolean },
      PlatformModel: { type: Object},
      userRole: {type: String}
    };
  }

  constructor() {
    super();
    this.params = {};
    this.query = {};
    this.drawerState = false;
    this.config = {};
    this.lang = "en";
    this.sops = [];
    this.analytics = [];
    this.myPendingCertifApprovals = [];
    this.notifs = [];
    this.lastNotifs = [];    
    this.showTab = false;
    this.PlatformModel = {};
    this.PlatformModel = PlatformModel;
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

  updated(updates) {
    // except authenticated users, not allowed to route the sub project pages
    if (updates.has('params')) {
      this._paramsChanged()
    }
    if (updates.has("lang")) {
      this.changeFlag()
    }
  }

  changeLang() {
    if (this.flag == "en") {
      this.lang = "en"
      this.flag = "es"
    } else {
      this.lang = "es"
      this.flag = "en"
    }
  }

  changeFlag() {
    if (this.lang == "en") {
      this.flag = "es"
    } else {
      this.flag = "en"
    }
  }

  get trProc() {
    return this.shadowRoot.querySelector("tr-procedures")
  }

  _paramsChanged() {
    this.requestUpdate(); // call it to wait the page props complete updated
    switch (this.params.menu) {
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
        import('@trazit/platform-notif/platform-notif');
        break;
      case 'certifications':
        import('@trazit/my-certifications/my-certifications');
        break;
      case 'incidents':
        import('@trazit/my-incidents/my-incidents');
        break;
      case 'user':
        import('@trazit/user-profile/user-profile');
        break;
      case 'tutorial':
        import('@trazit/video-tutorial/video-tutorial');
        break;
      case 'endpoints':
        import('@trazit/endpoints-list/endpoints-list');
        break;
      case 'holidayscalendar':
        import('@trazit/holiday-calendars/holiday-calendars');
        break;
      case 'platformusersessions':
        ////import('@trazit/platform-usersessions/platform-usersessions');
        break;  
      default:
        import('./tr-default');
    }
    this.drawerState = false;
  }

  menuHoverShowLastNotif() {
    let notifsArr=[{'id':1}, {'id':2}]
    if (notifsArr===undefined||notifsArr.length==0){
      return 
    }    
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => {
      if (s.id == 'notif-menu') {
        s.open = true;
        // adjust menu and submenu styles
        setTimeout(() => {
          let popover = document.querySelectorAll("sp-popover")
          popover.forEach(p => {
            p.style.setProperty("--spectrum-popover-background-color", "rgb(3, 169, 244)")
            p.style.setProperty("background-color", "white")
            p.style.setProperty("max-width", "calc(103% - var(--spectrum-overlay-animation-distance")
            p.style.borderBottom = "1px solid black"
            p.style.boxShadow = "1px 1px #888"
            let pMenu = p.querySelector("sp-menu")
            pMenu.style.overflowX="hidden"
            pMenu.style.margin = "0"
            let spMenu = p.querySelectorAll("sp-menu-item")
            spMenu.forEach((s,i) => {
              s.style.borderBottom = "1px solid black"
              s.style.boxShadow = "1px 1px #888"
            })
          })
        })
      } else {
        s.open = false
      }
    })
  }

  menuHover(menu) {

    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => {
      if (s.id == menu) {
        s.open = true;
        // adjust menu and submenu styles
        setTimeout(() => {
          let popover = document.querySelectorAll("sp-popover")
          popover.forEach(p => {
            p.style.setProperty("--spectrum-popover-background-color", "rgb(227, 240, 250)")
            p.style.borderBottom = "1px solid black"
            p.style.boxShadow = "1px 1px #888"
            let pMenu = p.querySelector("sp-menu")
            pMenu.style.margin = "0"
            let spMenu = p.querySelectorAll("sp-menu-item")
            spMenu.forEach((s,i) => {
              s.style.setProperty("--spectrum-popover-background-color", "rgb(36, 192, 235)")
              s.style.borderBottom = "1px solid black"
              s.style.boxShadow = "1px 1px #888"
            })
          })
        })
      } else {
        s.open = false
      }
    })
  }

  selectedMenu(route) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => s.open = false)
    this.navigate(route)
  }
  logout() {
    window.sessionStorage.clear();
    window.location.href = "/";
  }
  stateChanged(state) {
    let userSession = JSON.parse(sessionStorage.getItem("userSession")) 
    this.userRole=userSession.userRole  
    if (JSON.stringify(this.config) != JSON.stringify(state.app.config)) {
      this.config = state.app.config;
      console.log(this.config)
      if (this.config.local===true){
        this.PlatformModel = PlatformModel;
      }else{
          
        if (userSession!==undefined&&userSession.platform_settings!==undefined){
          this.PlatformModel = userSession.platform_settings;
        }
        
      }
  

    }
    if (this.lang != state.app.lang) {
      this.lang = state.app.lang;
    }
    if (state.app.activity) {
      // if any api activities, reset the startSession to current datetime
      this.startSession = new Date().getTime()
    }
  }
  proceduresManagementPlatform(){
    return html`
    <div class="container layout" id="procmgr">  
    <mwc-drawer style="display:none;"  type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
    </mwc-drawer>

    <div id="headerContent" slot="appContent" style="position:sticky;">
    <!-- <mwc-top-app-bar-fixed class="isfortesting ${this.config.isForTesting}"> -->
      <div class="header isfortesting ${this.config.isForTesting}" slot="title" style="width:100%; max-height: 79px; position: fixed; top: 0; left: 0; z-index: 1000;">
        <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
        ${this.userSession()}
        <div class="layout horizontal center flex wrap" id="headerout2" style="display: flex; justify-content: flex-end;">    
        ${this.desktop?html`        
          <h1 style="font-size:2.7vw; padding-left:50px;color:#61c9f8;font-family: Montserrat;font-weight: bold;padding-right: 100px;flex-grow:1;">Procedures Definition</h1>
        `:nothing}
        <md-outlined-icon-button  style="color:#61c9f8" id="changelang" @click=${this.changeLang}>${this.flag}</md-outlined-icon-button>        
          <sp-menu-item id="logout" style="padding-left:10px;color:#03a9f4;margin-right: 17px;" @click=${this.logout} ><md-icon slot="icon">logout</md-icon></sp-menu-item>
          </div>  
      </div>
    <!-- </mwc-top-app-bar-fixed> -->
    </div>      
      <proc-management-home style="position:relative; top:80px;" .area="app" .lang=${this.lang} .config=${this.config}></proc-management-home>
    </div>
    `
  }
  proceduresOperationPlatform(){
    if (this.PlatformModel.proceduresOption===undefined){this.PlatformModel=PlatformModel}
    //console.log('proceduresOperationPlatform', this.PlatformModel.headerAreas)
    return html`
    <style>
    .mainbackground{
      background-image: url(images/abstract.jpg);
      /* display: flex; */
      /* justify-content: center; */
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-image: url(/images/abstract.jpg);
      /* background-color: #0465fb; */
      background-size: cover;
      background-repeat: no-repeat;
      background: url(/images/abstract.jpg), #ffffffb0;
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
      position: relative;      
    }

    mwc-drawer::part(mdc-drawer-app-content) {
      overflow: hidden;
    }    
    </style>
    
    <div class="container layout vertical">
    <mwc-drawer class="isfortesting ${this.config.isForTesting}" type="modal" style="position:sticky;" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
        <md-list>
          <md-list-item id="dashboardmyprocedures" @click="${() => this.procCollapse=!this.procCollapse}">
            <span>${this.PlatformModel.headerAreas.proceduresOption["tabLabel_" + this.lang]}</span>
          </md-list-item>
          ${this.mobileVersion()}
          ${this.PlatformModel.headerAreas.notifications.display!==true ? nothing : 
          html`
            
            <md-list-item id="dashboardnotifications" @click="${() => this.selectedMenu("/dashboard/notifications")}">
              <span>${this.PlatformModel.headerAreas.notifications["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>
            </md-list-item>            
          `}
          ${this.PlatformModel.headerAreas.myCertifications.display !==true ? nothing : 
          html`        
            <md-list-item id="dashboardmycertifications" @click="${() => this.certCollapse=!this.certCollapse}">
              <span>${this.PlatformModel.headerAreas.myCertifications["tabLabel_" + this.lang]} ${this.allPending()}</span>
            </md-list-item>
            <md-list class="sublist" ?hidden="${!this.certCollapse}">
              <md-list-item>
                <div style="display:flex;align-items:center;">
                  <div style="flex-grow:5;margin-left: 2vw;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_" + this.lang]} 
                    (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                    ${this.pendingSOP()}
                </div>
              </md-list-item>
              <md-list-item>
                <div style="display:flex;align-items:center;">
                  <div style="flex-grow:5;margin-left: 2vw;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_" + this.lang]} 
                  (<span style="color: #24c0eb;font-weight: bold;">00${this.analytics.length}</span>)</div>
                  ${this.pendingAnalytic()}
                </div>
              </md-list-item>
              ${this.myPendingCertifApprovals===undefined||this.myPendingCertifApprovals.length===0 ? nothing :
                html`  
                  <md-list-item>
                    <div style="display:flex;align-items:center;">
                      <div style="flex-grow:5;margin-left: 2vw;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${this.PlatformModel.headerAreas.myCertifications.reviewerPendingSign["label_" + this.lang]} 
                      (<span style="color: #24c0eb;font-weight: bold;">00${this.myPendingCertifApprovals.length}</span>)</div>
                      ${this.myPendingCertificationApprovals()}
                    </div>
                  </md-list-item>
                `}
            </md-list>
          `}
          ${this.PlatformModel.headerAreas.mySettings.display !==true ? nothing : 
          html`              
            <md-list-item id="dashboardmysettings" @click="${() => this.personalCollapse=!this.personalCollapse}">
              <span>${this.PlatformModel.headerAreas.mySettings["tabLabel_" + this.lang]}</span>
            </md-list-item>
            <md-list class="sublist" ?hidden="${!this.personalCollapse}">
            ${this.PlatformModel.headerAreas.mySettings.procedure ===undefined || this.PlatformModel.headerAreas.mySettings.procedure.display ===undefined || this.PlatformModel.headerAreas.mySettings.procedure.display !==true ? nothing :
            html`
              <md-list-item graphic="avatar" id="mysettingsprocedure" @click=${() => this.selectedMenu("/dashboard/procedure")}>
                <span>${this.PlatformModel.headerAreas.mySettings.procedure["label_" + this.lang]}</span>
                <md-icon slot="graphic">route</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.incidents.display !==true ? nothing :
            html`  
              <md-list-item graphic="avatar" id="mysettingsincidents" @click=${() => this.selectedMenu("/dashboard/incidents")}>
                <span>${this.PlatformModel.headerAreas.mySettings.incidents["label_" + this.lang]}</span>
                <md-filled-icon-button style="background-color: transparent; border: none;"><md-icon slot="graphic">bug_report</md-icon></md-filled-icon-button>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.user.display !==true ? nothing :
            html`  
              <md-list-item graphic="avatar" id="mysettingsuser" @click=${() => this.selectedMenu("/dashboard/user")}>
                <span>${this.PlatformModel.headerAreas.mySettings.user["label_" + this.lang]}</span>
                <md-icon slot="graphic">person</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.platformusersessions===undefined||this.PlatformModel.headerAreas.mySettings.platformusersessions.display===undefined||this.PlatformModel.headerAreas.mySettings.platformusersessions.display !==true ? nothing :
              html`  
                <md-list-item graphic="avatar" id="mysettingsplatformusersessions" @click=${() => this.selectedMenu("/dashboard/platformusersessions")}>
                  <span>${this.PlatformModel.headerAreas.mySettings.platformusersessions["label_" + this.lang]}</span>
                  <md-icon slot="graphic">person</md-icon>
                </md-list-item>
              `}            
            ${this.PlatformModel.headerAreas.mySettings.video.display !==true ? nothing :
            html`  
              <md-list-item graphic="avatar" id="mysettingstutorial" @click=${() => this.selectedMenu("/dashboard/tutorial")}>
                <span>${this.PlatformModel.headerAreas.mySettings.video["label_" + this.lang]}</span>
                <md-icon slot="graphic">video_library</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.endpoint.display !==true ? nothing :
            html`  
              <md-list-item graphic="avatar" id="mysettingsendpoints" @click=${() => this.selectedMenu("/dashboard/endpoints")}>
                <span>${this.PlatformModel.headerAreas.mySettings.endpoint["label_" + this.lang]}</span>
                <md-icon slot="graphic">list</md-icon>
              </md-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display !==true ? nothing :
            html`  
              <md-list-item graphic="avatar" id="mysettingsholidayscalendar" @click=${() => this.selectedMenu("/dashboard/holidayscalendar")}>
                <span>${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_" + this.lang]}</span>
                <md-icon slot="graphic">holidays_calendar</md-icon>
              </md-list-item>              
            `}
            </md-list>
          `}
          <sp-divider size="m"></sp-divider>
          <md-list-item id="logout" @click=${this.logout}>
            <span>${this.PlatformModel.headerAreas.doLogout["label_" + this.lang]}</span>
          </md-list-item>
        </md-list>
        
         <div id="headerContent" slot="appContent" style="position:sticky;"> 
        <!--   <mwc-top-app-bar-fixed class="isfortesting ${this.config.isForTesting}"> -->
            ${this.desktop?nothing:html`
              <md-filled-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
                @click="${() => this.drawerState = !this.drawerState}"><md-icon>menu</md-icon></md-filled-icon-button>
            `}            
            <div class="header  ${this.config.isForTesting}" slot="title" style="width:96vw;">
              <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
              ${this.userSession()}
            
            <nav slot="actionItems" ?hidden="${this.desktop}">
              <md-outlined-icon-button id="changelang" style="color:#03a9f4" @click=${this.changeLang}>${this.lang}</md-outlined-icon-button>
            </nav>
            
            <nav slot="actionItems" ?hidden="${!this.desktop}">
              ${this.desktopVersion()}
              ${this.PlatformModel.headerAreas.notifications.display !==true ? nothing : 
              html`      
                <sp-action-menu class="topMenu" id="notif-menu" size="m" @mouseover=${() => this.menuHover("notif-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("notif-menu")} @click=${() => this.selectedMenu("/dashboard/notifications")}>${this.PlatformModel.headerAreas.notifications["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>

                  <div slot="icon"></div>
                  ${this.lastNotifs.map((n, index) =>
                    html`
                    ${index>9 ?
                      html``: html`
                      <sp-menu-item id="notif-item" class="notif_item_div${n.is_error}">
                        <div id="notif-item-div" style='display:flex;align-items:center;color:${this.notifItemColor(n)}'>
                          <div style="flex-grow:10;" @click=${() => this.selectedMenu("/dashboard/notifications")}>${n["message_" + this.lang]}
                          </div>
                          ${this.pendingSOP()}
                        </div>
                      </sp-menu-item>
                      `}
                    `
                )}
                </sp-action-menu>
              `}
              ${this.PlatformModel.headerAreas.myCertifications.display !==true ? nothing : 
              html`        
                <sp-action-menu class="topMenu" id="cert-menu" size="m" @mouseover=${() => this.menuHover("cert-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("cert-menu")}>${this.PlatformModel.headerAreas.myCertifications["tabLabel_" + this.lang]}
                    ${this.allPending()}</span>
                  <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_" + this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                      ${this.pendingSOP()}
                    </div>
                  </sp-menu-item>
                  <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_" + this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.analytics.length}</span>)</div>
                      ${this.pendingAnalytic()}
                    </div>
                  </sp-menu-item>
                  ${this.myPendingCertifApprovals===undefined||this.myPendingCertifApprovals.length===0 ? nothing :
                    html`      
                      <sp-menu-item style="background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;">
                        <div style="display:flex;align-items:center;width:240px;color:#24c0eb;font-weight: bold;">
                          <div style="flex-grow:10;rgb(36, 192, 235);" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=myPendingCertificationApprovals")}>${this.PlatformModel.headerAreas.myCertifications.reviewerPendingSign["label_" + this.lang]}
                          (<span style="color: #24c0eb;font-weight: bold;">${this.myPendingCertifApprovals.length}</span>)</div>
                          ${this.myPendingCertificationApprovals()}
                        </div>
                      </sp-menu-item>
                  `}
                </sp-action-menu>
              `}
            ${this.PlatformModel.headerAreas.mySettings.display !==true ? 
              html`
              `: html`                    
                <sp-action-menu class="topMenu" id="dashboardmysettings" size="m" @mouseover=${e => this.menuHover("dashboardmysettings")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label">${this.PlatformModel.headerAreas.mySettings["tabLabel_" + this.lang]}</span>
                  ${this.PlatformModel.headerAreas.mySettings.procedure ===undefined || this.PlatformModel.headerAreas.mySettings.procedure.display ===undefined ||this.PlatformModel.headerAreas.mySettings.procedure.display !==true ? nothing :
                  html`
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsprocedure" @click=${() => this.selectedMenu("/dashboard/procedure")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">route</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.procedure["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.incidents.display !==true ? nothing :
                  html`
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsincidents" @click=${() => this.selectedMenu("/dashboard/incidents")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">bug_report</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.incidents["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.user.display !==true ? nothing :
                  html`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsuser" @click=${() => this.selectedMenu("/dashboard/user")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">person</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.user["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.platformusersessions===undefined||this.PlatformModel.headerAreas.mySettings.platformusersessions.display===undefined||this.PlatformModel.headerAreas.mySettings.platformusersessions.display !==true ? nothing :
                    html`  
                      <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsplatformusersessions" @click=${() => this.selectedMenu("/dashboard/platformusersessions")} style="color:rgb(36, 192, 235)">
                        <md-icon slot="icon">person</md-icon>
                        ${this.PlatformModel.headerAreas.mySettings.platformusersessions["label_" + this.lang]}
                      </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.video.display !==true ? nothing :
                    html`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingstutorial" @click=${() => this.selectedMenu("/dashboard/tutorial")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">video_library</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.video["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.endpoint.display !==true ? nothing :
                  html`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsendpoints" @click=${() => this.selectedMenu("/dashboard/endpoints")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">list</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.endpoint["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display !==true ? nothing :
                  html`  
                    <sp-menu-item style="color: #37849c; background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingsholidayscalendar" @click=${() => this.selectedMenu("/dashboard/holidayscalendar")} style="color:rgb(36, 192, 235)">
                      <md-icon slot="icon">list</md-icon>
                      ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_" + this.lang]}
                    </sp-menu-item>                  
                  `}
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item style="color: rgb(235 36 110); background:linear-gradient(166deg, rgba(36 192 235 / 23%) 43.85%, rgba(255, 255, 255, 1) 58.66%); border-bottom:solid 1px; font-weight:bold;background-color:#E3F0FA;" id="mysettingslogout" @click=${this.logout} style="color:rgb(36, 192, 235)">
                    <md-icon slot="icon">logout</md-icon>
                    ${this.PlatformModel.headerAreas.doLogout["label_" + this.lang]}
                  </sp-menu-item>
                </sp-action-menu>
              `}
              <sp-menu-item id="logout" @click=${this.logout} style="color:#D6E9F8">
              <md-filled-icon-button id="logout1" style="background-color: transparent; border: none;">
                <md-icon>logout</md-icon></md-filled-icon-button>
              </sp-menu-item>

              <md-icon-button  id="changelang" style="color:#61c9f8" @click=${this.changeLang}>${this.flag}</md-icon-button>

              </nav>
            </div>
        <!--   </mwc-top-app-bar-fixed> -->
         </div> 
      </mwc-drawer>
      <div class="mainbackground">
      <main class="layout vertical flex">
        ${this.desktop ? 
          html`${this.tabState()}` : nothing
        }
        <div class="content">
          ${this.desktop ? 
            nothing :
            html`
              <div id="tabHandle" 
                >
                <md-icon @click=${e=>{this.showTab=!this.showTab;e.target.icon=e.target.icon=="visibility"?"visibility_off":"visibility"}}>arrow_drop_up</md-icon>
                <div></div>
              </div>
              <div class="layout horizontal flex" style="margin-top:5px" style="display: flex; justify-content: flex-end;">
                ${this.tabMobileState()}
              </div>
            `
          }
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <tr-procedures .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'procedures' ? false : true}></tr-procedures>
          <platform-notif .lang=${this.lang} .notifs=${this.notifs} ?hidden=${this.params.menu == 'notifications' ? false : true} .params=${this.params}></platform-notif>
          <my-certifications 
            .lang=${this.lang} 
            .config=${this.config} 
            .filterData=${this.query.filterData} ?hidden=${this.params.menu == 'certifications' ? false : true} 
            .params=${this.params}
            @certs-updated=${this.certsUpdated}>
          </my-certifications>
          <my-incidents .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'incidents' ? false : true} .params=${this.params}>
          </my-incidents>
          <user-profile .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'user' ? false : true}
            .params=${this.params} @save-tabs=${()=>this.tabs.saveTabs()}></user-profile>
          <video-tutorial .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'tutorial' ? false : true}
            .params=${this.params}></video-tutorial>
          <endpoints-listbymodule .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'endpoints' ? false : true}
            .params=${this.params}></endpoints-listbymodule>
          <platform-usersessions .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'platformusersessions' ? false : true}
            .params=${this.params}></platform-usersessions>
          <holiday-calendars .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'holidayscalendar' ? false : true} .params=${this.params}>
          </holiday-calendars>              
        </div>
      </main>
    </div>
    </div>
    <relogin-dialog .lang=${this.lang} .config=${this.config} @logout=${this.logout}></relogin-dialog>     
    
    `
  }
  notifItemColor(item){
    if (item.is_error){
      return '#a33'
    }else{
      return '#0085ff'
    }
  }
}
customElements.define('tr-dashboard', TrDashboard);