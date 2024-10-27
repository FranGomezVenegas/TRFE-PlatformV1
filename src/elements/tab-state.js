import { LitElement, html, css } from 'lit';
import { navigator } from 'lit-element-router';
import '@material/web/iconbutton/icon-button.js';

export class TabState extends navigator(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      .tabWrap {
        display: flex;
        align-items: center;
        position: relative;
      }
      .tabContainer {
        display: flex;
        overflow: hidden;
        flex-grow: 1;
      }
      .tabItem {
        display: inline-flex;
        align-items: center;
        background-color: #85bff5; /* Color de las pestañas inactivas */
        padding: 4px 8px;
        border-radius: 5px;
        margin-right: 5px;
        font-size: 12px;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        position: relative;
        height: 30px; /* Ajuste de altura */
      }
      .tabItem.active {
        background-color: #2196f3; /* Color de la pestaña activa */
        color: white;
      }

      .tabItem md-icon-button {
        --mdc-icon-button-size: 20px;
        margin-left: 5px;
      }
      .tabItem md-icon {
        --mdc-icon-button-size: 20px;
        margin-left: 5px;
        color: white;
        
      }        
      .tabItem:hover {
        background-color: #67abeb; /* Efecto hover para pestañas inactivas */
      }
      .navButtons {
        display: flex;
        align-items: center;
      }
      .hiddenTabsButton {
        margin-left: auto;
      }
      @media (max-width: 600px) {
        .tabItem {
          font-size: 10px;
        }
      }
      .tabLabel {
        padding-right: 20px; /* Espacio para el botón cerrar */
      }

      .closeButton {
        position: absolute;
        top: -10px;
        right: -8px;
        --mdc-icon-button-size: 16px; /* Tamaño pequeño para el botón */
        color: red;
      }        
    `;
  }
  static get properties() {
    return {
      tabs: { type: Array },
      currentTab: { type: String },
      hiddenTabs: { type: Array },
      lang: { type: String },
    };
  }
  constructor() {
    super();
    this.tabs = [];
    this.currentTab = '';
    this.hiddenTabs = [];
    
  }

  render() {
    if (this.lang===undefined){this.lang="en"}
    return html`
      <div class="tabWrap">
        <md-icon-button icon="navigate_before" @click=${this.prevTab}><md-icon>save</md-icon></md-icon-button>
        <div class="tabContainer">
          ${this.tabs.map((tab, index) => html`
            <div 
              class="tabItem ${this.currentTab === tab.route ? 'active' : ''}" 
              data-route=${tab.route}  
              @click=${this._handleTabClick}
            >
              <span class="tabLabel">${tab["tabLabel_"+this.lang]}</span>
              <md-icon-button 
                class="closeButton" 
                icon="close" 
                @click=${(e) => this.removeTab(e, index)}><md-icon>close</md-icon>
              </md-icon-button>
            </div>
          `)}
        </div>
        <md-icon-button icon="navigate_next" @click=${this.nextTab}></md-icon-button>
        <md-icon-button icon="more_vert" @click=${this.showHiddenTabsMenu} class="hiddenTabsButton"></md-icon-button>
        <md-icon-button icon="save" @click=${this.saveTabs}></md-icon-button>
      </div>
    `;
  }
  
  _handleTabClick(event) {
    const route = event.currentTarget.getAttribute('data-route');  // Obtén el valor del atributo data-route
    this.switchTab(route);  // Llama a switchTab con el route correcto
  }

  firstUpdated() {
    super.firstUpdated();
    this.updateScrollState();
  }

  switchTab(route) {
    this.currentTab = route;
    this.navigate(route);  // Navega a la ruta de la pestaña seleccionada
  
    sessionStorage.setItem('activeTab', route);

    // Emite el evento para cambiar el contenido en TrDashboard
    this.dispatchEvent(new CustomEvent('tab-changed', {
      detail: { route: this.currentTab },
      bubbles: true,  // Asegura que el evento se propague hacia arriba
      composed: true
    }));
  
    this.updateActiveTab();  // Actualizar el estado visual de la pestaña
    this.requestUpdate();
  }
  
  

  activateTab(route) {
    this.currentTab = route;
    this.navigate(route);
    this.updateActiveTab();
    this.requestUpdate();
  }
  
  updateActiveTab() {
    // Marcar visualmente la pestaña activa
    this.shadowRoot.querySelectorAll('.tabItem').forEach(tab => {
      const tabRoute = tab.getAttribute('data-route');
      if (tabRoute === this.currentTab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  

  // Control de desplazamiento entre pestañas
  prevTab() {
    this.scrollTabs(-200);
  }

  nextTab() {
    this.scrollTabs(200);
  }

  scrollTabs(amount) {
    const tabContainer = this.shadowRoot.querySelector('.tabContainer');
    tabContainer.scrollLeft += amount;
    this.updateScrollState();
  }

  updateScrollState() {
    const tabContainer = this.shadowRoot.querySelector('.tabContainer');
    const maxScrollLeft = tabContainer.scrollWidth - tabContainer.clientWidth;

    // Mostrar u ocultar botones de desplazamiento según la posición del scroll
    this.prevVisible = tabContainer.scrollLeft > 0;
    this.nextVisible = tabContainer.scrollLeft < maxScrollLeft;
  }

  // Mostrar pestañas ocultas en un menú desplegable
  showHiddenTabsMenu() {
    this.hiddenTabs = this.tabs.filter(tab => {
      // Lógica para determinar qué pestañas están ocultas (fuera de pantalla)
      return true; // Placeholder
    });
    // Lógica para mostrar menú con las pestañas ocultas
  }

  // Eliminar pestaña
  removeTab(e, index) {
    e.stopPropagation(); // Evita que el clic en cerrar también cambie de pestaña
    this.tabs = [...this.tabs.slice(0, index), ...this.tabs.slice(index + 1)];    
    sessionStorage.setItem('openTabs', JSON.stringify(this.tabs));
    this.requestUpdate();
  }

  // Guardar las pestañas en el almacenamiento o backend
  saveTabs() {
    // Lógica para guardar el estado actual de las pestañas
    console.log('Tabs saved:', this.tabs);
  }

}customElements.define('tab-state', TabState);
