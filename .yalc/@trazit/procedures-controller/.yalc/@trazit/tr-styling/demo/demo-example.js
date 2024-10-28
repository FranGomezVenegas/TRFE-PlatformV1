import { LitElement, html, css } from 'lit';
import '../src/tr-styling.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/textfield/filled-text-field.js';

class DemoExample extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
      .theme-selector {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
      }
      input {
            background-color: var(--trazit-input-background);
            color: var(--trazit-primary-color);
      }
      md-filled-icon-button {
        --md-filled-icon-button-container-color: var(--trazit-button-background);
        --md-filled-icon-button-icon-color: var(--trazit-button-color);
      }            
    `;
  }

  static get properties() {
    return {
      currentTheme: { type: String },
      availableThemes: { type: Array },
    };
  }

  constructor() {
    super();
    this.currentTheme = 'trazit'; // Tema inicial por defecto
    this.availableThemes = [ 'trazit' , 'client1', 'trazit'];
  }

  setTheme(theme) {
    this.currentTheme = theme;
    console.log(this.currentTheme)
    this.requestUpdate(); // Forzar actualización del componente
  }

  render() {
    return html`
      <div class="theme-selector">
        ${this.availableThemes.map(
          theme => html`
            <md-assist-chip
              ?selected="${this.currentTheme === theme}"
              @click="${() => this.setTheme(theme)}"
            >
              ${theme}
            </md-assist-chip>
          `
        )}
      </div>

      <tr-styling .config="${{ theme: this.currentTheme }}">
        <div>
          <md-filled-icon-button><md-icon>favorite</md-icon></md-filled-icon-button>
          <md-filled-icon-button><md-icon>logout</md-icon></md-filled-icon-button>
          <md-filled-text-field label="Enter text"></md-filled-text-field>
          <input type="text" value="hola" label="hola">
        </div>
      </tr-styling>
    `;
  }
}

customElements.define('demo-example', DemoExample);
