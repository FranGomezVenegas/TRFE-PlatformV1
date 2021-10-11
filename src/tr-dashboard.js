import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { store } from '../redux/store';
import { navigator } from 'lit-element-router';

export class TrDashboard extends connect(store)(navigator(LitElement)) {
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
      div[hidden] {
        display: none;
      }
      @media (max-width: 460px) {
      }
    `];
  }

  render() {
    return html`
      <h1>DASHBOARD</h1>
      <h3>Hi ${this.getUser()}, you are authorized</h3>
      <button @click=${this.logout}>Logout</button>
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

  getUser() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    return userSession.header_info.first_name +" "+ userSession.header_info.last_name
  }

  logout() {
    window.sessionStorage.clear();
    window.location.href = "/";
  }

  stateChanged(state) {
  }
}
customElements.define('tr-dashboard', TrDashboard);