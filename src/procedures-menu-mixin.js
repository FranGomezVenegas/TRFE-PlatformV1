import { LitElement, html } from 'lit-element';

const langConfig = {
  "proceduresOption": {
    "tabLabel_en": "Procedures",
    "tabLabel_es": "Procesos"
  }
}

export class ProceduresMenuMixin extends LitElement {
  static get properties() {
    return {
      procAccess: { type: Array }
    };
  }

  constructor() {
    super()
    this.procAccess = []
  }

  firstUpdated() {
    // need to be fixed later
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.procAccess = userSession.procedures_list.procedures.map(p => p)
  }

  mobileVersion() {
    return html`
      <mwc-list class="sublist" ?hidden="${!this.procCollapse}">
        <div class="${this.procAccess[0]&&this.procAccess[0].procInstanceName}">
          <mwc-list-item @click="${()=>{this.airCollapse=!this.airCollapse;this.waterCollapse=false}}">
            <span style="margin-left:20px">${this.procAccess[0]&&this.procAccess[0]["label_"+this.lang]}</span>
          </mwc-list-item>
          <mwc-list class="sublist two" ?hidden="${!this.airCollapse}">
            ${this.procAccess[0]&&this.procAccess[0].new_definition.map(def => 
              html`
                <mwc-list-item>
                  <div class="subproc">
                    ${def.icons ?
                      html`
                        ${def.icons.map((subProc,i) => 
                          html`
                            <img src="/images/${subProc.icon_name||`noImage${i}.png`}" style="width:20px; pointer-events: auto;"
                              @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${subProc.name}`)}>
                          `
                        )}
                        <label style="margin-left: 10px">${def["label_"+this.lang]}</label>
                      ` :
                      html`
                        <label style="margin-left: 50px; cursor: pointer"
                          @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${def.name}`)}>${def["label_"+this.lang]}</label>
                      `
                    }
                  </div>
                </mwc-list-item>
              `
            )}
          </mwc-list>
        </div>
        <div class="${this.procAccess[1]&&this.procAccess[1].procInstanceName}">
          <mwc-list-item @click="${()=>{this.waterCollapse=!this.waterCollapse;this.airCollapse=false}}">
            <span style="margin-left:20px">${this.procAccess[1]&&this.procAccess[1]["label_"+this.lang]}</span>
          </mwc-list-item>
          <mwc-list class="sublist two" ?hidden="${!this.waterCollapse}">
            ${this.procAccess[1]&&this.procAccess[1].new_definition.map(def => 
              html`
                <mwc-list-item>
                  <div class="subproc">
                    ${def.icons ?
                      html`
                        ${def.icons.map((subProc,i) => 
                          html`
                            <img src="/images/${subProc.icon_name||`noImage${i}.png`}" style="width:20px; pointer-events: auto;"
                              @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${subProc.name}`)}>
                          `
                        )}
                        <label style="margin-left: 10px">${def["label_"+this.lang]}</label>
                      ` :
                      html`
                        <label style="margin-left: 50px; cursor: pointer"
                          @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${def.name}`)}>${def["label_"+this.lang]}</label>
                      `
                    }
                  </div>
                </mwc-list-item>
              `
            )}
          </mwc-list>
        </div>
      </mwc-list>
    `
  }

  desktopVersion() {
    return html`
      <sp-action-menu style="left: 60px" class="topMenu" id="procedures" size="m" 
        @mouseover=${() => this.menuHover("procedures")}>
        <div slot="icon"></div>
        <span slot="label" @mouseover=${() => this.menuHover("procedures")}>${langConfig.proceduresOption["tabLabel_" + this.lang]}</span>
        ${this.procAccess.map(proc => 
          html`
          <sp-menu-item>
            <sp-action-menu id="${proc.procInstanceName}" placement="right-start" size="m" 
              @mouseover=${this.subMenuHover}>
              <div slot="icon"></div>
              <span slot="label">${proc["label_"+this.lang]}</span>
              ${proc.new_definition.map(def => 
                html`
                  <sp-menu-item style=${def.icons ? "pointer-events: none;" : ""}>
                    <div style="display: flex;align-items: center;">
                      ${def.icons ?
                        html`
                          ${def.icons.map((subProc,i) => 
                            html`
                              <img src="/images/${subProc.icon_name||`noImage${i}.png`}" style="width:20px; pointer-events: auto;"
                                @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${subProc.name}`)}>
                            `
                          )}
                          <label style="margin-left: 10px; pointer-events: none;">${def["label_"+this.lang]}</label>
                        ` :
                        html`
                          <label style="margin-left: 50px; cursor: pointer"
                            @click=${() => this.selectedMenu(`/dashboard/${def.lp_frontend_page_name}?name=${def.name}`)}>${def["label_"+this.lang]}</label>
                        `
                      }
                    </div>
                  </sp-menu-item>
                `
              )}
            </sp-action-menu>
          </sp-menu-item>
          `
        )}
      </sp-action-menu>
    `;
  }

  subMenuHover(e) {
    if (this.openedSubMenu) {
      if (this.openedSubMenu.id == e.target.id) {
        e.target.open = false // fix bug when re-hover the closed sub menu
        e.target.open = true
      } else {
        if (e.target.id == "em-demo-a" || e.target.id == "proc-deploy") {
          this.openedSubMenu.open = false
          e.target.open = true
          this.openedSubMenu = e.target
        }
      }
    } else {
      if (e.target.id == "em-demo-a" || e.target.id == "proc-deploy") {
        e.target.open = true
        this.openedSubMenu = e.target
      }
    }
  }
}