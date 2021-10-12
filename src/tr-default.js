import { LitElement, html, css } from 'lit-element';

export class TrDefault extends LitElement {
  render() {
    return html`
      <h1>DEFAULT PAGE</h1>
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
}
customElements.define('tr-default', TrDefault);