import { LitElement, html, css } from 'lit';
import { getUserSession } from '@trazit/platform-login';
import '@trazit/platform-login/platform-login';
import '../src/procedures-controller';
import '@trazit/tr-styling/src/tr-styling';

class DemoExample extends LitElement {
  static get styles() {
    return css`
      div[hidden] {
        display: none;
      }
      input {
        background-color: var(--trazit-input-background, blue); /* Fallback to blue */
        color: var(--trazit-input-color, black); /* Fallback to black */
      }          
    `;
  }

  static get properties() {
    return {
      auth: { type: Boolean },
      currentTheme: { type: String },
      flag: { type: String }
    };
  }

  constructor() {
    super();
    this.auth = false;
    this.flag = "es";
    this.currentTheme = 'client1';
  }

  connectedCallback() {
    super.connectedCallback();

    // Verifica si ya existe tr-styling en el documento
    if (!document.querySelector('tr-styling')) {
      const trStyling = document.createElement('tr-styling');
      trStyling.config = { theme: 'trazit' }; // O el tema por defecto
      document.body.appendChild(trStyling);
    }
  }

  applyTheme() {
    let trStyling = document.querySelector('tr-styling');
    if (!trStyling) {
      trStyling = document.createElement('tr-styling');
      document.body.appendChild(trStyling);
    }
    trStyling.config = { theme: this.currentTheme };
  }

  firstUpdated() {
    fetch("/config.json")
      .then(response => response.json())
      .then(config => {
        this.pLogin.config = config;
        if (config.theme) {
          this.currentTheme = config.theme;
          this.applyTheme();
          this.requestUpdate();
        }
      })
      .catch(error => {
        console.error('Error al cargar config.json:', error);
      });
  }

  render() {
    return html`
      <platform-login @authorized=${e => { this.auth = e.target.auth; this.uProfile.config = this.pLogin.config }}></platform-login>
      <div ?hidden="${!this.auth}">
        <h1>Hi ${this.getUser()}, you are authorized</h1>
        <button @click=${this.changeLang}><img .src="/images/${this.flag}.png" style="width:30px"></button><br><br>
        <button @click=${() => this.pLogin.logout()}>Logout</button><br><br>
        <input type="text" value="hola" label="hola">
        <procedures-controller .lang=${this.flag}></procedures-controller><br>
      </div>
    `;
  }

  get pLogin() {
    return this.shadowRoot.querySelector("platform-login");
  }

  get uProfile() {
    return this.shadowRoot.querySelector("user-settings");
  }

  changeLang() {
    this.flag = this.flag === 'en' ? 'es' : 'en';
    this.requestUpdate();
  }

  getUser() {
    if (this.auth) {
      let session = getUserSession();
      return `${session.header_info.first_name} ${session.header_info.last_name} (${session.userRole})`;
    }
    return '';
  }

  changeLan2g() {
    this.flag = this.uProfile.changeLang();
  }
}
customElements.define('demo-example', DemoExample);
