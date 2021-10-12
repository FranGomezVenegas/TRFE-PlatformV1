import { LitElement, html, css } from 'lit-element';
import { Layouts, Factors, displayFlex, horizontal, centerAligned } from '@collaborne/lit-flexbox-literals';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { navigator } from 'lit-element-router';
import '@spectrum-web-components/action-menu/sync/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js';
import '@spectrum-web-components/divider/sp-divider.js';
import '@material/mwc-drawer';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';

export class TrDashboard extends navigator(LitElement) {
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
        color: #2F4F4F;
        margin-bottom: 60px;
      }
    `];
  }

  render() {
    return html`
      <div class="container layout vertical">
        <mwc-drawer hasHeader type="modal" ?open=${this.drawerState} @MDCDrawer:closed="${() => this.drawerState = false}">
          <div @click=${() => this.navigate("/")} class="header" slot="title" style="margin:-30px auto">
            <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
            ${this.userSession()}
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
              <mwc-icon-button slot="navigationIcon" class="menu" icon="menu" ?hidden="${this.desktop}"
                @click="${() => this.drawerState = !this.drawerState}"></mwc-icon-button>
              <div @click=${() => this.navigate("/")} ?hidden=${!this.desktop} class="header" slot="title">
                <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
                ${this.userSession()}
                <sp-divider size="m"></sp-divider>
              </div>
              <nav slot="actionItems">
                <sp-action-menu id="menu1" size="m" @mouseover=${()=>this.menuHover("menu1")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label" @mouseover=${()=>this.menuHover("menu1")}>Procedures</span>
                  <sp-menu-item>
                    <sp-action-menu size="m" @mouseover=${e => e.target.open=true}>
                      <div slot="icon"></div>
                      <span slot="label">Menu 1</span>
                      <sp-menu-item @click=${()=>this.selectedMenu("/dashboard")}>
                        Sub Menu 1
                      </sp-menu-item>
                    </sp-action-menu>
                  </sp-menu-item>
                </sp-action-menu>
                <sp-action-menu id="menu2" size="m" @mouseover=${e=>this.menuHover("menu2")}>
                  <sp-icon-settings slot="icon"></sp-icon-settings>
                  <span slot="label" @mouseover=${()=>this.menuHover("menu2")}>Settings</span>
                  <sp-menu-item @click=${()=>this.selectedMenu("/dashboard/procedure")}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    Procedures
                  </sp-menu-item>
                  <sp-menu-item>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    Incidents
                  </sp-menu-item>
                  <sp-menu-item>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    User
                  </sp-menu-item>
                  <sp-menu-item>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    Video Tutorial
                  </sp-menu-item>
                  <sp-divider size="m"></sp-divider>
                  <sp-menu-item @click=${this.logout}>
                    <sp-icon-save-floppy slot="icon"></sp-icon-save-floppy>
                    Logout
                  </sp-menu-item>
                </sp-action-menu>
              </nav>
            </mwc-top-app-bar-fixed>
          </div>
        </mwc-drawer>
        <main class="layout vertical flex">
          <div style="margin: 20px auto">TAB STATE</div>
          <tr-default ?hidden=${this.params.menu}></tr-default>
          <procedure-management ?hidden=${this.params.menu=='procedure'  ? false : true} .params=${this.params}></procedure-management>
        </main>
      </div>
    `;
  }

  get drawer() {
    return this.shadowRoot.querySelector("mwc-drawer")
  }

  static get properties() {
    return {
      params: { type: Object }, // route params which is passed from parent element (root app)
      desktop: { type: Boolean },
      drawerState: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.params = {};
    this.drawerState = false;
  }

  updated(updates) {
    // except authenticated users, not allowed to route the sub project pages
    if (updates.has('params')) {
      this._paramsChanged()
    }
  }

  firstUpdated() {
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
    installMediaQueryWatcher(`(min-width: 460px)`, desktop => this.desktop = desktop);
  }

  _paramsChanged() {
    this.requestUpdate(); // call it to wait the page props complete updated
    switch (this.params.menu) {
      case 'procedure':
        import('@trazit/procedure-management/procedure-management');
        break;
      default:
        import('./tr-default');
    }
    this.drawerState = false;
  }

  userSession() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    if (this.desktop) {
      return html`
        <label style="line-height:normal">
          ${userSession.header_info.first_name} ${userSession.header_info.last_name} (${userSession.userRole})<br>
          Session Id: ${userSession.appSessionId} Date: ${userSession.appSessionStartDate}
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

  menuHover(menu) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => {
      if (s.id == menu) {
        s.open = true;
      } else {
        s.open=false
      }
    })
  }

  selectedMenu(route) {
    this.shadowRoot.querySelectorAll("sp-action-menu").forEach(s => s.open=false)
    this.navigate(route)
  }

  logout() {
    window.sessionStorage.clear();
    window.location.href = "/";
  }

  stateChanged(state) {
  }
}
customElements.define('tr-dashboard', TrDashboard);