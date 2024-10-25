import { html, nothing } from 'lit';

export const bannerProcedureOperation = (thisComp, lang, config, flag, PlatformModel, isForTesting, sops, analytics, myPendingCertifApprovals, proceduresList, tabs) => html`
  <div class="container layout" id="procmgr">  
    <div id="headerContent" slot="appContent" class="isfortesting ${isForTesting}" style="position:sticky;">
      <div class="header isfortesting ${isForTesting}">
        <!-- Icono de hamburguesa para móvil (solo visible en pantallas pequeñas) -->
        <div id="mobileMenuIcon" @click="${() => thisComp.toggleMobileMenu()}">
          <md-icon slot="icon">menu</md-icon>
        </div>

        <!-- Logo y otros elementos del header -->
        <img src="./images/LOGO_azul_10_SEG_LOOP.gif" style="margin-left: 10px;" />
        ${PlatformModel.customerLogo === undefined ? nothing : html`<img src="${PlatformModel.customerLogo}" />`}

        <!-- UserSessionLabel -->
        <div id="sessionLabel">
          ${thisComp.userSessionInfo()}
        </div>
                
        <!-- Menú de escritorio -->
        <div id="desktopMenu" class="operation-special-section-operation">
          ${PlatformModel['operation-menus']
            .filter(menu => menu.display !== false)
            .map(menu => html`
              <div class="operation-menu-item ${menu.hover ? 'hover-menu' : 'click-menu'}"
                   @mouseenter="${() => !thisComp.isMobile() ? thisComp.openMenu(menu) : nothing}"
                   @mouseleave="${() => !thisComp.isMobile() ? thisComp.closeMenu(menu) : nothing}">
                <button class="operation-button" @click="${() => thisComp.isMobile() && menu.isProcedureMenu ? thisComp.toggleProcedureMenuMobile(menu) : thisComp.selectedMenu(menu)}">
                  ${menu.icon ? html`<span class="material-icons">${menu.icon}</span>` : ''}
                  ${thisComp.menuLabel(menu)} <!-- Multi-language support -->
                </button>
                ${menu.isProcedureMenu !== undefined && menu.isProcedureMenu === true ? html`
                  <div class="operation-dropdown-content ${menu.open ? 'open' : ''}">
                    <procedures-menu .procAccess="${proceduresList}" .selectedMenuCallback="${thisComp.selectedMenu.bind(thisComp)}"></procedures-menu>
                  </div>
                ` : nothing}
                ${menu.options ? html`
                  <div class="operation-dropdown-content ${menu.open ? 'open' : ''}"
                       @mouseenter="${() => thisComp.keepMenuOpen(menu)}"
                       @mouseleave="${() => thisComp.closeMenu(menu)}">
                    ${menu.options.map(option => html`
                      <div class="operation-dropdown-option" @click="${() => thisComp.selectedMenu(option)}">
                        ${thisComp.menuLabel(option)}
                      </div>
                    `)}
                  </div>
                ` : nothing}
              </div>
            `)}
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

    <!-- Área de tabs/lista -->
    <div class="tabs-area ${thisComp.isMobile() ? 'mobile-tabs' : 'desktop-tabs'} ${thisComp.tabAreaVisible ? 'visible' : 'hidden'}">
      <md-icon-button icon="${thisComp.tabAreaVisible ? 'unfold_less' : 'unfold_more'}" @click="${thisComp.toggleTabArea}"></md-icon-button>
      ${thisComp.isMobile() ? html`
        <!-- Lista para modo mobile -->
        <ul>
          ${tabs.map(tab => html`
            <li>
              ${lang === 'en' ? tab.tabLabel_en : tab.tabLabel_es}
              <md-icon-button icon="close" @click="${() => thisComp.removeTab(tab)}"></md-icon-button>
            </li>
          `)}
        </ul>
      ` : html`
        <!-- Pestañas para modo desktop -->
        <div class="tabContainer">
          ${tabs.map(tab => html`
            <tab-item .lang=${lang} .tab=${tab}
              @tab-change=${thisComp.tabChanged}
              @tab-remove=${thisComp.removeTab}>
            </tab-item>
          `)}
        </div>
      `}
    </div>

    #tabs: ${tabs.length}
    <!-- Menú lateral deslizante para móvil -->
    <div id="mobileMenu" class="mobile-menu" @click="${(e) => e.stopPropagation()}">
      <div class="mobile-menu-content">
        ${PlatformModel['operation-menus']
          .filter(menu => menu.display !== false)
          .map(menu => html`
            <div class="mobile-menu-item">
              <button class="mobile-operation-button" @click="${() => menu.isProcedureMenu ? thisComp.toggleProcedureMenuMobile(menu) : thisComp.selectedMenu(menu)}">
                ${menu.icon ? html`<span class="material-icons">${menu.icon}</span>` : ''}
                ${thisComp.menuLabel(menu)}
              </button>
              ${menu.isProcedureMenu !== undefined && menu.isProcedureMenu === true ? html`
                <!-- Submenú para Procedures en mobile -->
                <div class="mobile-submenu-content ${menu.open ? 'open' : ''}">
                  <procedures-menu .procAccess="${proceduresList}"></procedures-menu>
                </div>
              ` : nothing}
            </div>
          `)}
      </div>
    </div>

    <!-- Contenido principal -->
    <proc-management-home style="position:relative; top:80px;" .area="app" .lang=${lang} .config=${config}></proc-management-home>
  </div>
`;


