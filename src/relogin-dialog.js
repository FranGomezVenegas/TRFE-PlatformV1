import { html, css } from 'lit';
import { CommonCore, commonLangConfig } from '@trazit/common-core';
import { Layouts } from '@collaborne/lit-flexbox-literals';
import '@material/mwc-icon-button';
import '@material/mwc-textfield';
import '@spectrum-web-components/button/sp-button';
import '@trazit/tr-dialog/tr-dialog';

const langConfig = {
  "Password": {
    "label_en": "New Password", 
    "label_es": "Nueva Contraseña"
  },
  "ChangePassword": {
    "label_en": "Confirm", 
    "label_es": "Confirmar"
  },
  "pwdWindowTitle": {
    "label_en": "Please confirm your credentials (user & password)",
    "label_es": "Por favor confirma tu identidad (usuario y contraseña)"
  },
  "pwdNotCorrectMessage": {
    "now": {
      "message_en": "Validation not completed, action aborted",
      "message_es": "Validación no completada, acción abortada"
    },
    "dialog_cancelled": {
      "message_en": "dialog canceled, action aborted",
      "message_es": "Diálogo cancelado, acción abortada"
    },
    "attempts_consumed": {
      "message_en": "All attempts consumed, action aborted",
      "message_es": "Todos los intentos consumidos, acción abortada"
    }
  },
  "userToCheck": {
    "label_en": "User", 
    "label_es": "Usuario"
  },
  "pwToCheck": {
    "label_en": "Current Password", 
    "label_es": "Contraseña Actual"
  }
}

class ReloginDialog extends CommonCore {
  static get styles() {
    return [
      Layouts,
      css`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      tr-dialog {
        --mdc-dialog-heading-ink-color: blue;
        --mdc-typography-headline6-font-size: 35px;
      }
      .content {
        opacity: 0.9;
      }
      .content * {
        margin: 5px 0;
      }

      @media (max-width: 460px) {
      }
    `];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      userName: { type: String }
    };
  }

  constructor() {
    super();
    this.open = false;
    this.userName = "";
  }

  updated(updates) {
    super.updated(updates)
    if (updates.has('open') && this.pwdDialog) {
      if (this.open) {
        this.pwdDialog.show()
      } else {
        this.pwdDialog.close()
      }
    }
  }

  firstUpdated() {
    super.firstUpdated()
    this.userName = JSON.parse(sessionStorage.getItem("userSession")).userName;
    this.updateComplete.then(() => {
      // manually backgrounding the dialog box
      // password dialog
      this.pwdDialogSurface.style.backgroundImage = "url(/images/abstract.jpg)";
      this.pwdDialogSurface.style.backgroundSize = "cover";
      this.pwdDialogSurface.style.backgroundRepeat = "no-repeat";
      this.pwdDialogSurface.style.textAlign = "center";
      this.pwdDialog.shadowRoot.querySelector("h2#title").style.fontSize = "20px";
      this.pwdDialog.shadowRoot.querySelector("#content").style.paddingBottom = "0";
    })
  }

  render() {
    return html`
      <tr-dialog id="pwdDialog" 
        @closing=${()=>this.open=false}
        heading="${langConfig.pwdWindowTitle["label_"+this.lang]}"
        hideActions=""
        scrimClickAction=""
        escapeKeyAction="">
        <div class="content layout vertical flex center-justified">
          <mwc-textfield id="user" label="${langConfig.userToCheck["label_"+this.lang]}" type="text" .value=${this.userName} disabled></mwc-textfield>
          <mwc-textfield id="pwd" label="${langConfig.pwToCheck["label_"+this.lang]}" type="password" iconTrailing="visibility" 
            dialogInitialFocus
            @click=${this.showPwd}></mwc-textfield>
          <div style="margin-top:30px">
            <sp-button size="xl" variant="secondary" slot="secondaryAction" @click=${()=>this.dispatchEvent(new CustomEvent('logout'))}>${commonLangConfig.cancelDialogButton["label_"+this.lang]}</sp-button>
            <sp-button size="xl" slot="primaryAction" dialogAction="accept" @click=${this.checkingUser}>${commonLangConfig.confirmDialogButton["label_"+this.lang]}</sp-button>
          </div>
        </div>
      </tr-dialog>
    `;
  }

  get pwdDialog() {
    return this.shadowRoot.querySelector("tr-dialog#pwdDialog")
  }

  get pwd() {
    return this.shadowRoot.querySelector("mwc-textfield#pwd")
  }

  get pwdDialogSurface() {
    return this.pwdDialog.shadowRoot.querySelector(".mdc-dialog__surface")
  }

  /**
   * Checking whether user exist and verified
   */
  checkingUser() {
    this.fetchApi(this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      actionName: "TOKEN_VALIDATE_USER_CREDENTIALS",
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      userToCheck: this.userName,
      passwordToCheck: this.pwd.value
    })).then(j => {
      this.pwd.value = ""
      if (j) {
        this.open = false
        this.dispatchEvent(new CustomEvent('relogin-succeed'))
      } else {
        this.open = true
      }
    })
  }
}
window.customElements.define('relogin-dialog', ReloginDialog);