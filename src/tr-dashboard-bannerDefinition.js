import { html, nothing } from 'lit';

export const bannerProcedureDefinition = (thisComp, lang, config, flag, isForTesting, PlatformModel) => html`
  <div class="container layout" id="procmgr">  
    <div id="headerContent" slot="appContent" style="position:sticky;">
      <div class="header isfortesting ${isForTesting} ">
        <!-- 1) Logo -->
        <img src="./images/LOGO_azul_10_SEG_LOOP.gif" />
        ${PlatformModel.customerLogo === undefined ? nothing : html`<img src="${PlatformModel.customerLogo}" />`}

        <!-- 2) UserSessionLabel -->
        <div id="sessionLabel">
          ${thisComp.userSessionInfo()} <!-- Your session info logic -->
        </div>

        <!-- 3) Special Section (Multi-language text for procedure definition) -->
        <div class="special-section-definition">
          ${lang === 'en' ? 'Procedure Definition' : 'Definición de procesos'}
        </div>

        <!-- Language Icon and Logout -->
        <div id="headerlanglogout">         
          <div class="language-and-logout">
            <md-filled-icon-button class="button-letters" id="changelang" @click=${thisComp.changeLang}>${flag}</md-filled-icon-button>
            <md-filled-icon-button class="button-icon" id="logout" @click=${thisComp.logout}>
              <md-icon slot="icon">logout</md-icon>
            </md-filled-icon-button>
          </div>
        </div>

      </div>
    </div>      
    <proc-management-home style="position:relative; top:80px;" .area="app" .lang=${lang} .config=${config}></proc-management-home>
  </div>
`;
