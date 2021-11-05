import { LitElement, html, css } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-button';

export class TabItem extends LitElement {
  static get styles() {
    return css`
      div.t-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 3px;
        background-color: #03a9f4;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-size: 10px;
        --mdc-theme-primary: #ffffff;
      }
    `;
  }

  render() {
    return html`
      <div class="t-item">
        <mwc-button label="${this.tab.tabLabel_en}" @click=${()=>this.dispatchEvent(new CustomEvent('tab-change', {
          detail: this.tab
        }))}></mwc-button>
        <mwc-icon-button style="--mdc-icon-button-size: 30px;--mdc-icon-size: 20px;" @click=${()=>this.dispatchEvent(new CustomEvent('tab-remove', {
          detail: this.tab
        }))} icon="close"></mwc-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      tab: { type: Object }
    };
  }

  constructor() {
    super();
    this.tab = {};
  }
}
customElements.define('tab-item', TabItem);