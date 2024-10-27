import { LitElement, html, css } from 'lit';
import { getUserSession } from '@trazit/platform-login';
import '@trazit/platform-login/platform-login';
//import '../trazit-cred-dialog';
//import '../src/TrazitCredentialsDialogs'
import '../trazit-cred-dialog';
import {ActionsFunctions} from '@trazit/utils-actions-functions'

class DemoExample extends ActionsFunctions(LitElement) {
  static get styles() {
    return css`
        div[hidden] {
          display: none;
        }
      `
  }

  static get properties() {
    return {
      auth: { type: Boolean },
      flag: { type: String },
      procList: { type: Array }
    }
  }

  constructor() {
    super();
    this.auth = false;
    this.flag = "es";
    this.procList = [];
  }

  firstUpdated() {
    // Cargamos el archivo config.json y lo asignamos a la propiedad config
    fetch('./config.json')
      .then(response => response.json())
      .then(configData => {
        console.log('Config loaded:', configData);
        this.config = configData;
      })
      .catch(error => console.error('Error loading config:', error));
  }

  render() {
    return html`
      <platform-login @authorized=${this.authorized}></platform-login>
      <div ?hidden="${!this.auth}">
        <h1>Hi ${this.getUser()}, you are authorized</h1>
        <cred-dialog-component .config="${this.config}" id="dialogComponent"></cred-dialog-component>
        
        <button @click=${this.changeLang}><img .src="/images/${this.flag}.png" style="width:30px"></button><br><br>
        <button @click=${()=>this.pLogin.logout()}>Logout</button>
        <hr>
        <input id="objId" type="text" placeholder="id"><br>
        ${this.procList.map(curProc =>           
          html`
          <p>
            ${curProc.name}  
            ${this.curProcActions(curProc).map(confUser => 
              html`<button @click=${()=>this.actionToPerform(curProc.name, confUser)}>${confUser}</button>`
            )}
          </p>
          `
        )}
        <hr>
        <button @click=${this.credsChange}>USER_CHANGE_PSWD</button>
        <button @click=${this.nonProcAction}>RELOGIN (LOCK INACTIVITY)</button>
        
      </div>
    `;
  }


  get cDialog() {
    return this.shadowRoot.querySelector("trazit-dialog-container"); // Ahora obtenemos el nuevo componente
  }

  get objId() {
    return this.shadowRoot.querySelector("#objId")
  }

  credsChange() {
    this.cDialog.changing = true
    this.action("USER_CHANGE_PSWD")
  }

  nonProcAction() {
    this.cDialog.nonProc = true
    this.action("RELOGIN (LOCK INACTIVITY)")
  }

  curProcActions(curProc){
    let list = []
    curProc.actions_with_confirm_user.forEach(u => {
      if (typeof u === 'string') {
        list.push(u)
      }
    })
    curProc.actions_with_esign.forEach(u => {
      if (typeof u === 'string') {
        list.push(u)
      }
    })
    curProc.actions_with_justification_phrase.forEach(u => {
      if (typeof u === 'string') {
        list.push(u)
      }
    })
    curProc.actions_with_action_confirm.forEach(u => {
      if (typeof u === 'string') {
        list.push(u)
      }
    })
    return list
  }
  authorized(e) {
//    alert('authorized')
    this.procList = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures
    this.auth = e.target.auth; 
    return
  }

  get pLogin() {
    return this.shadowRoot.querySelector("platform-login")
  }

  get cDialog() {
    return this.shadowRoot.querySelector("cred-dialog")
  }

  /**
   * Lifecycle called after DOM updated on the first time
   * Pulling the app config and waiting for the sts state
   */
  firstUpdated() {
    fetch("./config.json").then(r => r.json()).then(j => {
      this.pLogin.config = j
    })
    //this.credDialog = this.shadowRoot.querySelector("#credDialog");
    //this.confirmDialog = this.shadowRoot.querySelector("#confirmDialog");

  }
  // updated() {
  //   // Primero intentamos acceder al componente `trazit-cred-dialog`
  //   this.trazitCredDialog = this.shadowRoot.querySelector("trazit-cred-dialog");
    
  //   // Verificamos si `trazit-cred-dialog` existe en el DOM antes de llamar a su método
  //   if (this.trazitCredDialog) {
  //     this.trazitCredDialog.credentialsDialog();
  //   } else {
  //     console.error('trazit-cred-dialog no está en el DOM.');
  //   }
  
  //   // Intentamos acceder a los diálogos con sus IDs
  //   this.credDialog = this.shadowRoot.querySelector("#credDialog");
  //   this.confirmDialog = this.shadowRoot.querySelector("#confirmDialog");
  
  //   // Verificamos si `credDialog` está en el DOM
  //   if (this.credDialog) {
  //     alert(this.credDialog); // Mostramos una alerta si credDialog existe
  //   } else {
  //     console.error('credDialog no está en el DOM.');
  //   }
  
  //   // Verificamos si `confirmDialog` está en el DOM
  //   if (!this.confirmDialog) {
  //     console.error('confirmDialog no está en el DOM.');
  //   }
  // }
  
  getUser() {
    if (this.auth) {
      let session = getUserSession()
      return session.header_info.first_name +" "+ session.header_info.last_name +"("+ session.userRole +")"
    }
  }

  changeLang() {
    this.flag = this.cDialog.changeLang()
  }

  actionToPerform(procInstanceName, actionName) {
    this.trazitCredsChecker(actionName, procInstanceName, this.objId.value, {}, this.getActionModelFromProcedure(procInstanceName, actionName))
  }

  getActionModelFromProcedure(procInstanceName, actionName){
    //let findProc = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures.filter(m => m.procInstanceName == procInstanceName)
    let actionModel={}
    actionModel.actionName=actionName
    return actionModel
  }
}
customElements.define('demo-example', DemoExample);
