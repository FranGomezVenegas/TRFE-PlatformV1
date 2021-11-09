import { LitElement, html, css } from 'lit-element';
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
import './tab-state';
import './relogin-dialog';

const langConfig = {
  "proceduresOption": {
    "tabLabel_en": "Procedures",
    "tabLabel_es": "Procesos"
  },
  "notificationsOption": {
    "tabLabel_en": "Notifications",
    "tabLabel_es": "Notificaciones"
  },
  "certOption": {
    "tabLabel_en": "My Certifications",
    "tabLabel_es": "Mi Certificaciones",
    "sop": {
      "label_en": "SOP",
      "label_es": "SOP"
    },
    "analytic": {
      "label_en": "Analytical Method",
      "label_es": "Método analítico"
    }
  },
  "personalOption": {
    "tabLabel_en": "My Settings",
    "tabLabel_es": "Mi Espacio",
    "procedure": {
      "label_en": "Procedure",
      "label_es": "Proceso"
    },
    "incidents": {
      "label_en": "Incidents",
      "label_es": "Incidencias"
    },
    "user": {
      "label_en": "User",
      "label_es": "Usuario"
    },
    "video": {
      "label_en": "Video Tutorial",
      "label_es": "Tutorial en Video"
    },
    "doLogout": {
      "label_en": "Close Session",
      "label_es": "Cerrar Sesión"
    }
  }
}

export class TrDashboard extends connect(store)(navigator(LitElement)) {
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
      div[hidden] {
        display: none;
      }
      mwc-drawer {
        height: 80px;
        color: #2ec3ec;
        padding-top: 10px;
        background-color: #d6e9f8;
      }
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: #d6e9f8;
        --mdc-theme-on-primary: #2ec3ec;
      }
      .header {
        ${displayFlex}
        ${horizontal}
        ${centerAligned}
        font-family: 'Open Sans', sans-serif;
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
        ${displayFlex}
        ${horizontal}
        ${centerAligned}
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
      main {
        padding: 0 20px 20px;
      }
      sp-action-menu {
        margin-right: 5px;
      }
      sp-action-menu * {
        color: white;
      }
      #sessionLabel {
        line-height:normal;
        font-size:14px;
      }
      .sublist[hidden] {
        display: none;
      }
      mwc-list-item {
        font-size: 12px;
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
      }
    `];
  }

  firstUpdated() {
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
        a.shadowRoot.querySelector("sp-action-button").style.backgroundColor = "rgb(3, 169, 244)"
      })
    })
  }

  userSession() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (userSession) {
      return html`
        <label id="sessionLabel">
          ${userSession.header_info.first_name} ${userSession.header_info.last_name} (${userSession.userRole})<br>
          ${this.lang == "en" ? "Session" : "Sesión"} Id: ${userSession.appSessionId}<br>
          ${this.desktop ? this.lang == "en" ? "Date: " : "Fecha: " : null}${userSession.appSessionStartDate}
        </label>
      `
    }
  }

  render() {
    return html`
      <div class="container layout vertical">
        <mwc-drawer type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
          <mwc-list>
            <mwc-list-item @click="${() => this.procCollapse=!this.procCollapse}">
              <span>${langConfig.proceduresOption["tabLabel_" + this.lang]}</span>
            </mwc-list-item>
            <mwc-list class="sublist" ?hidden="${!this.procCollapse}">
              <mwc-list-item graphic="avatar" @click="${()=>{this.airCollapse=!this.airCollapse;this.waterCollapse=false}}">
                <span>Air (em-demo-a)</span>
              </mwc-list-item>
              <mwc-list class="sublist two" ?hidden="${!this.airCollapse}">
                <mwc-list-item graphic="avatar">
                  <div style="display: flex;align-items: center;">
                    <mwc-icon @click=${() => this.selectedMenu("/dashboard/samples?personel=false")}>model_training</mwc-icon>
                    <mwc-icon @click=${() => this.selectedMenu("/dashboard/samples?personel=true")}>groups</mwc-icon>
                    <label style="margin-left: 10px">Samples Sampling</label>
                  </div>
                </mwc-list-item>
              </mwc-list>
              <mwc-list-item graphic="avatar" @click="${()=>{this.waterCollapse=!this.waterCollapse;this.airCollapse=false;}}">
                <span>Water</span>
              </mwc-list-item>
              <mwc-list class="sublist two" ?hidden="${!this.waterCollapse}">
                <mwc-list-item graphic="avatar" @click="${() => this.selectedMenu("/dashboard")}">
                  <span>Sub Water 1</span>
                  <mwc-icon slot="graphic">code</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar" @click="${() => this.selectedMenu("/dashboard")}">
                  <span>Sub Water 2</span>
                  <mwc-icon slot="graphic">code</mwc-icon>
                </mwc-list-item>
              </mwc-list>
            </mwc-list>
            <mwc-list-item @click="${() => this.selectedMenu("/dashboard/notifications")}">
              <span>${langConfig.notificationsOption["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>
            </mwc-list-item>
            <mwc-list-item @click="${() => this.certCollapse=!this.certCollapse}">
              <span>${langConfig.certOption["tabLabel_" + this.lang]} ${this.allPending()}</span>
            </mwc-list-item>
            <mwc-list class="sublist" ?hidden="${!this.certCollapse}">
              <mwc-list-item graphic="avatar">
                <div style="display:flex;align-items:center;width:170px;">
                  <div style="flex-grow:10;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${langConfig.certOption.sop["label_" + this.lang]} 
                    (<span style="color: blue">${this.sops.length}</span>)</div>
                    ${this.pendingSOP()}
                </div>
              </mwc-list-item>
              <mwc-list-item graphic="avatar">
                <div style="display:flex;align-items:center;width:170px;">
                  <div style="flex-grow:10;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${langConfig.certOption.analytic["label_" + this.lang]} 
                  (<span style="color: blue">${this.analytics.length}</span>)</div>
                  ${this.pendingAnalytic()}
                </div>
              </mwc-list-item>
            </mwc-list>
            <mwc-list-item @click="${() => this.personalCollapse=!this.personalCollapse}">
              <span>${langConfig.personalOption["tabLabel_" + this.lang]}</span>
            </mwc-list-item>
            <mwc-list class="sublist" ?hidden="${!this.personalCollapse}">
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/procedure")}>
                <span>${langConfig.personalOption.procedure["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">route</mwc-icon>
              </mwc-list-item>
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/incidents")}>
                <span>${langConfig.personalOption.incidents["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">bug_report</mwc-icon>
              </mwc-list-item>
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/user")}>
                <span>${langConfig.personalOption.user["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">person</mwc-icon>
              </mwc-list-item>
              <mwc-list-item graphic="avatar" @click=${() => this.selectedMenu("/dashboard/tutorial")}>
                <span>${langConfig.personalOption.video["label_" + this.lang]}</span>
                <mwc-icon slot="graphic">video_library</mwc-icon>
              </mwc-list-item>
            </mwc-list>
            <sp-divider size="m"></sp-divider>
            <mwc-list-item @click=${this.logout}>
              <span>${langConfig.personalOption.doLogout["label_" + this.lang]}</span>
            </mwc-list-item>
          </mwc-list>
          <div slot="appContent">
            <mwc-top-app-bar-fixed>
              <mwc-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
                @click="${() => this.drawerState = !this.drawerState}"></mwc-icon-button>
              <div class="header" slot="title">
                <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
                ${this.userSession()}
              </div>
              <nav slot="actionItems" ?hidden="${this.desktop}">
                <mwc-icon-button @click=${this.changeLang}>
                  <img .src="/images/${this.flag}.png" />
                </mwc-icon-button>
              </nav>
              <nav slot="actionItems" ?hidden="${!this.desktop}">
                <sp-action-menu class="topMenu" id="procedures" size="m" @mouseover=${() => this.menuHover("procedures")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("procedures")}>${langConfig.proceduresOption["tabLabel_" + this.lang]}</span>
                  <sp-menu-item>
                    <sp-action-menu size="m" @mouseover=${e=> e.target.open = true}>
                      <div slot="icon"></div>
                      <span slot="label">Air (em-demo-a)</span>
                      <sp-menu-item>
                        <div style="display: flex;align-items: center;">
                          <mwc-icon @click=${() => this.selectedMenu("/dashboard/samples?personel=false")}>model_training</mwc-icon>
                          <mwc-icon @click=${() => this.selectedMenu("/dashboard/samples?personel=true")}>groups</mwc-icon>
                          <label style="margin-left: 10px">Samples Sampling</label>
                        </div>
                      </sp-menu-item>
                    </sp-action-menu>
                  </sp-menu-item>
                </sp-action-menu>
                <sp-action-menu class="topMenu" id="notif" size="m" @mouseover=${() => this.menuHover("notif")}>
                  <div slot="icon"></div>
                  <span slot="label" @click=${() => this.selectedMenu("/dashboard/notifications")}>${langConfig.notificationsOption["tabLabel_" + this.lang]}${this.notifs.length?' '+this.notifs.length:null}</span>
                </sp-action-menu>
                <sp-action-menu class="topMenu" id="cert-menu" size="m" @mouseover=${() => this.menuHover("cert-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("cert-menu")}>${langConfig.certOption["tabLabel_" + this.lang]}
                    ${this.allPending()}</span>
                  <sp-menu-item>
                    <div style="display:flex;align-items:center;">
                      <div style="flex-grow:10;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${langConfig.certOption.sop["label_" + this.lang]}
                      (<span style="color: blue">${this.sops.length}</span>)</div>
                      ${this.pendingSOP()}
                    </div>
                  </sp-menu-item>
                  <sp-menu-item>
                    <div style="display:flex;align-items:center;width:150px;">
                      <div style="flex-grow:10;" @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${langConfig.certOption.analytic["label_" + this.lang]}
                      (<span style="color: blue">${this.analytics.length}</span>)</div>
                      ${this.pendingAnalytic()}
                    </div>
                  </sp-menu-item>
                </sp-action-menu>
                <sp-action-menu class="topMenu" id="settings" size="m" @mouseover=${e => this.menuHover("settings")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label"
                    @mouseover=${() => this.menuHover("settings")}>${langConfig.personalOption["tabLabel_" + this.lang]}</span>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/procedure")}>
                    <mwc-icon slot="icon">route</mwc-icon>
                    ${langConfig.personalOption.procedure["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/incidents")}>
                    <mwc-icon slot="icon">bug_report</mwc-icon>
                    ${langConfig.personalOption.incidents["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/user")}>
                    <mwc-icon slot="icon">person</mwc-icon>
                    ${langConfig.personalOption.user["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/tutorial")}>
                    <mwc-icon slot="icon">video_library</mwc-icon>
                    ${langConfig.personalOption.video["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item @click=${this.logout}>
                    <mwc-icon slot="icon">logout</mwc-icon>
                    ${langConfig.personalOption.doLogout["label_" + this.lang]}
                  </sp-menu-item>
                </sp-action-menu>
                <mwc-icon-button @click=${this.changeLang}>
                  <img .src="/images/${this.flag}.png" />
                </mwc-icon-button>
              </nav>
            </mwc-top-app-bar-fixed>
          </div>
        </mwc-drawer>
        <main class="layout vertical flex">
          <tab-state .lang=${this.lang} .config=${this.config} .params=${this.params} .query=${this.query}></tab-state>
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <samples-sampling .lang=${this.lang} .config=${this.config} .personel=${this.query.personel?JSON.parse(this.query.personel):null} ?hidden=${this.params.menu == 'samples' ? false : true} .params=${this.params}></samples-sampling>
          <procedure-management .lang=${this.lang} ?hidden=${this.params.menu == 'procedure' ? false : true} .params=${this.params}>
          </procedure-management>
          <platform-notif .lang=${this.lang} .notifs=${this.notifs} ?hidden=${this.params.menu == 'notifications' ? false : true} .params=${this.params}></platform-notif>
          <my-certifications .lang=${this.lang} .config=${this.config} .filterData=${this.query.filterData} ?hidden=${this.params.menu == 'certifications' ? false : true} .params=${this.params}>
          </my-certifications>
          <my-incidents .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'incidents' ? false : true} .params=${this.params}>
          </my-incidents>
          <user-profile .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'user' ? false : true}
            .params=${this.params} @save-tabs=${()=>this.tabs.saveTabs()}></user-profile>
          <video-tutorial .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'tutorial' ? false : true}
            .params=${this.params}></video-tutorial>
        </main>
      </div>
      <relogin-dialog .lang=${this.lang} .config=${this.config}
        @logout=${this.logout}
        @relogin-succeed=${this.reloginSucceed}></relogin-dialog>
    `;
  }

  get tabBar() {
    return this.shadowRoot.querySelector("mwc-top-app-bar-fixed")
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
      startSession: { type: Number },
      enableLockSession: { type: Boolean },
      minsLockSession: { type: Number },
      enableLogoutSession: { type: Boolean },
      minsLogoutSession: { type: Number },
      showTimingInConsole: { type: Boolean },
      secondsNextTimeChecker: { type: Number },
      procCollapse: { type: Boolean },
      airCollapse: { type: Boolean },
      waterCollapse: { type: Boolean },
      certCollapse: { type: Boolean },
      personalCollapse: { type: Boolean }
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
    this.enableLockSession = false;
    this.minsLockSession = 0;
    this.enableLogoutSession = false;
    this.minsLogoutSession = 0;
    this.showTimingInConsole = false;
    this.secondsNextTimeChecker = 0;
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
      return html`<span style="color: red" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=psop")}>${p.length}</span>`
    } else {
      return null
    }
  }

  pendingAnalytic() {
    let p = this.analytics.filter(s => s.status == "NOT_PASS")
    if (p.length) {
      return html`<span style="color: red" @click=${()=>this.selectedMenu("/dashboard/certifications?filterData=panalytic")}>${p.length}</span>`
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

  _paramsChanged() {
    this.requestUpdate(); // call it to wait the page props complete updated
    switch (this.params.menu) {
      case 'samples':
        import('@trazit/samples-sampling/samples-sampling');
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
      default:
        import('./tr-default');
    }
    this.drawerState = false;
  }

  menuHover(menu) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => {
      if (s.id == menu) {
        s.open = true;
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

  get relogin() {
    return this.shadowRoot.querySelector("relogin-dialog")
  }

  /**
   * Checking the user session inactivity
   */
  checkSessionExpired() {
    console.log("checkingSesssionExpired")
    // clear out the timeout if exist to stop the previous interval
    if (this.timer) {
      clearTimeout(this.timer);
    }
    let curTime = new Date().getTime();
    let runSession = curTime - this.startSession;
    if (runSession >= this.config.minsLockSession) { // session running >= minsLockSession
      this.relogin.open = true;
      if (this.config.enableLogoutSession) {
        this.newSession = new Date().getTime()
        return this.checkUserRelogin()
      } else {
        return
      }
    }
    setTimeout(() => {
      this.checkSessionExpired()
    }, this.config.secondsNextTimeChecker)
  }

  /**
   * Waiting for relogin action, force logout if no relogin activity
   */
  checkUserRelogin() {
    console.log("checkingUserRelogin")
    let curTime = new Date().getTime();
    let runSession = curTime - this.newSession;
    if (runSession >= this.config.minsLogoutSession) { // session running >= minsLogoutSession
      this.logout()
    } else {
      // set the timeout object
      this.timer = setTimeout(() => {
        this.checkUserRelogin()
      }, this.config.secondsNextTimeChecker)
    }
  }

  /**
   * once relogin succeed
   */
  reloginSucceed() {
    this.newSession = new Date().getTime()
    this.checkSessionExpired()
  }

  stateChanged(state) {
    if (JSON.stringify(this.config) != JSON.stringify(state.app.config)) {
      this.config = state.app.config;
      if (this.config.enableLockSession) {
        this.checkSessionExpired();
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
}
customElements.define('tr-dashboard', TrDashboard);