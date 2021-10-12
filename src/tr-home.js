import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
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
      <platform-login></platform-login>
    `;
  }

  get pLogin() {
    return this.shadowRoot.querySelector("platform-login")
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    fetch("/src/config.json").then(r => r.json()).then(j => {
      this.pLogin.config = j
    })
  }

  stateChanged(state) {
  }
}
customElements.define('tr-home', TrHome);