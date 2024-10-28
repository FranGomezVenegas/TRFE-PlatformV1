import { LitElement, html, css } from 'lit';
import { dialogManager } from '@trazit/tr-dialog/src/services/DialogManager.js';
import '@trazit/tr-dialog';

class ProceduresController extends LitElement {
  static properties = {
    name: { type: String },
    isDialogOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.name = 'World';
    this.isDialogOpen = false;
  }

  static styles = css`
    p {
      color: blue;
    }
    button {
      margin: 10px;
    }
  `;

  firstUpdated() {
    setTimeout(() => {
      const dialogElement = this.shadowRoot?.querySelector('#testDialog');
      if (dialogElement) {
        console.log('Dialog element found after delay:', dialogElement);
        dialogManager.registerDialog('testDialog', dialogElement);
      } else {
        console.warn('Dialog element not found after delay');
      }
    }, 0);
  }

  openDialog() {
    dialogManager.openDialog('testDialog');
  }

  closeDialog() {
    dialogManager.closeDialog('testDialog');
  }

  render() {
    return html`
      <button @click="${this.openDialog}">Open Dialog</button>
      <button @click="${this.closeDialog}">Close Dialog</button>

      <tr-dialog id="testDialog">
        <div slot="content">
          <p>This is a test dialog!</p>
        </div>
      </tr-dialog>
    `;
  }
}

customElements.define('procedures-controller', ProceduresController);
