import { html, css } from 'lit';

import { CommonCore } from '@trazit/common-core';
import { UserCertificationsStyles } from './user-certifications-styles.js';
import { UserCertificationsTemplate } from './user-certifications-template.js';
import '@material/web/icon/icon.js';
import { ExportTableToCsv } from './exportTableToCsv';
import { PrintableTable } from './printableTable';
import { MdFilledIconButtonStyles } from './md3-buttons-styles';

export class UserCertifications extends ExportTableToCsv(PrintableTable(CommonCore)) {
  static get styles() {
    return [UserCertificationsStyles, // Mantiene los estilos existentes
      css`
      ${MdFilledIconButtonStyles}
      
      `
    ];
  }

  static get properties() {
    return {
      docs: { type: Array },
      filterDocs: { type: Array },
      modules: { type: Array },
      filteredApis: { type: Array },
      apis: { type: Array },
      selectedApis: { type: Array },
      selectedTxts: { type: Array },
      storybook: { type: Boolean },
      visibleEndpoints: { type: Object }, // Para la visibilidad de cada endpoint
      areAllEndpointsVisible: { type: Boolean }, // Para el estado de todos los endpoints

      config: { type: Object }, 

      lang: {type: String},

      filterData: {type: String},
      sops: { type: Array },
      analytics: { type: Array },
      myPendingCertifApprovals: { type: Array},
      certSet: { type: Array },
      fieldsToDisplay: { type: Array },
      columnsForSops: { type: Array },
      allSearchFields: { type: Array },
      columnsactiveSearchFieldsForSops: { type: Array }      
    };
  }

  constructor() {
    super();
    this.docs = [];
    this.filterDocs = [];
    this.modules = [];
    this.filteredApis = [];
    this.apis = [];
    this.selectedApis = [];
    this.selectedTxts = [];
    this.visibleEndpoints = new Set(); // Inicializa el Set
    this.areAllEndpointsVisible = false; // Inicializa el estado de visibilidad
    alert('constructor de user-certifications')
    this.config = { theme: 'trazit', darkMode: false };

    this.sops = [];
    this.analytics = [];
    this.myPendingCertifApprovals = [];
    this.certSet = [];
    this.allSearchFields = ['sop_name', 'procedure', 'light', 'status', 'brief_summary', 'author'];
    this.activeSearchFields = [...this.allSearchFields]; // Por defecto busca en todos los campos    
    this.columns =[]
    this.columnsForSops=[
      {
        "name":"procedure",
        "label_en":"Procedure",
        "label_es": "Proceso"
      },
      {
        "name":"method_name",
        "label_en":"Name",
        "label_es": "Nombre"
      },
      {
        "name":"sop_name",
        "label_en":"Name",
        "label_es": "Nombre"
      },
      {
        "name":"assigned_on",
        "label_en":"Assigned on",
        "label_es": "F. Asignación"
      },
      {
        "name":"author",
        "label_en":"Author",
        "label_es": "Autor"
      },
      {
        "name":"brief_summary",
        "label_en":"Summary",
        "label_es": "Resumen"        
      },
      {
        "name":"status",
        "label_en":"My certification status",
        "label_es": "Estado de mi certificación",
        "hide": true     
      } 
                 
    ]    
  }


  firstUpdated() {
    super.firstUpdated();
    console.log('firstUpdated ejecutado');
    this.getContent()
    // Seleccionar todos los chips y aplicar el color de fondo
    // const chips = this.shadowRoot.querySelectorAll('md-filter-chip');
    // chips.forEach(chip => {
    //   const container = chip.shadowRoot.querySelector('.md-chip');
    //   if (container) {
    //     container.style.backgroundColor = '#1473e614';
    //     container.style.color = '#000';
    //   }
    // });
  }  
  updated(updates) {
    super.updated(updates)
    if (updates.has('filterData') && this.filterData) {
      this.getContent()
    }
  }  
  getContent(){
    let userSession = JSON.parse(sessionStorage.getItem("userSession"))
    console.log('getContent', userSession)
    this.sops = []
    if (userSession!==undefined&&userSession.all_my_sops!=undefined){
      this.sops = userSession.all_my_sops.length ? userSession.all_my_sops[0].my_sops : this.sops
    }
    this.analytics = []
    if (userSession!==undefined&&userSession.all_my_analysis_methods!=undefined){
      this.analytics = userSession.all_my_analysis_methods.length ? userSession.all_my_analysis_methods[0].my_analysis_method_certifications : this.analytics
    }
    if (userSession.all_my_pending_certif_approvals!==undefined&&userSession.all_my_pending_certif_approvals.num_objects>0){
      this.myPendingCertifApprovals = userSession.all_my_pending_certif_approvals.num_objects>0 ? userSession.all_my_pending_certif_approvals.objects : this.myPendingCertifApprovals
    }    
    
    if (this.filterData===undefined){return}
    if (this.filterData.toLowerCase()==="sop"){
      this.docs=this.sops
      this.columns=this.columnsForSops
    }
    if (this.filterData.toLowerCase()==="psop"){
      this.docs=this.sops.filter(s => s.status == "NOT_PASS")
      this.columns=this.columnsForSops
    }
    if (this.filterData.toLowerCase()==="analyticmethods"){
      this.docs=this.analytics
      this.columns=this.columnsForSops
    }    
    if (this.filterData.toLowerCase()==="panalyticmethods"){
      this.docs=this.analytics.filter(s => s.status == "NOT_PASS")
      this.columns=this.columnsForSops
    }
    if (this.filterData.toLowerCase()==="mypendingcertificationapprovals"){
      this.docs=this.myPendingCertifApprovals
      this.columns=this.columnsForSops
    }
    this.filterDocs=this.docs
    console.log('sops', this.sops, 'analytics', this.analytics, 'myPendingCertifApprovals', this.myPendingCertifApprovals)
    this.requestUpdate()
  }  
  applyTheme(theme) {
    // Aquí puedes aplicar la lógica para cambiar estilos según el tema
    // Por ejemplo, podrías cambiar clases o aplicar estilos CSS directamente
    if (theme === 'cliente1') {
      this.style.setProperty('--button-color', '#ff5722');  // Ejemplo de cambio de estilo
    } else {
      this.style.setProperty('--button-color', '#148cfa');  // Estilo por defecto
    }
  }

  render() {
    if (this.lang===undefined){this.lang="en"}
    return UserCertificationsTemplate(this);
  }


  async getLocalVariables() {
    if (this.pLogin===null){
      let localVariables={}
      localVariables.backendUrl=undefined
      localVariables.endpointsDocApiUrl=undefined
      return localVariables
    }
    try {
      const response = await fetch("/config.json");
      if (!response.ok) {
        let localVariables={}
        localVariables.backendUrl=undefined
        localVariables.endpointsDocApiUrl=undefined
        return localVariables
        //throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const localVariables = await response.json();
      console.log(localVariables);
      return localVariables;
    } catch (error) {
      console.error("Error fetching config:", error);
      alert(`Failed to fetch configuration: ${error.message}`);
      let localVariables={}
      localVariables.backendUrl=undefined
      localVariables.endpointsDocApiUrl=undefined
      return localVariables
    }
  }
  
  async xfirstUpdated() {
    if (this.config) {
      this.applyTheme(this.config.theme);
    }
    const localVariables = await this.getLocalVariables();
    if (localVariables) {
      this.xcallAPI(localVariables);
    } else {
      console.error("No se pudieron cargar las variables locales");
    }
  }

  async xcallAPI(localVariables) {
    //return
    if (this.config===undefined&&localVariables===undefined){return}
    if (localVariables===undefined){
      localVariables={}
      localVariables.backendUrl=''
      localVariables.endpointsDocApiUrl=''
    }
    let bckendUrl =
    this.config!==undefined&&this.config.backendUrl !== undefined
        ? this.config.backendUrl
        : localVariables.backendUrl;
    let endpUrl =
    this.config!==undefined&&this.config.endpointsDocApiUrl !== undefined
        ? this.config.endpointsDocApiUrl
        : localVariables.endpointsDocApiUrl;
  
    try {
      const j = await this.fetchApi(
        bckendUrl +
          endpUrl +
          '?' +
          new URLSearchParams({
            actionName: "GET_DOC_ENDPOINTS",
            apiName: "ALL",
            finalToken: JSON.parse(sessionStorage.getItem("userSession"))
              .finalToken,
          }),
        false
      );
      this.docs = j;
  
      // Rellenar módulos sin duplicados
      let modules = this.docs.reduce((acc, curr) => {
        const { module_pretty_name } = curr; // Asumiendo que `module_pretty_name` es la clave que contiene el nombre del módulo
        if (module_pretty_name && !acc.includes(module_pretty_name)) {
          acc.push(module_pretty_name);
        }
        return acc;
      }, []);
      this.modules = modules;
  
      // Filtrar APIs sin duplicados y asociadas al módulo actual
      let apis = this.docs.reduce((acc, curr) => {
        const { api_name, api_url, module_pretty_name } = curr;
  
        // Filtrar por módulos
        if (this.currentModule && !module_pretty_name.includes(this.currentModule)) {
          return acc;
        }
  
        const existingObj = acc.find(
          (obj) => obj.api_name === api_name && obj.api_url === api_url
        );
  
        if (!existingObj) {
          acc.push({ api_name, api_url });
        }
  
        return acc;
      }, []);
  
      // Añadir la opción 'All'
      let Allarr = { api_name: "All", api_url: "All" };
      apis.unshift(Allarr);
      this.apis = apis;
  
      // Filtrar los endpoints de acuerdo al módulo seleccionado
      this.filterDocs = this.docs.filter((doc) =>
        !this.currentModule || doc.module_pretty_name.includes(this.currentModule)
      );
  
    } catch (error) {
      //console.error("Error en la llamada a la API:", error);
    }
  }
  searchObjects(e) {
    this.searchTerm = e.target.value.toLowerCase().trim(); // Guardamos el término de búsqueda, eliminando espacios innecesarios
    const searchTermRegex = this.searchTerm ? new RegExp(`(${this.searchTerm})`, 'gi') : null;
  
    // Filtrar los documentos solo en los campos seleccionados
    this.filterDocs = this.docs.filter(doc => {
      // Verificamos si al menos un campo seleccionado coincide con el término de búsqueda
      const matches = this.columns.some(field => 
        // Solo considerar los campos que están en activeSearchFields (los seleccionados)
        this.activeSearchFields.includes(field.name) && doc[field.name] && doc[field.name].toLowerCase().includes(this.searchTerm)
      );
  
      return matches; // Si al menos un campo seleccionado coincide, mantenemos el documento
    }).map(doc => {
      // Si el documento pasa el filtro, aplicamos el resaltado solo en los campos seleccionados
      const highlightedDoc = { ...doc }; // Hacemos una copia del objeto original para evitar mutaciones
  
      if (Array.isArray(this.columns) && this.columns.length > 0) {
        this.columns.forEach(field => {
          // Solo aplicar el resaltado en los campos seleccionados
          if (this.activeSearchFields.includes(field.name) && doc[field.name] !== undefined && searchTermRegex) {
            // Aplicar resaltado en los campos coincidentes
            highlightedDoc[field.name] = doc[field.name].replace(searchTermRegex, match => `<span class="highlighted">${match}</span>`);
          }
        });
      }
  
      return highlightedDoc; // Devolvemos el documento con el resaltado aplicado
    });
  
    this.requestUpdate();
  }

  _toggleSearchField(field) {
    if (this.activeSearchFields.includes(field)) {
      this.activeSearchFields = this.activeSearchFields.filter(f => f !== field);
    } else {
      this.activeSearchFields = [...this.activeSearchFields, field];
    }
    
    // Vuelve a ejecutar la búsqueda usando el valor actual del campo de búsqueda
    this.searchObjects({ target: { value: this.searchTerm || '' } });
    
    this.requestUpdate();
  }
  
  
  _selectAllFields() {
    // Si ya están seleccionados todos, los desmarcamos. Si no, los seleccionamos todos.
    if (this.activeSearchFields.length === this.allSearchFields.length) {
      this.activeSearchFields = [];
    } else {
      this.activeSearchFields = [...this.allSearchFields];
    }
  
    // Vuelve a ejecutar la búsqueda usando el valor actual del campo de búsqueda
    this.searchObjects({ target: { value: this.searchTerm || '' } });
  
    this.requestUpdate();
  }
  
  
}customElements.define('user-certifications', UserCertifications);
