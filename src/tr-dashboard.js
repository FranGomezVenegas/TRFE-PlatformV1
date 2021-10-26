import { LitElement, html, css } from 'lit-element';
import { Layouts, Factors, displayFlex, horizontal, centerAligned } from '@collaborne/lit-flexbox-literals';
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

const langConfig = {
  "proceduresOption": {
    "tabLabel_en": "Procedures",
    "tabLabel_es": "Procesos"
  },
  "notificationsOption": {
    "tabLabel_en": "Notifications",
    "tabLabel_es": "Notificaciones"
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
      mwc-drawer {
        height: 80px;
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
        cursor: pointer;
      }
      .header img {
        width: 80px;
        height: 80px;
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
    `];
  }

  render() {
    return html`
      <div class="container layout vertical">
        <mwc-drawer hasHeader type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
          <div @click=${()=> this.navigate("/")} class="header" slot="title" style="margin:-30px auto">
            <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
            ${this.userSession()}
          </div>
          <div>
            <mwc-list>
              <mwc-list-item @click="${() => this.navigate('/dashboard/procedures')}">
                <span>${langConfig.proceduresOption["tabLabel_" + this.lang]}</span>
              </mwc-list-item>
            </mwc-list>
          </div>
          <div slot="appContent">
            <mwc-top-app-bar-fixed>
              <mwc-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
                @click="${() => this.drawerState = !this.drawerState}"></mwc-icon-button>
              <div @click=${()=> this.navigate("/")} ?hidden=${!this.desktop} class="header" slot="title">
                <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
                ${this.userSession()}
                <sp-divider size="m"></sp-divider>
              </div>
              <nav slot="actionItems" class="layout horizontal center">
                <sp-action-menu id="procedures" size="m" @mouseover=${() => this.menuHover("procedures")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("procedures")}>Procedures</span>
                  <sp-menu-item>
                    <sp-action-menu size="m" @mouseover=${e=> e.target.open = true}>
                      <div slot="icon"></div>
                      <span slot="label">Menu 1</span>
                      <sp-menu-item @click=${() => this.selectedMenu("/dashboard")}>
                        Sub Menu 1
                      </sp-menu-item>
                    </sp-action-menu>
                  </sp-menu-item>
                </sp-action-menu>
                <sp-action-menu id="notif" size="m" @mouseover=${() => this.menuHover("notif")}>
                  <div slot="icon"></div>
                  <span slot="label" @click=${() => this.selectedMenu("/dashboard/notifications")}>Notifications${this.notifs.length?' '+this.notifs.length:null}</span>
                </sp-action-menu>
                <sp-action-menu id="cert-menu" size="m" @mouseover=${() => this.menuHover("cert-menu")}>
                  <div slot="icon"></div>
                  <span slot="label" @mouseover=${() => this.menuHover("cert-menu")}>My Certifications
                    ${this.allPending()}</span>
                  <sp-menu-item>SOP ${this.pendingSOP()} ${this.sops.length ?
                    html`<span style="color: blue"
                      @click=${() => this.selectedMenu("/dashboard/certifications?filterData=sop")}>${this.sops.length}</span>` : null}
                  </sp-menu-item>
                  <sp-menu-item>Analytical Method ${this.pendingAnalytic()} ${this.analytics.length ?
                    html`<span style="color: blue"
                      @click=${() => this.selectedMenu("/dashboard/certifications?filterData=analytic")}>${this.analytics.length}</span>` : null}
                  </sp-menu-item>
                </sp-action-menu>
                <sp-action-menu id="settings" size="m" @mouseover=${e => this.menuHover("settings")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label"
                    @mouseover=${() => this.menuHover("settings")}>${langConfig.personalOption["tabLabel_" + this.lang]}</span>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/procedure")}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    ${langConfig.personalOption.procedure["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/incidents")}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    ${langConfig.personalOption.incidents["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/user")}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    ${langConfig.personalOption.user["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-menu-item @click=${() => this.selectedMenu("/dashboard/tutorial")}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    ${langConfig.personalOption.video["label_" + this.lang]}
                  </sp-menu-item>
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item @click=${this.logout}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
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
          <tab-state .config=${this.config} .params=${this.params} .query=${this.query}></tab-state>
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <procedure-management ?hidden=${this.params.menu == 'procedure' ? false : true} .params=${this.params}>
          </procedure-management>
          <platform-notif .notifs=${this.notifs} ?hidden=${this.params.menu == 'notifications' ? false : true} .params=${this.params}></platform-notif>
          <my-certifications .config=${this.config} .filterData=${this.query.filterData} ?hidden=${this.params.menu == 'certifications' ? false : true} .params=${this.params}>
          </my-certifications>
          <my-incidents .config=${this.config} ?hidden=${this.params.menu == 'incidents' ? false : true} .params=${this.params}>
          </my-incidents>
          <user-profile .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'user' ? false : true}
            .params=${this.params}></user-profile>
          <video-tutorial .lang=${this.lang} .config=${this.config} ?hidden=${this.params.menu == 'tutorial' ? false : true}
            .params=${this.params}></video-tutorial>
        </main>
      </div>
    `;
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
      notifs: { type: Array }
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

  firstUpdated() {
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
    installMediaQueryWatcher(`(min-width: 460px)`, desktop => this.desktop = desktop);
    if (!sessionStorage.getItem("partialToken") || !sessionStorage.getItem("userSession")) {
      return this.navigate("/")
    }
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    this.updateComplete.then(() => {
      this.dispatchEvent(new CustomEvent('completed'))
    })
  }

  _paramsChanged() {
    this.requestUpdate(); // call it to wait the page props complete updated
    switch (this.params.menu) {
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

  userSession() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (userSession) {
      if (this.desktop) {
        return html`
          <label style="line-height:normal">
            ${userSession.header_info.first_name} ${userSession.header_info.last_name} (${userSession.userRole})<br>
            ${this.lang == "en" ? "Session" : "Sesión"} Id: ${userSession.appSessionId} ${this.lang == "en" ? "Date" : "Fecha"}:
            ${userSession.appSessionStartDate}
          </label>
        `
      } else {
        return html`
          <label style="line-height:normal">
            ${userSession.header_info.first_name} ${userSession.header_info.last_name}<br>
            ${userSession.userRole}
          </label>
        `
      }
    }
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

  stateChanged(state) {
    if (JSON.stringify(this.config) != JSON.stringify(state.app.config)) {
      this.config = state.app.config;
    }
    if (this.lang != state.app.lang) {
      this.lang = state.app.lang;
    }
  }
}
customElements.define('tr-dashboard', TrDashboard);