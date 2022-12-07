import { html, css, unsafeCSS, nothing } from 'lit';
import { ProceduresMenu } from './elements/procedures-menu';
import { Layouts, displayFlex, horizontal, centerAligned } from '@collaborne/lit-flexbox-literals';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { navigator } from 'lit-element-router';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';
import '@spectrum-web-components/action-menu/sync/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js';
import '@spectrum-web-components/divider/sp-divider.js';
import '@material/mwc-drawer';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@trazit/relogin-dialog/relogin-dialog';
import '@trazit/tr-procedures/tr-procedures';
import './elements/tab-state';
import '@trazit/proc-management-home';
import { PlatformModel} from './PlatformModel'


export class TrDashboard extends connect(store)(navigator(ProceduresMenu)) {
  static get styles() {
    return [
      Layouts,
      css`
      :host {
        display: block;
      }
      .container {
        height: 100vh;
      }
      div#headerContent{
        padding: 3px;
      }
      div#procmgr { 
        background-image: url(/images/background_proc_management.jpg);
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
      }
      mwc-drawer.isfortesting.false {
        height: 80px;
        --mdc-drawer-width: 70%;
      }
      mwc-drawer.isfortesting.true {
        height: 80px;
        --mdc-drawer-width: 70%;        
      }
      mwc-top-app-bar-fixed.isfortesting.false {
          background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(214, 233, 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
          background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
          background : linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
          border-radius : 12px;
          -moz-border-radius : 12px;
          -webkit-border-radius : 12px;
          box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
          filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
      }
      mwc-top-app-bar-fixed.isfortesting.true {
        background : -moz-linear-gradient(46.71% -341.1% -76deg,rgba(214, 233, 248, 1) 43.85%,rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -webkit-gradient(linear,46.71% -341.1% ,53.29% 441.1% ,color-stop(0.4385,rgba(214, 233, 248, 1) ),color-stop(0.5866,rgba(255, 255, 255, 1) ));
        background : -o-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        background : -ms-linear-gradient(-76deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8', endColorstr='#FFFFFF' ,GradientType=0)";
        background : linear-gradient(166deg, rgba(98, 0, 238, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
        border-radius : 12px;
        -moz-border-radius : 12px;
        -webkit-border-radius : 12px;
        box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
        filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2.77, Off=2.77, Color='#144E75') progid:DXImageTransform.Microsoft.gradient(startColorstr='#D6E9F8',endColorstr='#FFFFFF' , GradientType=1);        
      }      
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: transparent;
        --mdc-theme-on-primary: #57cbee;
      }
      .header { 
        ${unsafeCSS(displayFlex)}
        ${unsafeCSS(horizontal)}
        ${unsafeCSS(centerAligned)}
        font-family: Myriad Pro;
        font-style: normal;
      }
      .header img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      mwc-icon-button[hidden] {
        display: none;
      }
      nav[hidden] {
        display: none;
      }
      nav {
        ${unsafeCSS(displayFlex)}
        ${unsafeCSS(horizontal)}
        ${unsafeCSS(centerAligned)}
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
      mwc-list-item {
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
        #tabHandle mwc-icon {
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
      }
    `];
  }

  firstUpdated() {
    console.log('PlatformModel', this.PlatformModel)
    super.firstUpdated()
    this.startSession = new Date().getTime()
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
    installMediaQueryWatcher(`(min-width: 960px)`, desktop => {
      this.desktop = desktop
    });
    if (!sessionStorage.getItem("partialToken") || !sessionStorage.getItem("userSession")) {
      return this.navigate("/")
    }
    // populate the notifs session state
    if (sessionStorage.getItem("notifs")) {
      this.notifs = JSON.parse(sessionStorage.getItem("notifs"))

      var maxNumNotifs=10
      if (this.notifs.length>0){
        var inotifs=0;
        for (inotifs = 0; inotifs < maxNumNotifs; inotifs++) { 
          if (inotifs<=this.notifs.length-1){
            this.lastNotifs[inotifs]=this.notifs[inotifs]
          }
        }
        if (this.notifs.length>maxNumNotifs
          ){
          var fakeLastNotif={}
          fakeLastNotif.message_en='... (Click to open view)'
          fakeLastNotif.message_es='... (Pulsa para abrir ventana)'
          this.lastNotifs[9]=fakeLastNotif
        }
      }

    }
    if (this.tabBar===null){return}
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    this.updateComplete.then(() => {
      this.dispatchEvent(new CustomEvent('completed'))
      this.tabBar.updateComplete.then(() => {
        this.tabBar.shadowRoot.querySelector(".mdc-top-app-bar__title").style.paddingLeft = "5px";
      })
      this.drawer.shadowRoot.querySelector(".mdc-drawer__content").style.backgroundColor = "#d6e9f8";
      this.actMenu.forEach(a => {
        a.shadowRoot.querySelector("sp-action-button").style.color = "rgb(3, 169, 244)"
        a.shadowRoot.querySelector("sp-action-button").style.backgroundColor = "transparent"
      })
    })
  }

  userSession() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (userSession) {
      return html`
        <label id="sessionLabel">
          ${userSession.header_info.first_name} ${userSession.header_info.last_name} (${userSession.userRole})<br>
          ${this.lang == "en" ? "Session" : "Sesión"} Id: ${userSession.appSessionId} (${this.config.dbName}${this.config.isForTesting ? " - Testing" : null})<br>
          ${this.desktop ? this.lang == "en" ? "Date: " : "Fecha: " : null}${userSession.appSessionStartDate}
        </label>
      `
    }
  }

  render() {    
    return html`
      ${this.userRole==="proc_management" ?
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

  setNotif(e) {
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
        break;
      case 'procedure':
        import('@trazit/procedure-management/procedure-management');
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
      default:
        import('./tr-default');
    }
    this.drawerState = false;
  }

  menuHover(menu) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => {
      if (s.id == menu) {
        s.open = true;
        // adjust menu and submenu styles
        setTimeout(() => {
          let popover = document.querySelectorAll("sp-popover")
          popover.forEach(p => {
            p.style.setProperty("--spectrum-popover-background-color", "rgb(3, 169, 244)")
            p.style.borderBottom = "1px solid black"
            p.style.boxShadow = "1px 1px #888"
            let pMenu = p.querySelector("sp-menu")
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

  selectedMenu(route) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => s.open = false)
    this.navigate(route)
  }

  logout() {
    window.sessionStorage.clear();
    window.location.href = "/";
  }

  stateChanged(state) {
    if (JSON.stringify(this.config) != JSON.stringify(state.app.config)) {
      this.config = state.app.config;
      console.log(this.config)
      if (this.config.local===true){
        this.PlatformModel = PlatformModel;
      }else{
        let userSession = JSON.parse(sessionStorage.getItem("userSession"))     
        if (userSession!==undefined&&userSession.platform_settings!==undefined){
          this.PlatformModel = userSession.platform_settings;
        }
        this.userRole=userSession.userRole
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
    <div class="container layout vertical" id="procmgr">  
    <mwc-drawer class="isfortesting ${this.config.isForTesting}" type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
    </mwc-drawer>
      <div class="container layout vertical" id="header"> 
        <h1>Welcome to the next level!!!</h1>   
        <sp-menu-item @click=${this.logout} style="color:#03a9f4"><mwc-icon slot="icon">logout</mwc-icon></sp-menu-item>
        <mwc-icon-button  style="color:#61c9f8" @click=${this.changeLang}>${this.flag}</mwc-icon-button>
        <proc-management-home></proc-management-home>
      </div>
    </div>

    `
  }
  proceduresOperationPlatform(){
    console.log('proceduresOperationPlatform', this.PlatformModel.headerAreas)
    return html`
    <div class="container layout vertical">
    
    <mwc-drawer class="isfortesting ${this.config.isForTesting}" type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
        <mwc-list>
          <mwc-list-item @click="${() => this.procCollapse=!this.procCollapse}">
            <span>${this.PlatformModel.headerAreas.proceduresOption["tabLabel_" + this.lang]}</span>
          </mwc-list-item>
          ${this.mobileVersion()}
          ${this.PlatformModel.headerAreas.notifications.display!==true ? nothing : 
          html`
            
            <mwc-list-item @click="${() => this.selectedMenu("/dashboard/notifications")}">
              <span>${this.PlatformModel.headerAreas.notifications["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>
            </mwc-list-item>            
          `}
          ${this.PlatformModel.headerAreas.myCertifications.display !==true ? nothing : 
          html`        
            <mwc-list-item @click="${() => this.certCollapse=!this.certCollapse}">
              <span>${this.PlatformModel.headerAreas.myCertifications["tabLabel_" + this.lang]} ${this.allPending()}</span>
            </mwc-list-item>
            <mwc-list class="sublist" ?hidden="${!this.certCollapse}">
              <mwc-list-item>
                <div style="margin-left:20px;display:flex;align-items:center;padding-left:10px;">
                  <div style="flex-grow:10;padding-left:10px;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_" + this.lang]} 
                    (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                    ${this.pendingSOP()}
                </div>
              </mwc-list-item>
              <mwc-list-item>
                <div style="margin-left:20px;display:flex;align-items:center;padding-left:10px;">
                  <div style="flex-grow:10;padding-left:10px;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_" + this.lang]} 
                  (<span style="color: #24c0eb;font-weight: bold;">00${this.analytics.length}</span>)</div>
                  ${this.pendingAnalytic()}
                </div>
              </mwc-list-item>
            </mwc-list>
          `}
          ${this.PlatformModel.headerAreas.mySettings.display !==true ? nothing : 
          html`              
            <mwc-list-item @click="${() => this.personalCollapse=!this.personalCollapse}">
              <span>${this.PlatformModel.headerAreas.mySettings["tabLabel_" + this.lang]}</span>
            </mwc-list-item>
            <mwc-list class="sublist" ?hidden="${!this.personalCollapse}">
            ${this.PlatformModel.headerAreas.mySettings.procedure.display !==true ? nothing :
            html`
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/procedure")}>
                <span>${this.PlatformModel.headerAreas.mySettings.procedure["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">route</mwc-icon>
              </mwc-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.incidents.display !==true ? nothing :
            html`  
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/incidents")}>
                <span>${this.PlatformModel.headerAreas.mySettings.incidents["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">bug_report</mwc-icon>
              </mwc-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.user.display !==true ? nothing :
            html`  
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/user")}>
                <span>${this.PlatformModel.headerAreas.mySettings.user["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">person</mwc-icon>
              </mwc-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.video.display !==true ? nothing :
            html`  
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/tutorial")}>
                <span>${this.PlatformModel.headerAreas.mySettings.video["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">video_library</mwc-icon>
              </mwc-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.endpoint.display !==true ? nothing :
            html`  
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/endpoints")}>
                <span>${this.PlatformModel.headerAreas.mySettings.endpoint["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">list</mwc-icon>
              </mwc-list-item>
            `}
            ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display !==true ? nothing :
            html`  
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/holidayscalendar")}>
                <span>${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">holidays_calendar</mwc-icon>
              </mwc-list-item>              
            `}
            </mwc-list>
          `}
          <sp-divider size="m"></sp-divider>
          <mwc-list-item @click=${this.logout}>
            <span>${this.PlatformModel.headerAreas.doLogout["label_" + this.lang]}</span>
          </mwc-list-item>
        </mwc-list>
        
        <div id="headerContent" slot="appContent">
          <mwc-top-app-bar-fixed class="isfortesting ${this.config.isForTesting}">
            <mwc-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
              @click="${() => this.drawerState = !this.drawerState}"></mwc-icon-button>
            <div class="header" slot="title">
              <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
              ${this.userSession()}
            </div>
            <nav slot="actionItems" ?hidden="${this.desktop}">
              <mwc-icon-button style="color:#03a9f4" @click=${this.changeLang}>${this.lang}</mwc-icon-button>
            </nav>
            
            <nav slot="actionItems" ?hidden="${!this.desktop}">
              ${this.desktopVersion()}
              ${this.PlatformModel.headerAreas.notifications.display !==true ? nothing : 
              html`      
                <sp-action-menu class="topMenu" id="notif-menu" size="m" @mouseover=${() => this.menuHover("notif-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @click=${() => this.selectedMenu("/dashboard/notifications")}>${this.PlatformModel.headerAreas.notifications["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>

                  <div slot="icon"></div>
                  ${this.lastNotifs.map((n, index) =>
                    html`
                    ${index>9 ?
                      html``: html`
                      <sp-menu-item>
                        <div style="display:flex;align-items:center;color:white">
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
                  <sp-menu-item style="background-color:rgb(227, 240, 250);color: #24c0eb;font-weight: bold;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.PlatformModel.headerAreas.myCertifications.sop["label_" + this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.sops.length}</span>)</div>
                      ${this.pendingSOP()}
                    </div>
                  </sp-menu-item>
                  <sp-menu-item style="background-color:rgb(227, 240, 250);color: #24c0eb;font-weight: bold;">
                    <div style="display:flex;align-items:center;width:170px;color:#24c0eb;font-weight: bold;">
                      <div style="flex-grow:10;rgb(36, 192, 235);" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.PlatformModel.headerAreas.myCertifications.analytic["label_" + this.lang]}
                      (<span style="color: #24c0eb;font-weight: bold;">${this.analytics.length}</span>)</div>
                      ${this.pendingAnalytic()}
                    </div>
                  </sp-menu-item>
                </sp-action-menu>
              `}
            ${this.PlatformModel.headerAreas.mySettings.display !==true ? 
              html`
              `: html`                    
                <sp-action-menu class="topMenu" id="settings" size="m" @mouseover=${e => this.menuHover("settings")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label"
                    @mouseover=${() => this.menuHover("settings")}>${this.PlatformModel.headerAreas.mySettings["tabLabel_" + this.lang]}</span>
                  ${this.PlatformModel.headerAreas.mySettings.procedure.display !==true ? nothing :
                  html`
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/procedure")} style="color:white">
                      <mwc-icon slot="icon">route</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.procedure["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.incidents.display !==true ? nothing :
                  html`
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/incidents")} style="color:white">
                      <mwc-icon slot="icon">bug_report</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.incidents["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.user.display !==true ? nothing :
                  html`  
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/user")} style="color:white">
                      <mwc-icon slot="icon">person</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.user["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.video.display !==true ? nothing :
                  html`  
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/tutorial")} style="color:white">
                      <mwc-icon slot="icon">video_library</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.video["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.endpoint.display !==true ? nothing :
                  html`  
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/endpoints")} style="color:white">
                      <mwc-icon slot="icon">list</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.endpoint["label_" + this.lang]}
                    </sp-menu-item>
                  `}
                  ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar.display !==true ? nothing :
                  html`  
                    <sp-menu-item @click=${() => this.selectedMenu("/dashboard/holidayscalendar")} style="color:white">
                      <mwc-icon slot="icon">list</mwc-icon>
                      ${this.PlatformModel.headerAreas.mySettings.holidaysCalendar["label_" + this.lang]}
                    </sp-menu-item>                  
                  `}
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item @click=${this.logout} style="color:#D6E9F8">
                    <mwc-icon slot="icon">logout</mwc-icon>
                    ${this.PlatformModel.headerAreas.doLogout["label_" + this.lang]}
                  </sp-menu-item>
                </sp-action-menu>
              `}
              <sp-menu-item @click=${this.logout} style="color:#D6E9F8">
              <mwc-icon slot="icon">logout</mwc-icon></sp-menu-item>

              <mwc-icon-button  style="color:#61c9f8" @click=${this.changeLang}>${this.flag}</mwc-icon-button>
            </nav>
          </mwc-top-app-bar-fixed>
        </div>
      </mwc-drawer>
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
                <mwc-icon @click=${e=>{this.showTab=!this.showTab;e.target.icon=e.target.icon=="visibility"?"visibility_off":"visibility"}}>arrow_drop_up</mwc-icon>
                <div></div>
              </div>
              <div class="layout horizontal flex" style="margin-top:5px">
                ${this.tabMobileState()}
              </div>
            `
          }
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <tr-procedures .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'procedures' ? false : true}></tr-procedures>
          <procedure-management .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'procedure' ? false : true} .params=${this.params}>
          </procedure-management>
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
          <endpoints-list .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'endpoints' ? false : true}
            .params=${this.params}></endpoints-list>
          <holiday-calendars .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'holidayscalendar' ? false : true} .params=${this.params}>
          </holiday-calendars>              
        </div>
      </main>
    </div>
    <relogin-dialog .lang=${this.lang} .config=${this.config} @logout=${this.logout}></relogin-dialog>     
    
    `
  }
}
customElements.define('tr-dashboard', TrDashboard);