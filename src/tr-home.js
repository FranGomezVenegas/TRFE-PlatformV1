import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';
import { navigator } from 'lit-element-router';
import '@trazit/platform-login/platform-login';

export class TrHome extends connect(store)(navigator(LitElement)) {
  static get styles() {
    return [
      css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-image: url(/images/abstract.jpg);
        background-color: white;
        background-size: cover;
        background-repeat: no-repeat;
      }
      platform-login {
        opacity: 0.7;
      }
      @media (max-width: 460px) {
        :host {
          background-size: 110%;
          background-position: center;
        }
      }
    `];
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
  
  render() {
    return html`
      <platform-login @authorized=${this.handleAuthorization}></platform-login>
      <div ?hidden="${!this.auth}">
        <h1>Welcome, you are authorized</h1>
      </div>
    `;
  }
  
  handleAuthorization(event) {
    this.auth = event.target.auth;
    console.log('authorized')
    this.dispatchEvent(new CustomEvent('authorized', { bubbles: true, composed: true }));
  }
  handleAuthorization20240828(event) {
    this.auth = event.target.auth;
  }


  renderOld() {
    if (this.pLogin===null){console.log('pLogin not loaded')}
    console.log('tr-home')
    return html`
    s
      <platform-login .config=${this.config}></platform-login>
    `;
  }

  get pLogin() {
    return this.shadowRoot.querySelector("platform-login")
  }

  static get properties() {
    return {
      config: { type: Object }
    };
  }

  constructor() {
    super();
    this.config = {};
  }

  stateChanged(state) {
    if (JSON.stringify(this.config) != JSON.stringify(state.app.config)) {
      this.config = state.app.config;
    }
    if (this.pLogin && this.pLogin.lang != state.app.lang) {
      this.pLogin.lang = state.app.lang;
    }
  }
}
customElements.define('tr-home', TrHome);