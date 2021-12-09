import { LitElement, html, nothing } from 'lit';
import '@material/mwc-icon';

const langConfig = {
  "proceduresOption": {
    "tabLabel_en": "Procedures",
    "tabLabel_es": "Procesos"
  }
}

export class ProceduresMenu extends LitElement {
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
            ${this.procAccess[0]&&this.procAccess[0].icons_up.map(up => 
              html`
                <mwc-list-item style="pointer-events: none">
                  <div class="subproc">
                    ${up.icon_name=="icons:search" ?
                      html`<mwc-icon style="pointer-events: auto;">search</mwc-icon>` :
                      html`<img src="/images/noImage0.png" style="width:25px; pointer-events: auto;">`
                    }
                    <label style="margin-left: 25px; pointer-events: none;">${up["label_"+this.lang]}</label>
                  </div>
                </mwc-list-item>
              `
            )}
            ${this.procAccess[0]&&this.procAccess[0].new_definition.map(def => 
              html`
                ${def.label_en ? 
                  html`
                    <mwc-list-item style=${def.icons ? "pointer-events: none;" : ""}>
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
                  ` : nothing
                }
              `
            )}
            ${this.procAccess[0]&&this.procAccess[0].icons_down.map(down => 
              html`
                <mwc-list-item style="pointer-events: none">
                  <div class="subproc">
                    <img src="/images/noImage1.png" style="width:25px; pointer-events: auto;">
                    <label style="margin-left: 25px; pointer-events: none;">${down["label_"+this.lang]}</label>
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
            ${this.procAccess[1]&&this.procAccess[1].icons_up.map(up => 
              html`
                <mwc-list-item style="pointer-events: none">
                  <div class="subproc">
                    ${up.icon_name=="icons:search" ?
                      html`<mwc-icon style="pointer-events: auto;">search</mwc-icon>` :
                      html`<img src="/images/noImage0.png" style="width:25px; pointer-events: auto;">`
                    }
                    <label style="margin-left: 25px; pointer-events: none;">${up["label_"+this.lang]}</label>
                  </div>
                </mwc-list-item>
              `
            )}
            ${this.procAccess[1]&&this.procAccess[1].new_definition.map(def => 
              html`
                ${def.label_en ? 
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
                  ` : nothing
                }
              `
            )}
            ${this.procAccess[1]&&this.procAccess[1].icons_down.map(down => 
              html`
                <mwc-list-item style="pointer-events: none">
                  <div class="subproc">
                    <img src="/images/noImage1.png" style="width:25px; pointer-events: auto;">
                    <label style="margin-left: 25px; pointer-events: none;">${down["label_"+this.lang]}</label>
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
      <sp-action-menu class="topMenu" id="procedures" size="m" 
        @mouseover=${() => this.menuHover("procedures")}>
        <div slot="icon"></div>
        <span slot="label" @mouseover=${() => this.menuHover("procedures")}>${langConfig.proceduresOption["tabLabel_" + this.lang]}</span>
        ${this.procAccess.map(proc => 
          html`
          <sp-menu-item>
            <sp-action-menu class="topMenu" id="${proc.procInstanceName}" placement="right-start" size="m" 
              @mouseover=${this.subMenuHover}>
              <div slot="icon"></div>
              <span slot="label" style="color: white">${proc["label_"+this.lang]}</span>
              ${proc.icons_up.map(up => 
                html`
                  <sp-menu-item style="pointer-events: none; height: 45px; width: 255px">
                    <div style="display: flex;align-items: center;color: white">
                      ${up.icon_name=="icons:search" ?
                        html`<mwc-icon style="pointer-events: auto;">search</mwc-icon>` :
                        html`<img src="/images/noImage0.png" style="width:25px; pointer-events: auto;">`
                      }
                      <label style="margin-left: 25px; pointer-events: none;">${up["label_"+this.lang]}</label>
                    </div>
                  </sp-menu-item>
                `
              )}
              ${proc.new_definition.map(def => 
                html`
                  ${def.label_en ? 
                    html`
                      <sp-menu-item style='height: 45px; width: 255px;${def.icons ? "pointer-events: none;" : ""}'>
                        <div style="display: flex;align-items: center;color: white">
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
                    : nothing
                  }
                `
              )}
              ${proc.icons_down.map(down => 
                html`
                  <sp-menu-item style="pointer-events: none; height: 45px; width: 255px">
                    <div style="display: flex;align-items: center;">
                      <img src="/images/noImage1.png" style="width:25px; pointer-events: auto;">
                      <label style="margin-left: 25px; pointer-events: none;">${down["label_"+this.lang]}</label>
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
    // adjust menu and submenu styles
    if (e.target.open) {
      setTimeout(() => {
        let popover = document.querySelectorAll("sp-popover")
        popover.forEach(p => {
          p.style.setProperty("--spectrum-popover-background-color", "rgb(3, 169, 244)")
          p.style.borderBottom = "1px solid black"
          p.style.boxShadow = "1px 1px #888888"
          let pMenu = p.querySelectorAll("sp-menu")
          pMenu.forEach(m => {
            if (m.tabIndex < 0) {
              m.style.margin = "0"
              m.style.width = "260px"
            }
          })
          let spMenu = p.querySelectorAll("sp-menu-item")
          spMenu.forEach(s => {
            s.style.borderBottom = "1px solid black"
            s.style.boxShadow = "1px 1px #888"
          })
        })
      })
    }
  }
}