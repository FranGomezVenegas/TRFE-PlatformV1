import { LitElement, html, css } from 'lit';
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
        background-color: #D6E9F8;
        font-family : Myriad Pro;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb214, 233, 248);
        border-width: 0px 3px 3px 0px;
      }
      div.t-item.active {
        background-color: #24C0EB;
        font-family : Myriad Pro;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb(3, 169, 244);
        border-width: 0px 3px 3px 0px;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-size: 8px;
        --mdc-theme-primary: #ffffff;
      }
      mwc-icon-button {
        color: aliceblue;
        --mdc-icon-button-size: 16px;
        --mdc-icon-size: 15px;
        --mdc-button-horizontal-padding: 3px;
        --mdc-button-horizontal-padding: 0px;
      }
    `;
  }

  render() {
    return html`
      <div class="t-item ${this.activeTab ? 'active' : null}">
        <mwc-button .label="${this.lang=="en"?this.tab.tabLabel_en:this.tab.tabLabel_es}" @click=${()=>this.dispatchEvent(new CustomEvent('tab-change', {
          detail: this.tab
        }))}></mwc-button>
        <mwc-icon-button @click=${()=>this.dispatchEvent(new CustomEvent('tab-remove', {
          detail: this.tab
        }))} icon="close"></mwc-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      lang: { type: String },
      tab: { type: Object },
      activeTab: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.tab = {};
    this.activeTab = false;
  }

  firstUpdated() {
    this.updateComplete.then(() => {
      this.dispatchEvent(new CustomEvent("tab-rendered"))
    })
  }
}
customElements.define('tab-item', TabItem);