import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';
import { navigator } from 'lit-element-router';
import '@trazit/platform-login/platform-login.js';
//import '@trazit/platform-login/platform-login';

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

  render() {
    return html`
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