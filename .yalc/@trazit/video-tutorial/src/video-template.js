import { html } from 'lit';
import '@material/web/select/filled-select.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/iconbutton/icon-button'
import '@material/web/chips/chip-set';
import '@material/web/chips/filter-chip';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
export const template = (context, categories, searchVideos, lang, desktop, catChanged, searchChanged, stopOthers, notAvail) => html`
  ${desktop ?
    html`
      <div class="split-view">
<!--        <div class="top-split">
          <md-filled-select label="Categories" @change=${catChanged}>
            <option value="-1">All categories</option>
            ${categories.map(c =>
              html`<option value=${c.id}>${c.category}</option>`
            )}
          </md-filled-select> -->
            <div id="seach-and-chips" style="display:flex;">
            <md-filled-text-field
              label="Search Video"
              @input=${searchChanged}>
            </md-filled-text-field>
            <div class="chips-container">
            ${context.columns.map(curCol =>
              html`
                <md-filter-chip
                  label="${curCol["label_"+lang]}"
                  @click=${() => context._toggleSearchField(curCol.name)}
                  ?selected=${context.activeSearchFields.includes(curCol.name)}
                ></md-filter-chip>              
              `
            )}
             <!-- <md-chip-set>
                <md-filter-chip
                  label="Title"
                  @click=${() => context._toggleSearchField('title_'+lang)}
                  ?selected=${context.activeSearchFields.includes('title_'+lang)}
                ></md-filter-chip>
                <md-filter-chip
                  label="Summary"
                  @click=${() => context._toggleSearchField('summary_'+lang)}
                  ?selected=${context.activeSearchFields.includes('summary_'+lang)}
                ></md-filter-chip>
                <md-filter-chip
                  label="Author"
                  @click=${() => context._toggleSearchField('author_'+lang)}
                  ?selected=${context.activeSearchFields.includes('author_'+lang)}
                ></md-filter-chip> -->
                <md-filter-chip
                  label="All"
                  @click=${() => context._selectAllFields()}
                  ?selected=${context.activeSearchFields.length === context.allSearchFields.length}
                ></md-filter-chip>
              </md-chip-set>
            </div> 
          </div>  
          <md-filled-icon-button 
            icon="print"
            title="Print"
            @click=${() => context.printTable(1, lang)}
          >
            <md-icon>print</md-icon>
          </md-filled-icon-button>
          <md-filled-icon-button 
            icon="download"
            title="Download CSV"
            @click=${() => context.downloadDataTableToCSV(this, searchVideos, searchVideos, { downloadable: { allowUserSelectColumns: true } })}
          >
            <md-icon>download</md-icon>
          </md-filled-icon-button>                  
        </div>
        <div class="count-text">
          Showing ${searchVideos.length} ${searchVideos.length === 1 ? 'item' : 'items'}
        </div>        
        <div class="bottom-split">        
          ${searchVideos.map((v, i) =>
            html`
              <div class="card">
                <div class="card-header">
                  <h2>${unsafeHTML(context._highlightMatch(v["category_" + lang]))}</h3>
                  <h3>${unsafeHTML(context._highlightMatch(v["title_" + lang]))}</h3>
                  <p>${unsafeHTML(context._highlightMatch(v["summary_" + lang]))}</p>
                </div>
                ${v['url_' + lang] ?
                  html`
                    <div class="video-container">
                      <video id="${v["title_" + lang]}-${i}" controls
                        @play=${() => context.stopOthers(`${v["title_" + lang]}-${i}`)}>
                        <source type="video/webm" src="${v['url_' + lang]}">
                      </video>
                    </div>
                  ` :
                  html`
                    <div class="notAvail">
                      ${notAvail["label_" + lang]}
                    </div>
                  `
                }
              </div>
            `
          )}
        </div>
      </div>
    ` :
    html`
      <div id="mobile">
        <div id="leftSplit">
          <md-filled-select label="Categories" @change=${catChanged}>
            <option value="">-- Filter by Category --</option>
            <option value="-1">All categories</option>
            ${categories.map(c =>
              html`<option value=${c.id}>${c.category}</option>`
            )}
          </md-filled-select><br>
          <md-filled-text-field
            label="Search Video"
            @input=${searchChanged}>
          </md-filled-text-field>
          <hr>
          ${searchVideos.map((v, i) =>
            html`
              <div class="card">
                <div class="card-header">
                  <h1>${v["title_" + lang]}</h1>
                  <h2>${v["summary_" + lang]}</h2>
                </div>
                ${v['url_' + lang] ?
                  html`
                    <div class="video-container">
                      <video id="${v["title_" + lang]}-${i}" controls
                        @play=${() => stopOthers(`${v["title_" + lang]}-${i}`)}>
                        <source type="video/mp4" src="${v['url_' + lang]}">
                      </video>
                    </div>
                  ` :
                  html`
                    <div class="notAvail">
                      ${notAvail["label_" + lang]}
                    </div>
                  `
                }
              </div>
            `
          )}
        </div>
      </div>
    `
  }
  
`;
