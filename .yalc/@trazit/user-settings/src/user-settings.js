import { LitElement } from 'lit';
import { UserSettingsStyles } from './user-settings-styles.js';
import { UserSettingsTemplate } from './user-settings-template.js';
import { ActionsFunctions } from '@trazit/actions/ActionsFunctions.js';
import { ApiFunctionsForPlatform } from '@trazit/apis-forplatform'
import '@trazit/cred-dialog/trazit-cred-dialog.js';
console.log('ActionsFunctions:', ActionsFunctions);
console.log('ApiFunctionsForPlatform:', ApiFunctionsForPlatform);
console.log('LitElement:', LitElement);
//import { DialogsFunctions } from '../../tr-procedures/src/components/GenericDialogs/DialogsFunctions.js';
//import { TrazitCredentialsDialogs } from '../../tr-procedures/src/components/GenericDialogs/TrazitCredentialsDialogs.js';


const CombinedClass = ApiFunctionsForPlatform(ActionsFunctions(LitElement));

//export class UserSettings extends TrazitCredentialsDialogs(DialogsFunctions(CredDialog)) {
export class UserSettings extends CombinedClass  {  
  

  static get styles() {
    return UserSettingsStyles;
  }

  render() {
    return UserSettingsTemplate(this);
  }

  static get properties() {
    return {
      userShift: { type: String },
      userMail: { type: String },
      userAlias: { type: String },
      targetValue: { type: Object },
      lang:{type: String}
    };
  }

  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.trazitNextRequest=this.trazitNextRequest.bind(this)
    this.targetValue = {};
  }

  confirmNewVal(actionName) {
    sessionStorage.setItem('actionInfoToAPIcall', JSON.stringify(this.actionBeingPerformedModel));
    let action={}
    action.actionName = actionName
    action.endPoint = this.config.appAuthenticateApiUrl
    action.requiresDialog = false
    action.notGetViewData = true
    this.targetValue=this.reqParams
    if (actionName == "USER_CHANGE_PSWD") {
      this.type = "user"
      if (this.newPwd.value===undefined||this.newPwd.value.length===0){
        alert(viewInfoDefinition.Password["empty_label_" + this.lang])
        return
      }
//        this.selectedItems=[]
//      let item={newPassword: this.newPwd.value}
//      this.selectedItems.push(item)
//      this.actionMethod(action)
      //return
//      this.config.appAuthenticateApiUrl
      this.actionBeingPerformedModel=action
      console.log(action)
      this.type = "user"
      this.trazitCredsChecker(actionName, -1, {
        newPassword: this.newPwd.value}, action, true, 'user')
    } else if (actionName == "USER_CHANGE_ESIGN") {
      this.type = "esign"
      if (this.newEsg.value===undefined||this.newEsg.value.length===0){
        alert(viewInfoDefinition.Esign["empty_label_" + this.lang])
        return
      }
      this.actionBeingPerformedModel=action
      this.type = "esign"
      this.trazitCredsChecker(actionName, -1, {
        newEsign: this.newEsg.value}, action, true, 'esign')
    } else if (actionName == "UPDATE_USER_SHIFT") {
      console.log('action', action)
      action.endPoint='/app/PlatformAdminAPIactions'
      this.actionBeingPerformedModel=action
      this.type = "user"
      this.trazitCredsChecker(actionName, -1, {
        newShift: this.newShift.value}, this.targetValue, action, true, 'user')
    } else if (actionName == "UPDATE_USER_MAIL") {
      console.log('action', action)
      action.endPoint='/app/PlatformAdminAPIactions'
      this.actionBeingPerformedModel=action
      this.type = "user"
      this.trazitCredsChecker(actionName, -1, {
        newMail: this.newMail.value}, this.targetValue, action, true, 'user')
    } else if (actionName == "UPDATE_USER_ALIAS") {
      console.log('action', action)
      action.endPoint='/app/PlatformAdminAPIactions'
      this.actionBeingPerformedModel=action
      this.type = "user"
      this.trazitCredsChecker(actionName, -1, {
        newAlias: this.newAlias.value}, this.targetValue, action, true, 'user')
    }
  }

  get newPwd() { return this.shadowRoot.querySelector("md-filled-text-field#newPwd"); }
  get newEsg() { return this.shadowRoot.querySelector("md-filled-text-field#newEsign"); }
  get newShift() { return this.shadowRoot.querySelector("md-filled-select#newShift"); }
  get newMail() { return this.shadowRoot.querySelector("md-filled-text-field#newMail"); }
  get newAlias() { return this.shadowRoot.querySelector("md-filled-text-field#newAlias"); }

  authorized() {
    super.authorized();
    let userSession = JSON.parse(sessionStorage.getItem("userSession"));
    this.userShift = userSession.header_info.shift;
    this.userMail = userSession.header_info.mail;
    this.userAlias = userSession.header_info.alias;
  }

  reset() {
    super.reset();
    this.changing = true;
  }

  firstUpdated() {
    super.firstUpdated();
    this.updateComplete.then(() => {
      this.newPwd.updateComplete.then(() => {
        setTimeout(() => {
          this.newPwd.focus();
        }, 100);
      });
    });
  }

  // Additional methods for handling actions...

  get credDialog() {
    return this.shadowRoot.querySelector('#credDialogComponent');
  }  
}customElements.define('user-settings', UserSettings);
