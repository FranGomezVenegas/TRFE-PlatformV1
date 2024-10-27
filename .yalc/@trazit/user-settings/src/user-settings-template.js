import { html } from 'lit';
import { viewInfoDefinition } from './view-info-definition.js';
import '@material/web/icon/icon.js'
import '@material/web/button/filled-button.js'
import '@material/web/textfield/filled-text-field.js'
import '@material/web/select/filled-select.js'
import '@material/web/select/select-option.js'


export const UserSettingsTemplate = (context) => html`
  <cred-dialog-component id="credDialogComponent" .config="${context.config}" .fetchApi="${context.fetchApi}" .trazitNextRequest="${context.trazitNextRequest}"></cred-dialog-component>
  <div class="row">
    <div class="icon-button">
      <md-filled-icon-button><md-icon slot="icon" @click=${context.getOpenIncidents}>refresh</md-icon></md-filled-icon-button>
    </div>
    <div class="column"> 
      <md-filled-text-field id="newAlias" ?enabled=${viewInfoDefinition.Alias.enabled} 
        .label="${viewInfoDefinition.Alias["label_" + context.lang]}" type="email" 
        @click=${context.showPwd} 
        @keypress=${e => { if (e.keyCode == 13 && context.newAlias.value) context.confirmNewVal("USER_CHANGE_ALIAS") }}
        >
      </md-filled-text-field>
      <md-filled-icon-button><md-icon title="Confirm" ?enabled=${viewInfoDefinition.Alias.enabled} 
        icon="published_with_changes" 
        @click=${() => context.confirmNewVal("UPDATE_USER_ALIAS")} 
        .label="${viewInfoDefinition.ChangeLabel["label_" + context.lang]}">
        published_with_changes
      </md-icon></md-filled-icon-button>
    </div>
    <div class="column"> 
      <md-filled-text-field id="newMail" ?enabled=${viewInfoDefinition.Email.enabled} 
        .label="${viewInfoDefinition.Email["label_" + context.lang]}" type="email" 
         @click=${context.showPwd} 
        @keypress=${e => { if (e.keyCode == 13 && context.newMail.value) context.confirmNewVal("USER_CHANGE_MAIL") }}>
      </md-filled-text-field>
      <md-filled-icon-button><md-icon title="Confirm" ?enabled=${viewInfoDefinition.Email.enabled} 
        icon="published_with_changes" 
        @click=${() => context.confirmNewVal("UPDATE_USER_MAIL")} 
        .label="${viewInfoDefinition.ChangeLabel["label_" + context.lang]}">
        published_with_changes
      </md-icon></md-filled-icon-button>
    </div>
    <div class="column">
      <md-filled-select label='${viewInfoDefinition.Shift["label_" + context.lang]}' id="newShift" 
        @change=${e => context.userShift = e.target.value}>
        ${viewInfoDefinition.Shift.items.map(c => html`
          <md-select-option value="${c.keyName}" 
            ?selected=${c.keyName == context.userShift}>${c["keyValue_" + context.lang]}</md-select-option>`)}
      </md-filled-select>
      <md-filled-icon-button><md-icon title="Confirm" icon="published_with_changes" 
        @click=${() => context.confirmNewVal("UPDATE_USER_SHIFT")} 
        .label="${viewInfoDefinition.ChangeLabel["label_" + context.lang]}">
        published_with_changes
      </md-icon></md-filled-icon-button>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <md-filled-text-field id="newPwd" .label="${viewInfoDefinition.Password["label_" + context.lang]}" 
        type="password" iconTrailing="visibility" @click=${context.showPwd} 
        @keypress=${e => { if (e.keyCode == 13 && context.newPwd.value) context.confirmNewVal("USER_CHANGE_PSWD") }}>
      </md-filled-text-field>
      <md-filled-icon-button><md-icon title="Confirm" icon="published_with_changes" 
        @click=${() => context.confirmNewVal("USER_CHANGE_PSWD")} 
        .label="${viewInfoDefinition.ChangeLabel["label_" + context.lang]}">
        published_with_changes
      </md-icon></md-filled-icon-button>
    </div>
    <div class="column">
      <md-filled-text-field id="newEsign" .label="${viewInfoDefinition.Esign["label_" + context.lang]}" 
        type="password" iconTrailing="visibility" @click=${context.showPwd} 
        @keypress=${e => { if (e.keyCode == 13 && context.newEsg.value) context.confirmNewVal("USER_CHANGE_ESIGN") }}>
      </md-filled-text-field>
      <md-filled-icon-button><md-icon slot="icon" title="Confirm" icon="published_with_changes" 
        @click=${() => context.confirmNewVal("USER_CHANGE_ESIGN")} 
        .label="${viewInfoDefinition.ChangeLabel["label_" + context.lang]}">
        published_with_changes
      </md-icon></md-filled-icon-button>
    </div>
  </div>
  <text-button size="xl" @click=${() => context.dispatchEvent(new CustomEvent('save-tabs'))}>
    ${viewInfoDefinition.TabLogin["label_" + context.lang]}
  </text-button>
  
`; //${context.super.render()}
