import { LitElement, html, css } from 'lit';
import { Layouts } from '@collaborne/lit-flexbox-literals';
import { navigator } from 'lit-element-router';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import './tab-item';

let tabObj = [
  {
    "lp_frontend_page_name": "sample-pending-sampling",
    "route": "sample-pending-sampling?name=samples",
    "tabLabel_en": "Air (em-demo-a)-Samples Sampling",
    "tabLabel_es": "Aire (em-demo-a)-Muestreo de Muestras"
  },
  {
    "lp_frontend_page_name": "sample-pending-sampling",
    "route": "sample-pending-sampling?name=personel",
    "tabLabel_en": "Air (em-demo-a)-Sampling",
    "tabLabel_es": "Aire (em-demo-a)-Muestreo"
  },
  {
    "lp_frontend_page_name": "sample-pending-sampling",
    "route": "sample-pending-sampling?name=sampling",
    "tabLabel_en": "Water (proc-deploy)-Sampling",
    "tabLabel_es": "Agua (proc-Deploy)-Muestreo"
  },
  {
    "lp_frontend_page_name": "sample-plate-reading",
    "route": "sample-plate-reading?name=samples",
    "tabLabel_en": "Air (em-demo-a)-Samples Plate Reading",
    "tabLabel_es": "Aire (em-demo-a)-Lectura de Placas",
  },
  {
    "lp_frontend_page_name": "sample-plate-reading",
    "route": "sample-plate-reading?name=personel",
    "tabLabel_en": "Air (em-demo-a)-Plate Reading",
    "tabLabel_es": "Aire (em-demo-a)-Lectura de Placas",
  },
  {
    "lp_frontend_page_name": "sample-enter-result",
    "route": "sample-enter-result?name=fq",
    "tabLabel_en": "Water (proc-deploy)-Sample Chem",
    "tabLabel_es": "Agua (proc-Deploy)-Muestras FQ"
  },
  {
    "lp_frontend_page_name": "sample-enter-result",
    "route": "sample-enter-result?name=fq",
    "tabLabel_en": "Water (proc-deploy)-Sample MB",
    "tabLabel_es": "Agua (proc-Deploy)-Muestras Micro"
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
        margin: 0 auto;
      }
      mwc-button {
        --mdc-typography-button-text-transform: none;
      }
    `];
  }

  render() {
    return html`
      <div class="layout horizontal center flex wrap">
        <mwc-icon-button icon="save" @click=${this.saveTabs}></mwc-icon-button>
        ${this.tabs.map(t=>
          html`<tab-item .lang=${this.lang} .tab=${t} 
            @tab-change=${this.tabChanged}
            @tab-remove=${this.tabRemoved}></tab-item>`
        )}
      </div>
    `;
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
      lang: { type: String}
    };
  }

  constructor() {
    super();
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
    let tab = tabObj.filter(t => t.route == this.params.menu || t.route == this.params.menu+"?filterData="+ this.query.filterData || t.route == this.params.menu+"?name="+ this.query.name)
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