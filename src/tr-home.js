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
        display: block;
        height: 100vh;
        background-color: white;
      }
      div {
        display: flex;
        justify-content: center;
        background-image: url(/images/abstract.jpg);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: 20px;
      }
      @media (max-width: 460px) {
        div {
          display: flex;
          justify-content: center;
          background-repeat: no-repeat;
          background-size: 110%;
          background-position: center;
          background-image: url('/images/abstract.jpg');
          margin-top: 30px;
        }  
      }
    `];
  }

  render() {
    return html`
      <div>
        <platform-login></platform-login>
      </div>
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
  }

  stateChanged(state) {
  }
}
customElements.define('tr-home', TrHome);