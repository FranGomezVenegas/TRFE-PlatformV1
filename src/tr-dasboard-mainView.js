// ${desktop ? 
//     html`${this.tabState()}` : nothing
//   }
//   <div class="content">
//     ${desktop ? 
//       nothing :
//       html`
//         <div id="tabHandle" 
//           >
//           <md-icon @click=${e=>{this.showTab=!this.showTab;e.target.icon=e.target.icon=="visibility"?"visibility_off":"visibility"}}>arrow_drop_up</md-icon>
//           <div></div>
//         </div>
//         <div class="layout horizontal flex" style="margin-top:5px" style="display: flex; justify-content: flex-end;">
//           ${this.tabMobileState()}
//         </div>
//       `
//     }

import { html, nothing } from 'lit';
//import '@trazit/tr-procedures/tr-procedures.js'
export const mainView = (thisComp, desktop, config, showTab, lang, currentView, notifs, query) => html`
<div class="mainbackground">
<main class="layout vertical flex">
${currentView.componentToOpen}
<!-- tabs -->

    <tr-default ?hidden=${currentView.componentToOpen}></tr-default>
    <tr-procedures .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'procedures' ? false : true}></tr-procedures>
    <platform-notif .lang=${lang} .notifs=${notifs} ?hidden=${currentView.componentToOpen == 'notifications' ? false : true} .params=${currentView}></platform-notif>
    <my-certifications 
      .lang=${lang} 
      .config=${config} 
      .filterData=${query.filterData} ?hidden=${currentView.componentToOpen == 'certifications' ? false : true} 
      .params=${currentView}
      @certs-updated=${thisComp.certsUpdated}>
    </my-certifications>
    <my-incidents .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'incidents' ? false : true} .params=${currentView}>
    </my-incidents>
    <user-profile .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'user' ? false : true}
      .params=${currentView} @save-tabs=${()=>this.tabs.saveTabs()}></user-profile>
    <video-tutorial .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'tutorial' ? false : true}
      .params=${currentView}></video-tutorial>
    <endpoints-listbymodule .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'endpoints' ? false : true}
      .params=${currentView}></endpoints-listbymodule>
    <platform-usersessions .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'platformusersessions' ? false : true}
      .params=${currentView}></platform-usersessions>
    <holiday-calendars .lang=${lang} .config=${config} ?hidden=${currentView.componentToOpen == 'holidayscalendar' ? false : true} .params=${currentView}>
    </holiday-calendars>              
  </div>
</main>
</div>
</div>
<relogin-dialog .lang=${lang} .config=${config} @logout=${thisComp.logout}></relogin-dialog> 
`;