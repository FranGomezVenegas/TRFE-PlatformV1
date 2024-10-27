import { html, css } from 'lit';
import './certification-item';
import '@material/web/iconbutton/icon-button'
import '@material/web/chips/chip-set';
import '@material/web/chips/filter-chip';


export const UserCertificationsTemplate = (context) => {
  let printable={enable: true, icon:"print", title:{label_en:"Print", label_es: "Imprimir"}}
  
  let downloadable={enable: true, icon:"download", title:{label_en:"Export", label_es: "Exportar"}}
    
  return html`
    ${context.desktop
      ? html`      
          <input style="height: 30px; width: 300px; background-color: #1473e614; font-size:16px;" type="text"
            @input=${context.searchObjects} placeholder="Search in ..."/>
          <div class="chips-container">
            <md-chip-set>
              <md-filter-chip
                label="SOP Name" 
                @click=${() => context._toggleSearchField('sop_name')}
                ?selected=${context.activeSearchFields.includes('sop_name')}
              ></md-filter-chip>
              <md-filter-chip
                label="Procedure"
                @click=${() => context._toggleSearchField('procedure')}
                ?selected=${context.activeSearchFields.includes('procedure')}
              ></md-filter-chip>
              <md-filter-chip
                label="Light"
                @click=${() => context._toggleSearchField('light')}
                ?selected=${context.activeSearchFields.includes('light')}
              ></md-filter-chip>
              <md-filter-chip
                label="Status"
                @click=${() => context._toggleSearchField('status')}
                ?selected=${context.activeSearchFields.includes('status')}
              ></md-filter-chip>
              <md-filter-chip
                label="Summary"
                @click=${() => context._toggleSearchField('brief_summary')}
                ?selected=${context.activeSearchFields.includes('brief_summary')}
              ></md-filter-chip>
              <md-filter-chip
                label="Author"
                @click=${() => context._toggleSearchField('author')}
                ?selected=${context.activeSearchFields.includes('author')}
              ></md-filter-chip>
              <md-filter-chip
                label="All"
                @click=${() => context._selectAllFields()}
                ?selected=${context.activeSearchFields.length === context.allSearchFields.length}
              ></md-filter-chip>
            </md-chip-set>
          </div>
          <md-filled-icon-button 
              ${printable===undefined||printable.class===undefined?'':html`class="${printable.class}"`}
              icon="${printable.icon}" id="printable" 
              title="${printable.title['label_' + context.lang]}"             
              @click=${() => context.printTable(1, context.lang)}
              style="${printable!==undefined&&printable.style !== undefined ? printable.style : ''}"> <md-icon>print</md-icon>
          </md-filled-icon-button>
        
          <md-filled-icon 
          ${downloadable===undefined||downloadable.class===undefined?'':html`class="${downloadable.class}"`}
              icon="${downloadable.icon}" id="downloadable" 
              title="${downloadable.title['label_' + context.lang]}"             
              @click=${() => context.downloadDataTableToCSV(context, context.docs, context.filterDocs, downloadable)}
              style="${downloadable!==undefined&&downloadable.style !== undefined ? downloadable.style : ''}"> <md-icon>download</md-icon>
          </md-filled-icon>

          <br />
          <div id="mainDiv">          
              ${context.filterDocs.map(
                (d, index) =>
                  html`                      
                    <certification-item .searchTerm=${context.searchTerm} .fieldsToDisplay=${context.columns} .cert=${d}></certification-item>
                  `
              )}
          </div>
        `
      : html`
        <div id="mobile">
          <input style="height: 30px; width: 300px; background-color: #1473e614; font-size:16px;" type="text"
            @input=${context.searchObjects} placeholder="Search in ..."/>
          <div class="chips-container">
            <md-chip-set>
              <md-filter-chip
                label="SOP Name"
                @click=${() => context._toggleSearchField('sop_name')}
                ?selected=${context.activeSearchFields.includes('sop_name')}
              ></md-filter-chip>
              <md-filter-chip
                label="Procedure"
                @click=${() => context._toggleSearchField('procedure')}
                ?selected=${context.activeSearchFields.includes('procedure')}
              ></md-filter-chip>
              <md-filter-chip
                label="Light"
                @click=${() => context._toggleSearchField('light')}
                ?selected=${context.activeSearchFields.includes('light')}
              ></md-filter-chip>
              <md-filter-chip
                label="Status"
                @click=${() => context._toggleSearchField('status')}
                ?selected=${context.activeSearchFields.includes('status')}
              ></md-filter-chip>
              <md-filter-chip
                label="Summary"
                @click=${() => context._toggleSearchField('brief_summary')}
                ?selected=${context.activeSearchFields.includes('brief_summary')}
              ></md-filter-chip>
              <md-filter-chip
                label="Author"
                @click=${() => context._toggleSearchField('author')}
                ?selected=${context.activeSearchFields.includes('author')}
              ></md-filter-chip>
              <md-filter-chip
                label="All"
                @click=${() => context._selectAllFields()}
                ?selected=${context.activeSearchFields.length === context.allSearchFields.length}
              ></md-filter-chip>
            </md-chip-set>
          </div>
          <md-filled-icon-button 
              ${printable===undefined||printable.class===undefined?'':html`class="${printable.class}"`}
              icon="${printable.icon}" id="printable" 
              title="${printable.title['label_' + context.lang]}"             
              @click=${() => context.printTable(1, context.lang)}
              style="${printable!==undefined&&printable.style !== undefined ? printable.style : ''}"> <md-icon>print</md-icon>
          </md-filled-icon-button>
        
          <md-filled-icon 
          ${downloadable===undefined||downloadable.class===undefined?'':html`class="${downloadable.class}"`}
              icon="${downloadable.icon}" id="downloadable" 
              title="${downloadable.title['label_' + context.lang]}"             
              @click=${() => context.downloadDataTableToCSV(context, context.docs, context.filterDocs, downloadable)}
              style="${downloadable!==undefined&&downloadable.style !== undefined ? downloadable.style : ''}"> <md-icon>download</md-icon>
          </md-filled-icon>

          <br />
          <div id="mainDiv">          
              ${context.filterDocs.map(
                (d, index) =>
                  html`                      
                    <certification-item .searchTerm=${context.searchTerm} .fieldsToDisplay=${context.columns} .cert=${d}></certification-item>
                  `
              )}
          </div>
        </div>
      `}
  `;
};
