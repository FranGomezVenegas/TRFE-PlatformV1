import { LitElement, html, css } from 'lit';
import { Layouts } from '@collaborne/lit-flexbox-literals';
import { navigator } from 'lit-element-router';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import './tab-item';

let tabObj = [
  {
    "lp_frontend_page_name": "Programs",
    "route": "procedures?procName=em-demo-a&viewName=Programs&filterName=Programs",
    "tabLabel_en": "Air (em-demo-a)-Programs",
    "tabLabel_es": "Aire (em-demo-a)-Programas"
  },
  {
    "lp_frontend_page_name": "LogSamples",
    "route": "procedures?procName=em-demo-a&viewName=LogSamples&filterName=SampleLogin",
    "tabLabel_en": "Air (em-demo-a)-Login New Samples",
    "tabLabel_es": "Aire (em-demo-a)-Registrar Nuevas Muestras"
  },
  {
    "lp_frontend_page_name": "ProductionLots",
    "route": "procedures?procName=em-demo-a&viewName=ProductionLots&filterName=SampleLot",
    "tabLabel_en": "Air (em-demo-a)-Production Lots",
    "tabLabel_es": "Aire (em-demo-a)-Lotes en producción"
  },
  {
    "lp_frontend_page_name": "SamplePendingSampling",
    "route": "procedures?procName=em-demo-a&viewName=SamplePendingSampling&filterName=SamplingSMP",
    "tabLabel_en": "Air (em-demo-a)-Samples Sampling",
    "tabLabel_es": "Aire (em-demo-a)-Muestreo de Muestras"
  },
  {
    "lp_frontend_page_name": "SamplePendingSampling",
    "route": "procedures?procName=em-demo-a&viewName=SamplePendingSampling&filterName=SamplingPERS",
    "tabLabel_en": "Air (em-demo-a)-Sampling",
    "tabLabel_es": "Aire (em-demo-a)-Muestreo"
  },
  {
    "lp_frontend_page_name": "SamplePlateReading",
    "route": "procedures?procName=em-demo-a&viewName=SamplePlateReading&filterName=PlateReadingSMP",
    "tabLabel_en": "Air (em-demo-a)-Samples Plate Reading",
    "tabLabel_es": "Aire (em-demo-a)-Lectura de Placas",
  },
  {
    "lp_frontend_page_name": "SamplePlateReading",
    "route": "procedures?procName=em-demo-a&viewName=SamplePlateReading&filterName=PlateReadingPERS",
    "tabLabel_en": "Air (em-demo-a)-Plate Reading",
    "tabLabel_es": "Aire (em-demo-a)-Lectura de Placas",
  },
  {
    "lp_frontend_page_name": "SampleIncubation",
    "route": "procedures?procName=em-demo-a&viewName=SampleIncubation&filterName=active_batches",
    "tabLabel_en": "Air (em-demo-a)-Samples Incubation",
    "tabLabel_es": "Aire (em-demo-a)-Incubation"
  },
  {
    "lp_frontend_page_name": "SampleMicroorganism",
    "route": "procedures?procName=em-demo-a&viewName=SampleMicroorganism&filterName=MicroOrganismSMP",
    "tabLabel_en": "Air (em-demo-a)-Microorganism Identification",
    "tabLabel_es": "Aire (em-demo-a)-Identificación de microorganismos"
  },
  {
    "lp_frontend_page_name": "SampleMicroorganism",
    "route": "procedures?procName=em-demo-a&viewName=SampleMicroorganism&filterName=MicroOrganismPERS",
    "tabLabel_en": "Air (em-demo-a)-Microorganism Identification",
    "tabLabel_es": "Aire (em-demo-a)-Identificación de microorganismos"
  },
  {
    "lp_frontend_page_name": "LogSamples",
    "route": "procedures?procName=proc-deploy&viewName=LogSamples&filterName=SampleLogin",
    "tabLabel_en": "Water (proc-deploy)-Login New Samples",
    "tabLabel_es": "Agua (proc-Deploy)-Registrar Nuevas Muestras"
  },
  {
    "lp_frontend_page_name": "ProductionLots",
    "route": "procedures?procName=proc-deploy&viewName=ProductionLots&filterName=SampleLot",
    "tabLabel_en": "Water (proc-deploy)-Production Lots",
    "tabLabel_es": "Agua (proc-Deploy)-Lotes en producción"
  },
  {
    "lp_frontend_page_name": "SamplePending",
    "route": "procedures?procName=proc-deploy&viewName=SamplePending&filterName=sampling",
    "tabLabel_en": "Water (proc-deploy)-Sampling",
    "tabLabel_es": "Agua (proc-Deploy)-Muestreo"
  },
  {
    "lp_frontend_page_name": "SampleEnterResult",
    "route": "procedures?procName=proc-deploy&viewName=SampleEnterResult&filterName=ER-FQ",
    "tabLabel_en": "Water (proc-deploy)-Sample Chem",
    "tabLabel_es": "Agua (proc-Deploy)-Muestras FQ"
  },
  {
    "lp_frontend_page_name": "SampleEnterResult",
    "route": "procedures?procName=proc-deploy&viewName=SampleEnterResult&filterName=ER-MB",
    "tabLabel_en": "Water (proc-deploy)-Sample MB",
    "tabLabel_es": "Agua (proc-Deploy)-Muestras Micro"
  },
  {
    "lp_frontend_page_name": "ReviewTesting",
    "route": "procedures?procName=proc-deploy&viewName=ReviewTesting&filterName=RT-FQ",
    "tabLabel_en": "Water (proc-deploy)-FQ Review Testing",
    "tabLabel_es": "Agua (proc-Deploy)-Ensayos revisión FQ"
  },
  {
    "lp_frontend_page_name": "ReviewTesting",
    "route": "procedures?procName=proc-deploy&viewName=ReviewTesting&filterName=RT-MB",
    "tabLabel_en": "Water (proc-deploy)-MB Review Testing",
    "tabLabel_es": "Agua (proc-Deploy)-Ensayos revisión MB"
  },
  {
    "lp_frontend_page_name": "ReviewTestingGroup",
    "route": "procedures?procName=proc-deploy&viewName=ReviewTestingGroup&filterName=RTG-FQ",
    "tabLabel_en": "Water (proc-deploy)-FQ Review Testing Group",
    "tabLabel_es": "Agua (proc-Deploy)-Grupo Analítico revisión FQ"
  },
  {
    "lp_frontend_page_name": "ReviewTestingGroup",
    "route": "procedures?procName=proc-deploy&viewName=ReviewTestingGroup&filterName=RTG-MB",
    "tabLabel_en": "Water (proc-deploy)-MB Review Testing Group",
    "tabLabel_es": "Agua (proc-Deploy)-Grupo Ensayos revisión MB"
  },
  {
    "lp_frontend_page_name": "ReviewSample",
    "route": "procedures?procName=proc-deploy&viewName=ReviewSample&filterName=Review",
    "tabLabel_en": "Water (proc-deploy)-Review Samples",
    "tabLabel_es": "Agua (proc-Deploy)-Revisar Muestras"
  },
  {
    "lp_frontend_page_name": "incident-management",
    "route": "incidents",
    "tabName": "incident-management",
    "tabLabel_en": "Incidents",
    "tabLabel_es": "Incidencias",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": false
  },
  {
    "lp_frontend_page_name": "my-sops",
    "route": "certifications?filterData=sop",
    "tabName": "sop-allMySops",
    "tabLabel_en": "All My SOPs",
    "tabLabel_es": "Mis PNTs",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": false
  },
  {
    "lp_frontend_page_name": "my-analysis",
    "route": "certifications?filterData=analytic",
    "tabName": "cert-allMyAnalysis",
    "tabLabel_en": "All My Analysis",
    "tabLabel_es": "Mis PNTs",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": false
  },
  {
    "lp_frontend_page_name": "session-notifications",
    "route": "notifications",
    "tabName": "session-notifications",
    "tabLabel_en": "Notifications",
    "tabLabel_es": "Notificaciones",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": false
  },
  {
    "lp_frontend_page_name": "procedure-management",
    "route": "procedure",
    "tabName": "procedure-management",
    "tabLabel_en": "Procedure Management",
    "tabLabel_es": "Gestión de Proceso",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": true
  },
  {
    "lp_frontend_page_name": "user-profile",
    "route": "user",
    "tabName": "user-profile",
    "tabLabel_en": "User Profile",
    "tabLabel_es": "Perfil de usuario",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": true
  },
  {
    "lp_frontend_page_name": "videotutorial-tab",
    "route": "tutorial",
    "tabName": "videotutorial-tab",
    "tabLabel_en": "Video Tutorial",
    "tabLabel_es": "Tutorial en Video",
    "tabType": "systab",
    "systemTab": true,
    "tabEsignRequired": false,
    "tabConfirmUserRequired": true
  }
]

export class TabState extends navigator(LitElement) {
  static get styles() {
    return [
      Layouts,
      css`
      :host {
        display: block;
      }
      .tabContainer {
        overflow: auto;
      }
      .tabContainer::-webkit-scrollbar {
        display: none;
      }
      .tabContainer > * {
        display: inline-block;
        flex-shrink: 0;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
      }
      mwc-icon-button[hidden] {
        visibility: hidden;
      }
    `];
  }

  render() {
    return html`
      <div class="layout horizontal center">
        <mwc-icon-button icon="navigate_before" @click=${this.prevTab} ?hidden=${!this.prev}></mwc-icon-button>
        <div class="tabContainer layout horizontal flex center">
          <mwc-icon-button icon="save" @click=${this.saveTabs}></mwc-icon-button>
          ${this.tabs.map(t=>
            html`<tab-item .lang=${this.lang} .tab=${t} 
              @tab-rendered=${this.isScroll}
              @tab-change=${this.tabChanged}
              @tab-remove=${this.tabRemoved}></tab-item>`
          )}
        </div>
        <mwc-icon-button icon="navigate_next" @click=${this.nextTab} ?hidden=${!this.next}></mwc-icon-button>
      </div>
    `;
  }

  get tabContainer() {
    return this.shadowRoot.querySelector(".tabContainer")
  }

  prevTab() {
    this.tabContainer.scrollLeft = this.tabContainer.scrollLeft - 200
  }

  nextTab() {
    this.tabContainer.scrollLeft = this.tabContainer.scrollLeft + 200
  }

  isScroll() {
    if (this.tabContainer.offsetWidth < this.tabContainer.scrollWidth) {
      this.next = true
    } else {
      this.next = false
    }
  }

  firstUpdated() {
    super.firstUpdated()
    this.tabContainer.addEventListener('scroll', ()=>{
      if (this.tabContainer.scrollLeft == 0) {
        this.prev = false
      } else {
        this.prev = true
      }
      if (this.tabContainer.offsetWidth + this.tabContainer.scrollLeft == this.tabContainer.scrollWidth) {
        this.next = false
      } else {
        this.next = true
      }
    })
  }

  tabChanged(e) {
    this.currentTab = e.detail.route
    this.navigate("/dashboard/"+ e.detail.route)
  }

  async tabRemoved(e) {
    let currentIdx = this.tabs.findIndex(t => t.route == this.currentTab) // get the current index
    this.tabs = this.tabs.filter(t => t.route != e.detail.route)
    await this.requestUpdate()
    if (e.detail.route != this.currentTab) { // keep on the same route

    } else { // change to the next tab route
      if (currentIdx >= this.tabs.length) { // decrease 1 if current index higher than tabs length
        --currentIdx;
      }
      if (currentIdx > -1) {
        this.navigate("/dashboard/"+ this.tabs[currentIdx].route)
        this.currentTab = this.tabs[currentIdx].route
      } else { // back to default page
        this.navigate("/dashboard")
        this.currentTab = ""
      }
    }
  }

  static get properties() {
    return {
      tabs: { type: Array },
      currentTab: { type: String }, // current selected tab route
      config: { type: Object },
      params: { type: Object }, // route params which is passed from parent element (root app)
      query: { type: Object }, // route query which is passed from parent element (root app)
      lang: { type: String},
      prev: { type: Boolean },
      next: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.prev = false;
    this.next = false;
    this.params = {};
    this.query = {};
    this.tabs = [];
    this.currentTab = "";
    this.config = {};
  }

  updated(updates) {
    // except authenticated users, not allowed to route the sub project pages
    if (updates.has('config')) {
      this.setTabs()
    }
    if (updates.has('params')) {
      this.pushTab()
    }
  }

  pushTab() {
    let tab = tabObj.filter(t => t.route == this.params.menu || t.route == this.params.menu+"?filterData="+ this.query.filterData || t.route == this.params.menu+"?procName="+ this.query.procName +"&viewName="+ this.query.viewName +"&filterName="+ this.query.filterName)
    if (tab.length) {
      let exist = this.tabs.filter(t => t.route == tab[0].route)
      // dont add if found existing one
      if (!exist.length) {
        this.tabs = [
          ...this.tabs,
          tab[0]
        ]
      }
    }
  }

  setTabs() {
    let tabs = JSON.parse(sessionStorage.getItem("userSession")).userTabsOnLogin;
    if (tabs.length && tabs[0].tabLabel_en) {
      // parsing the tab objects and translating to the router navigator name
      tabs.forEach(t => {
        if (t.lp_frontend_page_name == "user-profile") {
          t.route = "user"
        } else if (t.lp_frontend_page_name == "incident-management") {
          t.route = "incidents"
        } else if (t.lp_frontend_page_name == "videotutorial-tab") {
          t.route = "tutorial"
        } else if (t.lp_frontend_page_name == "procedure-management") {
          t.route = "procedure"
        } else if (t.lp_frontend_page_name == "session-notifications") {
          t.route = "notifications"
        } else if (t.lp_frontend_page_name == "my-sops") {
          t.route = "certifications?filterData=sop"
        } else if (t.lp_frontend_page_name == "my-analysis") {
          t.route = "certifications?filterData=analytic"
        }
      })
      this.tabs = tabs
      this.navigate("/dashboard/"+ this.tabs[this.tabs.length-1].route)
      this.currentTab = this.tabs[this.tabs.length-1].route
    }
  }

  saveTabs() {
    let tabsString = this.tabs.map(t => {
      let arr = []
      for (const [k, v] of Object.entries(t)) {
        arr.push(`${k}:${v}`)
      }
      return arr.join("*")
    })
    tabsString = tabsString.join("|")
    this.fetchApi(this.config.backendUrl + this.config.appAuthenticateApiUrl + '?' + new URLSearchParams({
      finalToken: JSON.parse(sessionStorage.getItem("userSession")).finalToken,
      actionName: 'SET_DEFAULT_TABS_ON_LOGIN',
      tabsString: tabsString
    }))
  }

  /**
   * Populating fetch api
   * @param {*} urlParams the url api with params
   * @param {*} log will be logged into notifications or no? default true
   * @param {*} feedback will be show up the user feedback
   */
  fetchApi(urlParams, log=true, feedback=true) {
    this.dispatchEvent(new CustomEvent('set-activity', {bubbles: true, composed: true}))
    return fetch(urlParams).then(async r => {
      if (r.status == 200) {
        return r.json()
      } else {
        let err = await r.json()
        throw err
      }
    }).then(j => {
      this.dispatchEvent(new CustomEvent('success', {
        detail: {...j, log: log},
        bubbles: true,
        composed: true
      }))
      return j
    }).catch(e => {
      this.dispatchEvent(new CustomEvent("error", {
        detail: {...e, log: true},
        bubbles: true,
        composed: true
      }))
      return
    })
  }
}
customElements.define('tab-state', TabState);