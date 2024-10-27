import { LitElement, html, css, nothing } from 'lit';
import '@trazit/platform-login/platform-login';
import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-button.js';
import '@trazit/tr-dialog/tr-dialog';
import { CredDialogStyles } from './CredDialogStyles.js';

export class CredDialogComponent extends LitElement {
  static get properties() {
    return {
      dialogType: { type: String }, // 'user', 'esign', 'justification', 'confirm'
      actionName: { type: String },
      objectId: { type: String },
      attempt: { type: Number },
      maxFails: { type: Number },
      config: {type: Object},
      fetchApi: { type: Function }, 
      trazitNextRequest: { type: Function }, 
    };
  }

  constructor() {
    super();
    this.dialogType = '';
    this.actionName = '';
    this.objectId = '';
    this.attempt = 0;
    this.maxFails = 3; // Máximo de intentos permitido
    this.config={}
    this.fetchApi = null;
    this.trazitNextRequest = null;
  }

  static get styles() {
    return css`
      /* Importamos los estilos de CredDialogStyles.js */
      ${CredDialogStyles}
    `;
  }

  render() {
    return html`
      <!-- Renderizamos el diálogo adecuado según el tipo -->
      ${this.renderDialog()}
    `;
  }

  renderDialog() {
    switch (this.dialogType) {
      case 'user':
        return this.renderUserDialog();
      case 'esign':
        return this.renderEsignDialog();
      case 'justification':
        return this.renderJustificationDialog();
      case 'confirm':
        return this.renderConfirmDialog();
      default:
        return nothing;
    }
  }

  get userTxtFld() { return this.shadowRoot.querySelector("md-filled-text-field#user-field"); }
  get pwd() { return this.shadowRoot.querySelector("md-filled-text-field#password-field"); }
  get esg() { return this.shadowRoot.querySelector("md-filled-text-field#esign-dialog-field"); }
  get jst() { return this.shadowRoot.querySelector("md-filled-text-field#justification-phrase-field"); }

  renderUserDialog() {
    return html`
      <tr-dialog id="user-dialog" 
        .showCloseButton="${true}" 
        .showDoButton="${true}">
        <form slot="content" method="dialog">
          <div class="content layout vertical">
            <md-filled-text-field id="user-field" label="Usuario" type="text"></md-filled-text-field>
            <md-filled-text-field id="password-field" label="Contraseña" type="password" autocomplete="current-password"></md-filled-text-field>
            <div style="margin-top:30px">
              <md-filled-button @click=${() => this.closeDialog()}>Cancelar</md-filled-button>
              <md-filled-button @click=${() => this.checkingUser()}>Aceptar</md-filled-button>
            </div>
            ${this.setAttempts()} <!-- Mostramos los intentos restantes -->
          </div>
        </form>
      </tr-dialog>
    `;
  }

  renderEsignDialog() {
    return html`
      <tr-dialog id="esign-dialog" 
        .showCloseButton="${true}" 
        .showDoButton="${true}">
        <form slot="content" method="dialog">
          <div class="content layout vertical">
            <md-filled-text-field id="esign-dialog-field" label="Firma Electrónica" type="password" iconTrailing="visibility"></md-filled-text-field>
            <div style="margin-top:30px">
              <md-filled-button @click=${() => this.closeDialog()}>Cancelar</md-filled-button>
              <md-filled-button @click=${() => this.checkingEsignPhrase()}>Aceptar</md-filled-button>
            </div>
            ${this.setAttempts()} <!-- Mostramos los intentos restantes -->
          </div>
        </form>
      </tr-dialog>
    `;
  }

  renderJustificationDialog() {
    return html`
      <tr-dialog id="justification-dialog" 
        .showCloseButton="${true}" 
        .showDoButton="${true}">
        <form slot="content" method="dialog">
          <div class="content layout vertical">
            <md-filled-text-field id="justification-phrase-field" label="Justificación" type="text"></md-filled-text-field>
            <md-filled-button @click=${() => this.closeDialog()}>Cancelar</md-filled-button>
            <md-filled-button @click=${() => this.handleConfirm()}>Aceptar</md-filled-button>
          </div>
        </form>
      </tr-dialog>
    `;
  }

  renderConfirmDialog() {
    return html`
      <tr-dialog id="confirm-dialog" 
        .showCloseButton="${true}" 
        .showDoButton="${true}">
        <form slot="content" method="dialog">
          <div class="content layout vertical">
            <p>¿Estás seguro de que deseas continuar?</p>
            <div style="margin-top:30px">
              <md-filled-button @click=${() => this.closeDialog()}>No</md-filled-button>
              <md-filled-button @click=${() => this.handleConfirm()}>Sí</md-filled-button>
            </div>
          </div>
        </form>
      </tr-dialog>
    `;
  }
  buildCreadArgumentsObj(){
    let credArguments = {}
    if (this.userName) {credArguments.userToCheck=this.userName}
    if (this.userTxtFld&&this.userTxtFld.value!==null&&String(this.userTxtFld.value).length>0) {credArguments.userToCheck=this.userTxtFld.value}
    if (this.pwd&&this.pwd.value!==null&&String(this.pwd.value).length>0) {credArguments.passwordToCheck=this.pwd.value}
    if (this.esg&&this.esg.value!==null&&String(this.esg.value).length>0) {credArguments.esignPhraseToCheck=this.esg.value}
    if (this.jst&&this.jst.value!==null&&String(this.jst.value).length>0) {credArguments.auditReasonPhrase=this.jst.value}
    return credArguments
  }
  async checkingUser() {
    const userField = this.shadowRoot.querySelector('#user-field');
    const passwordField = this.shadowRoot.querySelector('#password-field');
  
    // Verifica si fetchApi está disponible
    if (!this.fetchApi) {
      console.error('fetchApi no está definida.');
      return;
    }
  
    // Construye los parámetros de la solicitud
    const params = this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      actionName: "TOKEN_VALIDATE_USER_CREDENTIALS",
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      userToCheck: userField.value,
      passwordToCheck: passwordField.value
    });
  
    try {
      // Llama a fetchApi y maneja la respuesta
      const response = await this.fetchApi(params);
      if (response.is_error) {
        this.handleFailedAttempt();
      } else {
        let actionInfoToAPIcall = JSON.parse(sessionStorage.getItem('actionInfoToAPIcall'));
        this.trazitNextRequest(
          actionInfoToAPIcall.action,
          actionInfoToAPIcall.actionParams,
          this.buildCreadArgumentsObj(),
          actionInfoToAPIcall.gridSelectedItem,
          actionInfoToAPIcall.parentData
        );
        this.closeDialog();
      }
    } catch (error) {
      console.error('Error en checkingUser:', error);
    }
  }
  
  async checkingEsignPhrase() {
    const esignField = this.shadowRoot.querySelector('#esign-dialog-field');
  
    // Verifica si fetchApi está disponible
    if (!this.fetchApi) {
      console.error('fetchApi no está definida.');
      return;
    }
  
    // Construye los parámetros de la solicitud
    const params = this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      actionName: "TOKEN_VALIDATE_ESIGN_PHRASE",
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      esignPhraseToCheck: esignField.value
    });
  
    try {
      // Llama a fetchApi y maneja la respuesta
      const response = await this.fetchApi(params);
      if (response.is_error) {
        this.handleFailedAttempt();
      } else {
        let actionInfoToAPIcall = JSON.parse(sessionStorage.getItem('actionInfoToAPIcall'));
        this.trazitNextRequest(
          actionInfoToAPIcall.action,
          actionInfoToAPIcall.actionParams,
          this.buildCreadArgumentsObj(),
          actionInfoToAPIcall.gridSelectedItem,
          actionInfoToAPIcall.parentData
        );
        this.closeDialog();
      }
    } catch (error) {
      console.error('Error en checkingEsignPhrase:', error);
    }
  }
  

  handleFailedAttempt() {
    this.attempt++;
    if (this.attempt >= this.maxFails) {
      console.log('Todos los intentos consumidos, acción abortada.');
      this.attempt=0
      this.closeDialog();
    } else {
      console.log(`Intento fallido, te quedan ${this.maxFails - this.attempt} intentos.`);
    }
  }

  setAttempts() {
    return html`<p class=${this.attempt === 0 ? 'attemptsphraseblue' : 'attemptsphrasered'}>
      Intentos: ${this.attempt} de ${this.maxFails}
    </p>`;
  }
  async showCredDialog(type, actionName, objectId) {
    this.dialogType = type;
    this.actionName = actionName;
    this.objectId = objectId;

    // Espera a que la actualización del DOM esté completa
    await this.updateComplete;

    // Intenta seleccionar el diálogo por ID después de la actualización completa
    const dialog = this.shadowRoot.querySelector(`#${type}-dialog`);
    if (dialog) {
      dialog.show();  // Abre el diálogo
    } else {
      console.error(`Dialog of type ${type} not found.`);
    }
  }

  closeDialog() {
    const dialog = this.shadowRoot.querySelector(`#${this.dialogType}-dialog`);
    if (dialog) {
      dialog.close();
    }
  }

  handleConfirm() {
    console.log('Acción confirmada');
    this.closeDialog();
  }
}

customElements.define('cred-dialog-component', CredDialogComponent);
