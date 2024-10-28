import { LitElement, html, css } from 'lit';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-button.js';
//import { TrDialog } from '../src/MdDialog.js'; 
import '../tr-dialog';
import { dialogManager } from '../src/services/DialogManager.js';
class DemoExample extends LitElement {
  static properties = {
    showCloseButton: { type: Boolean },
    showDoButton: { type: Boolean },
    adHocButtons: { type: Array },
  };
  constructor() {
    super();
    this.showCloseButton=true
    this.showDoButton=true
    this.adHocButtons=[
      { 
        label: 'Custom Do', 
        action: this.handleDoAction.bind(this)
      },
      { 
        label: 'Custom passing value', 
        action:  () => {
          this.holaAction('Este es un valor')}
      }      

    ]
  }
  static get styles() {
    return [
      css`
      tr-dialog {
        --mdc-dialog-heading-ink-color: blue;
        --mdc-typography-headline6-font-size: 35px;
        --md-dialog-container-color: white !important;
      }
      .content {
        opacity: 0.9;
      }
      .content * {
        margin: 5px 0;
      }
      .layout.vertical {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      tr-dialog::part(surface) {
      --md-dialog-container-color: white !important; /* Asegurarse de que el fondo sea blanco */
      background-color: white; /* Refuerzo del fondo blanco */
      color: black;
    }
      `
    ]
  }

  firstUpdated() {
    const dialogElement = this.shadowRoot.querySelector('#new-dialog');
    if (dialogElement) {
      dialogManager.registerDialog('new-dialog', dialogElement);
    }
  }
  get newDialog() {
    return this.shadowRoot.querySelector('#new-dialog');
  }
  render() {
    return html`
          <button @click=${() => dialogManager.openDialog('new-dialog')} id="open-new-dialog">Open NEW Dialog</button>
      <button @click=${() => dialogManager.closeDialog('new-dialog')} id="close-new-dialog">Close NEW Dialog</button>
  
    <button @click=${() => this.newDialog.open()} id="open-new-dialog">Open NEW Dialog</button>
    
      <tr-dialog id="new-dialog"
        .showCloseButton="${this.showCloseButton}"
        .showDoButton="${this.showDoButton}"
        @do-action="${this.handleDoAction}">
      <form slot="content" id="form-id" method="dialog"> 
        <div class="content layout vertical">
          <md-filled-text-field id="user-field" label="User" type="text" autocomplete="current-user"></md-filled-text-field>
          <md-filled-text-field id="pwd-field" label="Password" type="password" autocomplete="current-password"
            iconTrailing="visibility" @click=${this.showPwd}>
          </md-filled-text-field>
          <div style="margin-top:30px">
            <md-filled-button id="close" @click=${() => this.newDialog.close()}>Cancel</md-filled-button>
            <md-filled-button id="accept" @click=${() => this.handleDoAction()}>Accept</md-filled-button>
          </div>
        </div>
      </form>
  
      ${this.adHocButtons.map(button => html`
        <md-filled-button id="adhocbuttons" slot="ad-hoc-buttons" @click=${button.action}>
          ${button.label}
        </md-filled-button>
      `)}
      </tr-dialog>


  
    `;
  }
  handleDoAction() {
    // Acción a realizar cuando se presiona el botón Do
    console.log('Do action triggered');
  }
  
  holaAction(val){
    alert(val)
  }

  // Método para agregar botones ad-hoc dinámicamente
  addAdHocButton(label, action) {
    this.adHocButtons = [
      ...this.adHocButtons,
      { label, action }
    ];
  }  
  get newDialog() {
    return this.shadowRoot.querySelector('#new-dialog');
  }




  showMdDialog() {
    const dialog = this.shadowRoot.querySelector('#md-dialog');
    if (dialog) {
      dialog.show();
    } else {
      console.error('MdDialog not found');
    }
  }

  closeMdDialog() {
    const dialog = this.shadowRoot.querySelector('#md-dialog');
    if (dialog) {
      dialog.close();
    } else {
      console.error('MdDialog not found');
    }
  }
  showPwd(e) {
    if (e.pointerId == -1) {
      e.target.type = e.target.type == "password" ? "text" : "password";
    }
  }
}
customElements.define('demo-example', DemoExample);
