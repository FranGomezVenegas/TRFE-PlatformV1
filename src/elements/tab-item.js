import { LitElement, html, css } from 'lit';
//import '@material/mwc-icon-button';
// import '@material/mwc-button';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/filled-button.js';

export class TabItem extends LitElement {
  static get styles() {
    return css`
      div.t-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 3px;
        background-color: rgba(78, 162, 240, 0.69);
        font-family : Montserrat;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb214, 233, 248);
        border-width: 0px 3px 3px 0px;
        font-size: 12px;
      }
      div.t-item.active {
        background-color:  rgba(49, 130, 189, 1);
        font-family : Myriad Pro;
        border-radius : 11px;
        -moz-border-radius : 11px;
        -webkit-border-radius : 11px;
        border-style:outset;
        border-color:rgb(3, 169, 244);
        border-width: 0px 3px 3px 0px;
      }
      md-filled-button {
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-size: 12px;
        --mdc-theme-primary: #ffffff;
      }

      md-icon-button {
        color: aliceblue;
        --md-icon-button-size: 16px;
        --md-icon-size: 15px;
      }
    `;
  }

  render() {
    return html`
      <div class="t-item ${this.activeTab ? 'active' : null}">
        <md-filled-button .label="${this.lang=="en"?this.tab.tabLabel_en:this.tab.tabLabel_es}" @click=${()=>this.dispatchEvent(new CustomEvent('tab-change', {
          detail: this.tab
        }))}></md-filled-button>
        <md-icon-button @click=${()=>this.dispatchEvent(new CustomEvent('tab-remove', {
          detail: this.tab
        }))} icon="close"></md-icon-button>
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