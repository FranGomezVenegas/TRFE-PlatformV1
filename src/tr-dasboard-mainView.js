import { html, nothing } from 'lit';
import './elements/tab-state.js';
import '@trazit/procedures-controller/procedures-controller.js'
export const mainView = (thisComp, desktop, config, showTab, lang, currentView, notifs, query) => html`
<div class="mainbackground">
<main class="layout vertical flex">
<!-- ${currentView.componentToOpen} -->
<!-- tabs -->
      ${desktop ? html`<tab-state .lang=${lang} .tabs=${thisComp.tabs}></tab-state>` : nothing}
        

    <tr-default ?hidden=${currentView.componentToOpen}></tr-default>
    ${currentView.componentToOpen == 'procedures' ? html`
      <procedures-controller .lang=${lang} .config=${config}></procedures-controller>
    `:nothing}
    ${currentView.componentToOpen == 'notifications' ? html`
      <platform-notif .lang=${lang} .notifs=${notifs}  .params=${currentView}></platform-notif>
      `:nothing}
    ${currentView.componentToOpen == 'certifications' ? html`
        <user-certifications .lang=${lang} .config=${config} 
        .filterData=${query.filterData} ?hidden=${currentView.componentToOpen == 'certifications' ? false : true} 
        .params=${currentView} @certs-updated=${thisComp.certsUpdated}>
      </user-certifications>
    `:nothing}
    ${currentView.componentToOpen == 'incidents' ? html`
      <my-incidents .lang=${lang} .config=${config}  .params=${currentView}></my-incidents>
    `:nothing}
    ${currentView.componentToOpen == 'user' ? html`
      <user-settings .lang=${lang} .config=${config} 
      .params=${currentView} @save-tabs=${()=>this.tabs.saveTabs()}></user-settings>
    `:nothing}
    ${currentView.componentToOpen == 'tutorial' ? html`
      <video-tutorial .lang=${lang} .config=${config} .params=${currentView}></video-tutorial>
    `:nothing}
    ${currentView.componentToOpen == 'endpoints' ? html`
      <endpoints-listbymodule .lang=${lang} .config=${config} .params=${currentView}></endpoints-listbymodule>
    `:nothing}
    ${currentView.componentToOpen == 'platformusersessions' ? html`
      <platform-usersessions .lang=${lang} .config=${config} .params=${currentView}></platform-usersessions>
    `:nothing}
    ${currentView.componentToOpen == 'holidayscalendar' ? html`
          <holiday-calendars .lang=${lang} .config=${config} .params=${currentView}></holiday-calendars> 
    `:nothing}
    
    
             
  </div>
</main>
</div>
</div>
<relogin-dialog .lang=${lang} .config=${config} @logout=${thisComp.logout}></relogin-dialog> 
`;