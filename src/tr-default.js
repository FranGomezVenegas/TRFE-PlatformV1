import { LitElement, html, css } from 'lit';

export class TrDefault extends LitElement {
  render() {
    return html`
      <style>
      h1 {        
        color : rgba(36, 192, 235, 1);
        font-family : Montserrat;
        font-weight : bold;
        font-size:calc(12px + 1.5vw);
        text-align: center;
      }    
      </style>
      <h1>Welcome to the Trazit Traceability Procedures Platform</h1>
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