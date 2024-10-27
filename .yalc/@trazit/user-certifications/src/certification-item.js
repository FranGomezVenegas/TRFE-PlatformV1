import { LitElement, html, css, nothing } from 'lit';
import '@material/web/icon/icon.js'; // MD3 icon
import '@material/web/iconbutton/icon-button.js'; // MD3 icon button
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export class CertificationItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 10px;
      }
      :host([hidden]) {
        display: none;
      }
  .highlighted {
    background-color: yellow; /* Fondo de resaltado */
    padding: 0 3px;
    border-radius: 3px;
    transition: transform 0.2s ease-in-out;
  }

  .highlighted:hover {
    transform: scale(1.2); /* Efecto lupa cuando el usuario pasa el ratón */
    background-color: orange; /* Cambia el color al hacer hover */
  }
  .dossier-card {
    position: relative;
    background-color: rgb(46 144 234 / 20%); /* Fondo base beige */
    background-image: 
      radial-gradient(circle at 30% 30%, rgba(200, 180, 150, 0.2), transparent 70%),
      radial-gradient(circle at 70% 60%, rgba(200, 180, 150, 0.2), transparent 80%),
      radial-gradient(circle at 80% 40%, rgba(200, 180, 150, 0.1), transparent 80%),
      linear-gradient(135deg, rgba(0,0,0,0.05) 25%, transparent 25%),
      linear-gradient(225deg, rgba(0,0,0,0.05) 25%, transparent 25%);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 100%;
    max-width: 300px; /* Tamaño máximo para desktop */
    font-family: Arial, sans-serif;
    line-height: 1.5;
    margin: 20px auto;
    background-size: cover;
  }

  .dossier-card::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 20px;
    width: 80px;
    height: 30px;
    background-color: #7db6e2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  md-icon-button {
    position: absolute;
    top: 10px;
    right: 60px;
  }
  .dossier-card h3 {
    margin: 0 0 10px 0;
    font-size: 16px;
  }

  .dossier-card b {
    color: #333;
  }

  .dossier-card p {
    margin: 5px 0;
    color: #555;
  }

  .status-icon {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .status-icon md-icon {
    margin-left: 5px;
    color: red;
  }
  .icon-top-right {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
  }
  /* Responsive adjustments */
  @media (max-width: 460px) {
    .dossier-card {
      max-width: 100%;
      padding: 10px;
    }
  }

    `;
  }

  static get properties() {
    return {
      cert: { type: Object },
      divHeight: { type: String },
      lang: { type: String },
      fieldsToDisplay: { type: Array},
      searchTerm: { type: String } 
    };
  }

  constructor() {
    super();
    this.cert = {};
    this.divHeight = "";

  }

  render() {
    if (this.lang===undefined){this.lang="en"}
    return html`      
      <div class="dossier-card">
        <img src="/images/LOGO_azul_10_SEG_LOOP.gif" alt="Icon" class="icon-top-right">
        <md-icon-button icon="picture_as_pdf" 
          @click=${()=>window.open(this.cert.file_link!==undefined?this.cert.file_link:this.cert.report_url, '_blank').focus()} 
          ?disabled=${!this.cert.file_link}>attachment<md-icon></md-icon>
        </md-icon-button>
        ${this.fieldsToDisplay.map(
          (curFld, index) =>
            html`
              <div>
                ${this.cert[curFld.name] === undefined || (this.cert[curFld.name] !== undefined && curFld.hide !== undefined && curFld.hide === true)
                  ? nothing
                  : html`<b>${curFld["label_" + this.lang]}: </b>${unsafeHTML(this._highlightMatch(this.cert[curFld.name]))}`
                }
              </div>
            `
        )}      
        ${this.filterData == 'myPendingCertificationApprovals' ? html`
          <div><b>User: </b>${this.cert.user_name}</div>` : html`${this.filterData}`}
        
        <div class="layout horizontal center">
          <span><b>My Certification Status: </span>
          <md-icon style="color:${this.cert.status=="PASS"?'green':'red'}">
            ${this.cert.status=="PASS"?'bookmark':'warning'}
          </md-icon>
        </div>
        
        <div>
          ${this.cert.certification_level && this.cert.certification_level.action_visible ? 
            html`${this.cert.certification_level.action_enabled ?
              html`<md-icon-button title=${this.cert.certification_level["label_"+this.lang]} icon="replay" 
                @click=${e=>{e.target.disabled=true;this.dispatchEvent(new CustomEvent('mark-complete', {
                detail: this.cert,
                bubbles: true,
                composed: true
              }))}}>
              </md-icon-button>` :
              html`<md-icon-button title=${this.cert.certification_level["label_"+this.lang]} icon="replay" disabled>
              </md-icon-button>`
            }` : null 
          }
        </div>
      </div>
    `;
  }
  _highlightMatch(text) {
    if (!this.searchTerm || this.searchTerm.trim() === "") {
      return text; // Si no hay término de búsqueda válido, mostrar el texto tal como está
    }
  
    const searchTermRegex = new RegExp(`(${this.searchTerm})`, 'gi');
    
    // Crear un contenedor temporal para parsear el texto como HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text; // Convertir el texto en un nodo HTML
  
    // Función recursiva para recorrer todos los nodos de texto y aplicar el resaltado
    function highlightTextNodes(node) {
      node.childNodes.forEach(child => {
        if (child.nodeType === 3) { // Nodo de texto
          const highlightedText = child.textContent.replace(searchTermRegex, match => `<span class="highlighted">${match}</span>`);
          const newNode = document.createElement('span');
          newNode.innerHTML = highlightedText;
          child.replaceWith(...newNode.childNodes); // Reemplazar el nodo de texto original por el nuevo con el resaltado
        } else {
          // Si no es un nodo de texto, llamamos a la función recursivamente
          highlightTextNodes(child);
        }
      });
    }
  
    highlightTextNodes(tempDiv);
  
    return tempDiv.innerHTML; // Devolver el HTML manipulado
  }
  
  _highlightMatchFunciona(text) {
    if (!this.searchTerm || this.searchTerm.trim() === "") {
      return text; // Si no hay término de búsqueda válido, mostrar el texto tal como está
    }
    const searchTermRegex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(searchTermRegex, match => `<span class="highlighted">${match}</span>`);
  }
  
  
}

window.customElements.define('certification-item', CertificationItem);
