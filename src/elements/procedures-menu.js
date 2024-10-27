import { LitElement, html, nothing } from 'lit';
import { styles } from '../tr-dashboard-styles.js';

export class ProceduresMenu extends LitElement {
  static get styles() {
    return [styles]; // Usamos los estilos centralizados
  }

  static get properties() {
    return {
      procAccess: { type: Array },
      collapses: { type: Array }, // Estado de colapso de los menús
      lang: { type: String },
      selectedMenuCallback: { type: Function },
      menuOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.procAccess = [];
    this.collapses = []; // Inicialización vacía para collapses
    //this.lang = 'en'; // Idioma predeterminadoconnectedCallback() {
      super.connectedCallback();
      // Agrega los eventos y asegura que `this` siempre se mantenga en el contexto del componente
      document.addEventListener('keydown', this._handleKeydown.bind(this));
      document.addEventListener('click', this.closeMenuOnOutsideClick.bind(this));
    }
    
    disconnectedCallback() {
      super.disconnectedCallback();
      // Remueve los eventos para evitar fugas de memoria
      document.removeEventListener('keydown', this._handleKeydown.bind(this));
      document.removeEventListener('click', this.closeMenuOnOutsideClick.bind(this));
    }
    
    closeMenuOnOutsideClick = (event) => {
      const mobileMenu = this.shadowRoot?.querySelector('#mobileMenu');
      if (mobileMenu && !mobileMenu.contains(event.target)) {
        this.closeMenu();
      }
    };
    
    _handleKeydown(e) {
      if (e.key === 'Escape' && this.shadowRoot?.querySelector('#mobileMenu')?.classList.contains('open')) {
        this.closeMenu();
      }
    }
    
    closeMenu() {
      const mobileMenu = this.shadowRoot?.querySelector('#mobileMenu');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
      }
    }
    


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  firstUpdated(){
    this.collapses = this.procAccess.map(proc => ({
      proc: proc.procInstanceName,
      val: false
    }));
    window.addEventListener('sessionUpdated', (e) => {
      if (e.detail.key === 'userSession') {
        this.updateUserSession(); // Actualiza el estado del componente cuando se emite el evento
      }
    });
  }
  updateUserSession() {
    let userSession = JSON.parse(sessionStorage.getItem('userSession'));
    if (userSession && userSession.procedures_list && userSession.procedures_list.procedures) {
      this.procAccess = userSession.procedures_list.procedures;
      this.collapses = this.procAccess.map(p => ({
        proc: p.procInstanceName,
        val: false
      }));
    } else {
      console.error("No se pudo cargar la lista de procedimientos.");
    }
  }

  setCollapses(proc) {
   // console.log("Antes de cambiar collapses:", this.collapses); // Log previo
    this.collapses = this.collapses.map(c =>
      c.proc === proc.procInstanceName ? { ...c, val: !c.val } : c
    );
    //console.log("Después de cambiar collapses:", this.collapses); // Log posterior
  }
  updated(changedProperties) {
    if (changedProperties.has('procAccess')) {
      this.collapses = this.procAccess.map(proc => ({
        proc: proc.procInstanceName,
        val: false,
      }));
      //console.log("Collapses actualizado:", this.collapses); // Para verificar que se inicializa correctamente
    }
  }
  getCollapse(proc) {
    const collapse = this.collapses.find(c => c.proc === proc.procInstanceName);
  //  console.log("Estado de collapse para", proc.procInstanceName, collapse);
    return collapse ? collapse.val : false;
  }

  // Usa la función pasada para manejar la selección del menú
  _handleMenuClick(option, url) {
    if (this.selectedMenuCallback) {
      option.clickRoute=url
      option.componentToOpen = 'procedures'
      this.selectedMenuCallback(option); // Llama a la función de tr-dashboard-main
    } else {
      console.warn("selectedMenuCallback no está definida");
    }
  }

  //selectedMenu(route) {
  //  window.location.href = route;
  //}

  render() {
    if (this.lang===undefined){this.lang = 'en'}
    return html`
      <div class="menu" style="width:300px;">
        ${this.procAccess.map(proc => html`
          <div class="procedure-item">
            <button style="font-size:18px;" class="operation-button" @click="${() => this.setCollapses(proc)}">
              ${proc["label_" + this.lang]}
            </button>
            <div class="sublist ${this.getCollapse(proc) ? 'open' : ''}">
              ${proc.icons_up ? html`
                <div class="icons">
                  ${proc.icons_up.map(up => html`
                    <md-icon style="--mdc-icon-size:2vw;pointer-events: auto;margin-right:15px;" title="${up["label_" + this.lang]}"
                      @click=${() => this._handleMenuClick(up, `/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${up.lp_frontend_page_name}&viewName=${up.lp_frontend_page_name}`)}>
                      search
                    </md-icon>
                  `)}
                </div>
              ` : nothing}

              ${proc.new_definition.map(def => html`
                <div class="procedure-list-option">
                  <div class="subproc">
                    ${def.icons ? html`
                      ${def.icons.map((subProc, i) => html`
                        <img title="${subProc.sops_passed == false ? this.setCertifiedLabel(def.icons) : null}" 
                             src="/images/${subProc.sops_passed ? subProc.icon_name || `noImage${i}.png` : subProc.icon_name_when_not_certified || `noImage${i}.png`}" 
                             class="submenu" 
                             @click=${() => this._handleMenuClick(def, `/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${subProc.name}`)}>
                      `)}

                      <label title="${this.setCertifiedLabel(def.icons)}" 
                             style="font-size:14px; margin-left: 0.2vw; color: ${this.setCertifiedColor(def.icons)}">
                        ${def["label_" + this.lang]}
                      </label>
                    ` : html`
                      <label title="${def.sops_passed == false ? this.setCertifiedLabel([def]) : null}" 
                          class="submenu ${def.sops_passed == false ? 'sops_not_passed' : 'sops_passed'}"                             
                             @click=${() => this._handleMenuClick(def, `/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${def.lp_frontend_page_name}&filterName=${def.name}`)}>
                        ${def["label_" + this.lang]}
                      </label>
                    `}
                  </div>
                </div>
              `)}

              ${proc.icons_down ? html`
                <div class="icons">
                  ${proc.icons_down.map(down => html`
                    <md-icon style="--mdc-icon-size:2vw;pointer-events: auto;margin-right:15px;" title="${down["label_" + this.lang]}"
                      @click=${() => this._handleMenuClick(`/dashboard/procedures?procName=${proc.procInstanceName}&viewName=${down.lp_frontend_page_name}`)}>
                      search
                    </md-icon>
                  `)}
                </div>
              ` : nothing}

            </div>
          </div>
        `)}
      </div>
    `;
  }

  setCertifiedLabel(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false);
    return nonCertified.length ? 'Pending SOP certifications' : null;
  }

  setCertifiedColor(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false);
    return nonCertified.length ? 'red' : '#43657c';
  }

  setCertifiedPointer(icons) {
    let nonCertified = icons.filter(i => i.sops_passed == false);
    return nonCertified.length ? "" : "pointer-events: none;";
  }
}

customElements.define('procedures-menu', ProceduresMenu);
