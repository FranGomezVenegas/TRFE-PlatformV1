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
customElements.define('tr-dashboard', TrDashboard);