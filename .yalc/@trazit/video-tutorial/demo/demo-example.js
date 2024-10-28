import { LitElement, html, css } from 'lit';
import { getUserSession } from '@trazit/platform-login';
import '@trazit/platform-login/platform-login';
import '../src/video-main';
import '@trazit/tr-styling/src/tr-styling';

class DemoExample extends LitElement {
  static get styles() {
    return css`
        div[hidden] {
          display: none;
        }
      `
  }

  static get properties() {
    return {
      auth: { type: Boolean },
      currentTheme: { type: String },
      flag: { type: String },
      config: {type: Object}
    }
  }

  constructor() {
    super();
    this.config={}
    this.auth = false;
    this.flag = "es";
    this.currentTheme = 'trazit';
  }

  render() {
    console.log(this.config)
    return html`
      <platform-login @authorized=${e=>{this.auth=e.target.auth;this.vTutor.config=this.pLogin.config}}></platform-login>
      <div ?hidden="${!this.auth}">

        <h1>Hi ${this.getUser()}, you are authorized</h1>
        <div style="display:flex;">
          <button @click=${this.changeLang}><img .src="/images/${this.flag}.png" style="width:30px"></button><br><br>
          <button @click=${()=>this.pLogin.logout()}>Logout</button>
        </div>
        <br><br>
        <video-tutorial .config="${this.config}"></video-tutorial><br>
      </div>
    `;
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
  get pLogin() {
    return this.shadowRoot.querySelector("platform-login")
  }

  get vTutor() {
    return this.shadowRoot.querySelector("video-tutorial")
  }

  /**
   * Lifecycle called after DOM updated on the first time
   * Pulling the app config and waiting for the sts state
   */
  firstUpdated() {
    fetch("./config.json")
      .then(response => response.json())
      .then(config => {
        this.pLogin.config = config;
        this.config=config;
        console.log(this.config)
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

  getUser() {
    if (this.auth) {
      let session = getUserSession()
      return session.header_info.first_name +" "+ session.header_info.last_name +"("+ session.userRole +")"
    }
  }

  changeLang() {
    this.flag = this.vTutor.changeLang()
  }
}
customElements.define('demo-example', DemoExample);
