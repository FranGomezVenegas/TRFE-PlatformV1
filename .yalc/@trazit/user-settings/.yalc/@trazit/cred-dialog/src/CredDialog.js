import { html, css, nothing } from 'lit';
import {  commonLangConfig } from '@trazit/common-core';
import { Layouts } from '@collaborne/lit-flexbox-literals';

import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
//import {DialogsFunctions} from './DialogsFunctions';
import { CommonCore } from '@trazit/common-core';

const langConfig = {
    "pwdWindowTitle": {
      "label_en": "Please confirm your credentials (user & password)",
      "label_es": "Por favor confirma tu identidad (usuario y contraseña)"
    },
    "esignWindowTitle": {
      "label_en": "Please enter your eSign",
      "label_es": "Por favor entra tu frase de Firma Electrónica"
    },
    "justificationWindowTitle": {
      "label_en": "Please enter the justification phrase",
      "label_es": "Por favor entra tu frase de justificación"
    },
    "action": {
      "label_en": "Action name", 
      "label_es": "Nombre de la acción"
    },
    "userToCheck": {
      "label_en": "User", 
      "label_es": "Usuario"
    },
    "pwToCheck": {
      "label_en": "Password", 
      "label_es": "Contraseña"
    },
    "esgToCheck": {
      "label_en": "Esign", 
      "label_es": "Esign"
    },
    "jstToCheck": {
      "label_en": "Justification Phrase", 
      "label_es": "Frase de Justificación"
    },
    "notCorrectMessage": {
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
    }
  }

export function credentialsDialogs(base) {
  return class extends (CommonCore) {
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
        position: relative;
        z-index:999;
      }
      .content {
        opacity: 0.9;
      }
      .content * {
        margin: 5px 0;
      }
      p.attemptsphraseblue {
        color: #464dbb;
      }
      p.attemptsphrasered {
        color: #f3371680;
        animation-duration: 2s;
        animation-name: slidein;
      }
      @keyframes slidein {
        from {
          margin-left: 30%;
        }
        to {
          margin-left: 0%;
        }
      }           
      @media (max-width: 460px) {
      }
      mwc-textfield {
        border-style : Solid;
        border-color : #999999;
        border-color : rgba(153, 153, 153, 1);
        border-width : 1px;
        border-radius : 7px;
        -moz-border-radius : 7px;
        -webkit-border-radius : 7px;   
        font-family : Montserrat;
        font-weight : bold;
        font-size : 19px;
        background-color :  #FFFFFF;
        background-color : rgb(255, 255, 255);  
        --mdc-text-field-idle-line-color:#148CFA;
        --mdc-text-field-outlined-idle-border-color: #148CFA;
        --mdc-text-field-label-ink-color:  #148CFA;
        --mdc-text-field-focused-label-color: #148CFA;
        --mdc-theme-primary: #0465FB;
      }      
      mwc-select {        
        --mdc-theme-primary : rgba(36, 192, 235, 1);
        --mdc-theme-text-primary-on-background : rgba(49, 130, 189, 1);
        --mdc-select-ink-color: rgb(47, 47, 47);
        --mdc-select-dropdown-icon-color:rgba(36, 192, 235, 1);
        --mdc-select-hover-line-color:rgba(36, 192, 235, 1);
        --mdc-notched-outline-border-color: rgba(186, 235, 248, 0.4);
        --mdc-select-disabled-dropdown-icon-color:rgba(36, 192, 235, 1);

        font-family : Montserrat;
        font-weight : bold;
        font-size : 19px;
      }
      mwc-select.outlined {        
        --mdc-theme-primary : rgba(36, 192, 235, 1);
        --mdc-theme-text-primary-on-background : rgba(49, 130, 189, 1);
        --mdc-select-ink-color: rgba(36, 192, 235, 1);
        font-family : Montserrat;
        font-weight : bold;
        font-size : 19px;
        background-color: 4fcad029;
      }
      tr-dialog#confirmDialog {
        --mdc-dialog-z-index: 9;
      }
      `
    ];
  }

  static get properties() {
    return {
      type: { type: String }, // user, esign, justification (default user)
      header: { type: String },
      // for changing purpose we will adjust the placeholder of text label
      // for example in user-profile
      changing: { type: Boolean },
      attempt: { type: Number },
      maxFails: { type: Number },
      actionName: { type: String },
      actionObj: { type: Object },
      objectId: { type: String },
      justificationType: { type: String },
      nonProc: { type: Boolean },
      escapeKey: { type: Boolean },
      reqParams: { type: Object }
      
    };
  }

  constructor() {
    super();
    this.escapeKey = true;
    this.reqParams = {};    
    this.reset();
  }
  firstUpdated(){
    return
    //super.firstUpdated();

    // Verifica si los diálogos están disponibles en el DOM
    // if (!this.credDialog) {
    //   console.error('credDialog no está disponible en firstUpdated');
    // }

    // if (!this.confirmDialog) {
    //   console.error('confirmDialog no está disponible en firstUpdated');
    // }    

    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('vaadin-combo-box').forEach(comboBox => {
          const originalAddEventListener = comboBox.addEventListener;
  
          comboBox.addEventListener = function(type, listener, options) {
              if (type === 'touchstart' && !options) {
                  options = { passive: true };
              }
              originalAddEventListener.call(comboBox, type, listener, options);
          };
      });
  });
  }
  reset() {
    this.type = "";
    this.changing = false;
    this.attempt = 0;
    this.maxFails = 3;
    this.justificationType = "";
    this.nonProc = false;
    this.actionObj = {};
  }

  firstUpdated2() {
    return
    //super.firstUpdated()
    this.updateComplete.then(() => {
      // manually backgrounding the dialog box
      // password dialog
      if (this.dialogSurface!==null){
        this.dialogSurface.style.backgroundImage = "url(/images/abstract.jpg)";
        this.dialogSurface.style.backgroundSize = "cover";
        this.dialogSurface.style.backgroundRepeat = "no-repeat";
        this.dialogSurface.style.textAlign = "center";
      }
      if (this.credDialog!==null){
        this.credDialog.shadowRoot.querySelector("h2#title").style.fontSize = "20px";
        this.credDialog.shadowRoot.querySelector("#content").style.paddingBottom = "0";
      }
    })
  }

  headerLabel() {
    if (this.type == "user") {
      return `${langConfig.pwdWindowTitle["label_"+this.lang]}`
    } else if (this.type == "esign") {
      return `${langConfig.esignWindowTitle["label_"+this.lang]}`
    } else {
      return `${langConfig.justificationWindowTitle["label_"+this.lang]}`
    }
  }
    
    openThisDialog(actionModel = this.actionBeingPerformedModel){

       if (!actionModel||!actionModel.dialogInfo||!actionModel.dialogInfo.fields){
        //alert(false)
        return false
       }      
       // alert(true)
       return true 
    }
        
      credentialsDialog(){
        return html`
          <tr-dialog id="credDialog" 
          style="position: relative; z-index:999;"
            @closed=${this.closed}
            .heading="${this.headerLabel()}"
            hideActions=""
            scrimClickAction=""            
            .escapeKeyAction="${this.escapeKey?'close':''}">
          <form slot="content" id="form-id" method="dialog"> 
            ${this.changing||this.nonProc ?
              nothing :
              html`<div style="position:absolute;left:15px;top:8px;font-size:12px;">
                ${this.actionObj.button ? this.actionObj.button.title["label_"+ this.lang] : this.actionName} (id: ${this.objectId})
              </div>`
            }
            
            <div class="content layout vertical flex center-justified">
              ${this.inputField()}
              ${this.changing||this.nonProc ?
                null :
                html`${this.auditField()}`
              }
              <div style="margin-top:30px">
                ${this.nonProc ?
                  // closing dialog for non procedures i.e relogin on lock inactivity
                  html`<sp-button size="xl" variant="secondary" @click=${this.failedAttempt}>${commonLangConfig.cancelDialogButton["label_"+this.lang]}</sp-button>` :
                  // for procedures
                  html`<sp-button size="xl" variant="secondary" dialogAction="close">${commonLangConfig.cancelDialogButton["label_"+this.lang]}</sp-button>`
                }
                <sp-button size="xl" @click=${this.checking}>${commonLangConfig.confirmDialogButton["label_"+this.lang]}</sp-button>
              </div>
              ${this.setAttempts()}
            </div>
          </form>
          </tr-dialog>
          <tr-dialog id="confirmDialog" 
            ?hideXtoClose=${true}
            heading=""
            hideActions=""
            scrimClickAction=""
            .zIndex=${9}
          >
          <form slot="content" id="form-id" method="dialog"> 
            <div class="layout vertical flex center-justified">
              <div>${commonLangConfig.confirmActionPhrase["label_" + this.lang]} ${this.actionObj.button ? this.actionObj.button.title["label_"+ this.lang] : this.actionName}?</div>
              <div style="margin-top:30px;text-align:center">
                <sp-button size="xl" variant="secondary" slot="secondaryAction" dialogAction="decline">
                  ${commonLangConfig.cancelDialogButton["label_" + this.lang]}</sp-button>
                <sp-button size="xl" slot="primaryAction" dialogAction="accept" @click=${this.addJustificationPhrase}>
                  ${commonLangConfig.confirmDialogButton["label_" + this.lang]}</sp-button>
              </div>
            </div>
          </form>
          </tr-dialog>
        `;        
    }

    
    
    closed() {
    this.reset()
    if (this.pwd) this.pwd.value = ""
    if (this.esg) this.esg.value = ""
    if (this.jst) this.jst.value = ""
    
    }
  /**
   * Composition template for the input fields
   * filter out by creds type
   */
   inputField() {
    if (this.type == "user") {
      // adjust the placeholder label for changing purpose
      return html`
        <mwc-textfield id="userTxtFld" label="${langConfig.userToCheck["label_"+this.lang]}" type="text"
        dialogInitialFocus ></mwc-textfield>
        <mwc-textfield id="pwd" label="${this.adjustLbl(`${langConfig.pwToCheck["label_"+this.lang]}`)}" type="password" iconTrailing="visibility" 
          
          @click=${this.showPwd}
          @keypress=${e=>this.keyPress(e, 'checkingUser')}></mwc-textfield>
      `
    } else if (this.type == "esign") {
      // adjust the placeholder label for changing purpose
      return html`
        <mwc-textfield id="esg" label="${this.adjustLbl(`${langConfig.esgToCheck["label_"+this.lang]}`)}" type="password" iconTrailing="visibility" 
          dialogInitialFocus
          @click=${this.showPwd}
          @keypress=${e=>this.keyPress(e, 'checkingEsignPhrase')}></mwc-textfield>
      `
    }
  }

  /**
   * TEXT: free text auditPhrase
   * LIST: list of auditPhrase
   * TEXTLIST: combination of TEXT & LIST
   */
  auditField() {
    //console.log(this.justificationType)
    // adjust the placeholder label for changing purpose
    if (this.justificationType===null || this.justificationType===undefined || this.justificationType == "TEXT" || this.justificationType == "LABPLANET_FALSE") {
      return html`
        <mwc-textfield id="jst" label="${this.adjustLbl(`${langConfig.jstToCheck["label_"+this.lang]}`)}" type="text" 
          ?dialogInitialFocus=${this.justificationType?true:false} 
          @keypress=${this.keyPress}></mwc-textfield>
      `
    } else {
      return html`
      <vaadin-combo-box id="jst"
          item-label-path="name"
          item-value-path="id"
          .placeholder="${langConfig.jstToCheck["label_"+this.lang]}"
          .label="${langConfig.jstToCheck["label_"+this.lang]}"
          .value=${this.justificationType=="LIST"?this.justificationList[0]:null}
          ?dialogInitialFocus=${this.justificationType?true:false}
          @keypress=${this.keyPress}
          @change=${this.keyPress}
          .items="${this.justificationList}"></vaadin-combo-box>
      `
    }
  }

  /**
   * Adjusting the placeholder label based the actived language
   * @param {*} label 
   */
  adjustLbl(label) {
    if (this.changing) {
      if (this.lang == "en") {
        return "Current "+label
      } else {
        return label+" Actual"
      }
    } else {
      return label
    }
  }

  get credDialog() {return this.shadowRoot.querySelector("tr-dialog#credDialog")}
  get confirmDialog() {return this.shadowRoot.querySelector("tr-dialog#confirmDialog")}

  get userTxtFld() {return this.shadowRoot.querySelector("mwc-textfield#userTxtFld")}
  get pwd() {return this.shadowRoot.querySelector("mwc-textfield#pwd")}

  get esg() {return this.shadowRoot.querySelector("mwc-textfield#esg")}

  get jst() {return this.shadowRoot.querySelector("#jst")}
  
   
  get dialogSurface() {
    if (this.credDialog===null){return null}
    return this.credDialog.shadowRoot.querySelector(".mdc-dialog__surface")}

  keyPress(e, method) {
    if (e.keyCode==13) {
      if (method) { // keypress password / esign field
        // if found justification field, focus to audit field
        if (this.justificationType) {
          this.jst.focus()
        } else {
          this.checking()
        }
      } else { // keypress justification field
        this.checking()
      }
    }
  }

  /**
   * which creds request should be requested
   */
  checking() {
    if (this.type == "user") {
      this.checkingUser()
    } else if (this.type == "esign") {
      this.checkingEsignPhrase()
    } else if (this.type == "justification") {
      this.addJustificationPhrase()
    }
  }

  checkAttempt() {
    if (this.attempt > 1) {
      this.failedAttempt()
    } else {
      this.attempt++
    }
  }

  failedAttempt() {
    this.credDialog.close()
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
  checkingUser() {
    let params = this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      actionName: "TOKEN_VALIDATE_USER_CREDENTIALS",
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      userToCheck: this.userTxtFld.value,
      passwordToCheck: this.pwd.value
    })
    this.fetchApi(params).then(j => {
      if (j.is_error) {
        this.checkAttempt()
      } else {
        let actionInfoToAPIcall=JSON.parse(sessionStorage.getItem('actionInfoToAPIcall'));
        this.trazitNextRequest(actionInfoToAPIcall.action, actionInfoToAPIcall.actionParams, 
            this.buildCreadArgumentsObj(), actionInfoToAPIcall.gridSelectedItem, actionInfoToAPIcall.parentData)
      }
    })
  }


  addJustificationPhrase(){
        // const stack = new Error().stack;
        // const stackLines = stack.split('\n');
        // if (stackLines!==null&&stackLines[1]!==null){
        //   const callerName = stackLines[1].match(/at (\w+)/)[0]; // Adjust the index as needed    
        //   console.log("Called from: " + callerName);
        // }       
    let actionInfoToAPIcall=JSON.parse(sessionStorage.getItem('actionInfoToAPIcall'));
    this.trazitNextRequest(actionInfoToAPIcall.action, actionInfoToAPIcall.actionParams, 
        this.buildCreadArgumentsObj(), actionInfoToAPIcall.gridSelectedItem, actionInfoToAPIcall.parentData)
  }


  checkingEsignPhrase() {
    let params = this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      actionName: "TOKEN_VALIDATE_ESIGN_PHRASE",
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      esignPhraseToCheck: this.esg.value
    })
    this.fetchApi(params).then(j => {
      if (j.is_error) {
        this.checkAttempt()
      } else {
        let actionInfoToAPIcall=JSON.parse(sessionStorage.getItem('actionInfoToAPIcall'));
        this.trazitNextRequest(actionInfoToAPIcall.action, actionInfoToAPIcall.actionParams, 
            this.buildCreadArgumentsObj(), actionInfoToAPIcall.gridSelectedItem, actionInfoToAPIcall.parentData)
      }
    })
  }

  setAttempts() {
    if (this.type == "justification") {
      return
    }
    let txt = this.lang == "en" ? 
      `*** Attempts: ${this.attempt} of 3` : 
      `*** Intentos: ${this.attempt} de ${this.maxFails}`
    return html`<p class=${this.attempt==0?'attemptsphraseblue':'attemptsphrasered'}>${txt}</p>`
  }

  nextRequestCommons(action) {
    console.log('nextRequestCommons')
    this.reqParams = {
      ...this.reqParams,
      procInstanceName: this.procInstanceName,      
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      dbName: this.config.dbName,
      actionName: action.actionName,
      //sampleId: this.objectId,
      userToCheck: this.userName,
      passwordToCheck: this.pwd ? this.pwd.value : "",
      esignPhraseToCheck: this.esg ? this.esg.value : "",
      auditReasonPhrase: this.jst ? this.jst.value: ""
    }
    let params = this.config.backendUrl + action.endPoint
    + '?' + new URLSearchParams(this.reqParams) 
    // if (extraParams!==undefined){
    //   params=params + '&' + new URLSearchParams(extraParams)
    // }
    this.fetchApi(params).then(() => {
//      this.reload()
    })
    let cleanParams = {}
    Object.entries(this.reqParams).map(([key, value]) => {
      if (value != null || value != undefined) {
        cleanParams[key] = value
      }
    })
    this.reqParams = cleanParams
    if (this.credDialog) {
      this.credDialog.close()
    }
  }

    
  }
}