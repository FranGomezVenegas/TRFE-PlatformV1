import { LitElement, html, css } from 'lit';

export class TrDefault extends LitElement {
  render() {
    return html`
      <h1>Welcome to trazit platform</h1>
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