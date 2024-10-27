import { LitElement, html } from 'lit';
import { TrazitTheme } from './theme-trazit.js';
import { Client1Theme } from './theme-client1.js';

// Definir un objeto centralizado que contenga los temas
const themes = {
  trazit: {
    variables: TrazitTheme.variables,
  },
  client1: {
    variables: Client1Theme.variables,
  },
};

export class TrStyling extends LitElement {
  createRenderRoot() {
    // Usar el DOM global en lugar del Shadow DOM
    return this;
  }

  static get properties() {
    return {
      config: { type: Object },
    };
  }

  constructor() {
    super();
    this.config = { theme: 'trazit' }; // Tema por defecto inicial
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.config!==undefined&&this.config.theme!==undefined){return}
    // Cargar la configuración del archivo JSON
    fetch('/src/config.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.theme && themes[data.theme]) {
        console.log(data)
        this.config = { theme: data.theme };
      } else {
        console.warn(`Theme '${data.theme}' not found. Using default 'trazit' theme.`);
        this.config = { theme: 'trazit' };
      }
    })
    .catch(error => {
      console.error('Error loading config.json:', error);
    });
  
  }

  updated(changedProperties) {
    if (changedProperties.has('config')) {
      this.applyConfig(this.config);
    }
  }

  applyConfig(config) {
    const theme = config.theme || 'trazit';
    const selectedTheme = themes[theme] || themes['trazit'];
  
    const root = document.documentElement;
  
    // Asegúrate de que se aplica cada variable correctamente
    Object.entries(selectedTheme.variables).forEach(([key, value]) => {
      if (key && value !== undefined) {
        root.style.setProperty(key, value);
        console.log(`Variable ${key} añadida con valor ${value}`);
      } else {
        console.warn(`Variable ${key} no tiene un valor definido.`);
      }
    });
  }
  

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tr-styling', TrStyling);
