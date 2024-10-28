import { html, css, LitElement } from 'lit';
import { dialogManager } from './services/DialogManager.js';
import './components/TrDialog.js'; // Importamos el componente TrDialog ajustado
import { ProceduresModel } from './ProceduresModel';

export class TrProcedures extends LitElement {
  static properties = {
    procName: { type: String },
    viewModelFromProcModel: { type: Object },
    viewName: { type: String },
    isReady: { type: Boolean },
    sampleState: { type: Object },
    masterData: { type: Object }
  };

  constructor() {
    super();
    this.procName = '';
    this.viewName = '';
    this.masterData = {};
    this.isReady = false;
  }

  static styles = css`
    /* Tus estilos aquí */
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadProcedureState();
  }

  loadProcedureState() {
    // Cargar el estado guardado de la vista si existe
    const savedState = sessionStorage.getItem(`${this.procName}-${this.viewName}`);
    if (savedState) {
      const state = JSON.parse(savedState);
      this.viewModelFromProcModel = state.viewModel;
      this.masterData = state.masterData;
    } else {
      this.resetView();
    }
  }

  saveProcedureState() {
    // Guardar el estado actual de la vista
    const state = {
      viewModel: this.viewModelFromProcModel,
      masterData: this.masterData
    };
    sessionStorage.setItem(`${this.procName}-${this.viewName}`, JSON.stringify(state));
  }

  resetView() {
    const findProc = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures.find(m => m.procInstanceName === this.procName);
    if (!findProc) {
      alert(`Procedure ${this.procName} not found`);
      return;
    }
    this.masterData = findProc.master_data || {};
    this.viewModelFromProcModel = ProceduresModel[this.procName]?.[this.viewName] || null;

    if (!this.viewModelFromProcModel) {
      alert(`View ${this.viewName} not found for procedure ${this.procName}`);
      return;
    }

    // Guardar el estado actualizado
    this.saveProcedureState();
    this.isReady = true;
  }

  showDialog(dialogId, options) {
    dialogManager.openDialog(dialogId, options);
  }

  closeDialog(dialogId) {
    dialogManager.closeDialog(dialogId);
  }

  render() {
    if (!this.isReady) {
      return html`<p>Loading...</p>`;
    }

    return html`
      <div>
        ${this.viewModelFromProcModel?.component === 'SingleView' ? html`
          <single-view .model=${this.viewModelFromProcModel} @someEvent=${this.handleEvent}></single-view>
        ` : html`<p>Component not available</p>`}

        <tr-dialog id="exampleDialog">
          <div slot="content">
            <p>Example dialog content</p>
          </div>
        </tr-dialog>
      </div>
    `;
  }

  handleEvent(event) {
    console.log('Event received:', event);
    // Manejar eventos específicos
  }

  disconnectedCallback() {
    this.saveProcedureState(); // Guardar estado cuando el componente se desconecta
    super.disconnectedCallback();
  }
}

customElements.define('tr-procedures', TrProcedures);
