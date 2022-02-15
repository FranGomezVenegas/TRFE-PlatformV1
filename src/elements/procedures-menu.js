import { LitElement, html, nothing } from 'lit';
import '@material/mwc-icon';

const langConfig = {
  "proceduresOption": {
    "tabLabel_en": "Procedures",
    "tabLabel_es": "Procesos"
  },
  "windowOpenable": {
    "en": "Window has pending linked SOP certifications",
    "es": "La ventana tiene SOPs vinculados pendientes de certificación"
  }
}

export class ProceduresMenu extends LitElement {
  static get properties() {
    return {
      procAccess: { type: Array },
      collapses: { type: Array } // collapsing between proc menu list
    };
  }

  constructor() {
    super()
    this.procAccess = []
    this.collapses = []
  }

  firstUpdated() {
    // need to be fixed later
    this.collapses = []
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    userSession.procedures_list.procedures.forEach(p => this.collapses.push({proc: p.procInstanceName, val: false}))
    this.procAccess = userSession.procedures_list.procedures.map(p => p)
  }

  // updating the menu state once sops mark completed
  updateProceduresMenu() {
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    this.procAccess = userSession.procedures_list.procedures.map(p => p)
    this.requestUpdate()
  }

  setCollapses(proc) {
    this.collapses.forEach(c => {
      if (c.proc == proc.procInstanceName) {
        c.val = !c.val
      } else {
        c.val = false
      }
    })
    this.requestUpdate()
  }

  getCollapse(proc) {
    let collapse = this.collapses.filter(c => c.proc == proc.procInstanceName)
    return collapse[0].val
  }

  mobileVersion() {
    return html`
      <mwc-list class="sublist" ?hidden="${!this.procCollapse}">
        ${this.procAccess.map(proc =>
          html`
          <div class="${proc.procInstanceName}">
            <mwc-list-item @click="${()=>this.setCollapses(proc)}">
              <span style="margin-left:20px">${proc["label_"+this.lang]}</span>
            </mwc-list-item>
            <mwc-list class="sublist two" ?hidden="${!this.getCollapse(proc)}">
              ${proc.icons_up.length ?
                html`
                  <mwc-list-item style="pointer-events: none">
                    <div class="subproc">
                      ${proc.icons_up.map(up => 
                        html`${up.icon_name=="icons:search" ?
                          html`<mwc-icon style="--mdc-icon-size:20px;pointer-events: auto;margin-right:15px;">search</mwc-icon>` :
                          html`<img src="${up.icon_name}" style="width:20px; pointer-events: auto;margin-right:15px;">`
                        }`
                      )}
                    </div>
                  </mwc-list-item>
                ` : nothing
              }
              ${proc.new_definition.map(def => 
                html`
                  ${def.label_en ? 
                    html`
                      <mwc-list-item style=${def.icons ? this.setCertifiedPointer(def.icons) : ""}>
                        <div class="subproc">
                          ${def.icons ?
                            html`
                              ${def.icons.map((subProc,i) => 
                                html`
                                  <img title="${subProc.sops_passed==false?langConfig.windowOpenable[this.lang]:null}" 
                                    src="/images/${subProc.sops_passed?subProc.icon_name||`noImage${i}.png`:subProc.icon_name_when_not_certified||`noImage${i}.png`}" style="width:20px; pointer-events: auto;margin-right:15px;"
                                    @click=${() => this.selectedMenu(`/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${subProc.name}`)}>
                                `
                              )}
                              <label title="${this.setCertifiedLabel(def.icons)}" style="margin-left: 5px; color: ${this.setCertifiedColor(def.icons)}">${def["label_"+this.lang]}</label>
                            ` :
                            html`
                              <label title="${def.sops_passed==false?langConfig.windowOpenable[this.lang]:null}" style="margin-left: 75px; cursor: pointer; color: ${def.sops_passed==false?'red':'auto'}"
                                @click=${() => this.selectedMenu(`/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${def.name}`)}>${def["label_"+this.lang]}</label>
                            `
                          }
                        </div>
                      </mwc-list-item>
                    ` : nothing
                  }
                `
              )}
              ${proc.icons_down.map(down => 
                html`
                  <mwc-list-item style="pointer-events: none">
                    <div class="subproc">
                      <img src="/images/noImage1.png" style="width:25px; pointer-events: auto;margin-right:15px;">
                      <label style="margin-left: 40px; pointer-events: none;">${down["label_"+this.lang]}</label>
                    </div>
                  </mwc-list-item>
                `
              )}
            </mwc-list>
          </div>
          `
        )}
      </mwc-list>
    `
  }

  setCertifiedLabel(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false)
    return nonCertified.length ? langConfig.windowOpenable[this.lang] : null
  }

  setCertifiedColor(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false)
    return nonCertified.length ? 'red' : 'auto'
  }

  setCertifiedPointer(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false)
    return nonCertified.length ? "" : "pointer-events: none;"
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
            <sp-action-menu class="topMenu procMenu" id="${proc.procInstanceName}" placement="right-start" size="m" 
              @mouseover=${this.subMenuHover}>
              <div slot="icon"></div>
              <span slot="label" style="color: white">${proc["label_"+this.lang]}</span>
              ${proc.icons_up.length ?
                html`
                  <sp-menu-item style="pointer-events: none; height: 45px; width: 255px">
                    <div style="display: flex;align-items: center;color: white">
                      ${proc.icons_up.map(up =>
                        html`${up.icon_name=="icons:search" ?
                          html`<mwc-icon style="--mdc-icon-size:20px; pointer-events: auto;">search</mwc-icon>` :
                          html`<img src="${up.icon_name}" style="width:20px; pointer-events: auto;">`
                        }`
                      )}
                    </div>
                  </sp-menu-item>
                ` : nothing
              }
              ${proc.new_definition.map(def => 
                html`
                  ${def.label_en ? 
                    html`
                      <sp-menu-item style='height: 45px; width: 255px;${def.icons ? this.setCertifiedPointer(def.icons) : ""}'>
                        <div style="display: flex;align-items: center;color: white">
                          ${def.icons ?
                            html`
                              ${def.icons.map((subProc,i) => 
                                html`
                                  <img title="${subProc.sops_passed==false?langConfig.windowOpenable[this.lang]:null}" 
                                    src="/images/${subProc.sops_passed?subProc.icon_name||`noImage${i}.png`:subProc.icon_name_when_not_certified||`noImage${i}.png`}" style="width:20px; pointer-events: auto;margin-right:10px;"
                                    @click=${() => this.selectedMenu(`/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${subProc.name}`)}>
                                `
                              )}
                              <label title="${this.setCertifiedLabel(def.icons)}" style="margin-left: 10px; color: ${this.setCertifiedColor(def.icons)}">${def["label_"+this.lang]}</label>
                            ` :
                            html`
                              <label title="${def.sops_passed==false?langConfig.windowOpenable[this.lang]:null}" style="margin-left: 70px; cursor: pointer; color: ${def.sops_passed==false?'red':'auto'}"
                                @click=${() => this.selectedMenu(`/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${def.name}`)}>${def["label_"+this.lang]}</label>
                            `
                          }
                        </div>
                      </sp-menu-item>
                    `
                    : nothing
                  }
                `
              )}
              ${proc.icons_down.length ?
                html`
                  <sp-menu-item style="pointer-events: none; height: 45px; width: 255px">
                    <div style="display: flex;align-items: center;color: white">
                      ${proc.icons_down.map(down =>
                        html`<img src="${down.icon_name}" style="width:20px; pointer-events: auto;">`
                      )}
                    </div>
                  </sp-menu-item>
                ` : nothing
              }
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
        if (e.target.getAttribute("class") == "topMenu procMenu") {
          this.openedSubMenu.open = false
          e.target.open = true
          this.openedSubMenu = e.target
        }
      }
    } else {
      if (e.target.getAttribute("class") == "topMenu procMenu") {
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