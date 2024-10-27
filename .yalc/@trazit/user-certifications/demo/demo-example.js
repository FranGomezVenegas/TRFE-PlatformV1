import { LitElement, html, css } from 'lit';
import { getUserSession } from '@trazit/platform-login';
import '@trazit/platform-login/platform-login';
import '../user-certifications'
import '@material/web/chips/chip-set';
import '@material/web/chips/filter-chip';


import {TrazitTheme} from '@trazit/tr-styling/src/theme-trazit';
//import '@trazit/tr-styling/tr-styling.js';

class DemoExample extends LitElement {
  static get styles() {
    return [TrazitTheme, css`
        div[hidden] {
          display: none;
        }
      `
    ];
  }

  static get properties() {
    return {
      config: { type: Object },
      auth: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.auth = false;
    this.config = { theme: 'trazit' }; 
  }

  connectedCallback() {
    super.connectedCallback();
    //const theme = this.config.theme || 'client1';
    //this.applyTheme(theme);
  }

  applyTheme(theme) {
    const stylingElement = this.shadowRoot.querySelector('tr-styling');
    if (stylingElement) {
      stylingElement.applyTheme(theme);
    }
  }

  render() {
    return html`
      <!-- <tr-styling .config=${this.config}></tr-styling> -->
      <platform-login @authorized=${this.handleAuthorization}></platform-login>
      <div ?hidden="${!this.auth}">
        <h1>Hi ${this.getUser()}, you are authorized</h1>
        <button @click=${this.logout}>Logout</button><br><br>

        <md-chip-set>
          <md-filter-chip
            id="sops"
            label="SOPs"
            @click=${() => this._handleChipClick('sop')}
            ?selected=${this.filterData === 'sop'}
          ></md-filter-chip>

          <md-filter-chip
            id="analytics"
            label="Analytical Methods"
            @click=${() => this._handleChipClick('analyticMethods')}
            ?selected=${this.filterData === 'analyticMethods'}
          ></md-filter-chip>

          <md-filter-chip
            id="pendings"
            label="My pending certification approvals"
            @click=${() => this._handleChipClick('myPendingCertificationApprovals')}
            ?selected=${this.filterData === 'myPendingCertificationApprovals'}
          ></md-filter-chip>
        </md-chip-set>
        <user-certifications .config=${this.config} .filterData=${this.filterData}></user-certifications>
      </div>
    `;
  }

  _handleChipClick(value) {
    this.filterData = value;
    this.requestUpdate();
  }
  getSops(){
    this.filterData="sop"
    this.requestUpdate()
  }
  getAnalytics(){
    this.filterData="analyticMethods"
    this.requestUpdate()
  }
  getMyPendingCertificationApprovals(){
    this.filterData="myPendingCertificationApprovals"
    this.requestUpdate()
  }
  get pLogin() {
    return this.shadowRoot.querySelector("platform-login");
  }

  get el() {
    return this.shadowRoot.querySelector("endpoints-listbymodule");
  }

  firstUpdated() {
    this.setupConfig();
  }

  async setupConfig() {
    const pLoginElement = this.pLogin;
    if (pLoginElement) {
      try {
        const response = await fetch("/src/config.json");
        const config = await response.json();
        pLoginElement.config = config;
      } catch (error) {
        console.error("Error fetching config:", error);
      }
    }
  }

  handleAuthorization(event) {
    this.auth = event.target.auth;
    const elElement = this.el;
    if (elElement && this.pLogin) {
      elElement.config = this.pLogin.config;
    }
  }

  logout() {
    if (this.pLogin) {
      this.pLogin.logout();
    }
  }

  getUser() {
    if (this.auth) {
      const session = getUserSession();
      return `${session.header_info.first_name} ${session.header_info.last_name} (${session.userRole})`;
    }
    return '';
  }
}

customElements.define('demo-example', DemoExample);
