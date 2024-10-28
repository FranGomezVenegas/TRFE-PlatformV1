import { LitElement } from 'lit';
import { styles } from './video-styles.js';
import { template } from './video-template.js';
import { CommonCore } from '@trazit/common-core';
import { ExportTableToCsv } from './exportTableToCsv';
import { PrintableTable } from './printableTable';

const notAvail = {
  "label_en": "Video not available",
  "label_es": "Video no disponible"
};

export class VideoTutorial extends ExportTableToCsv(PrintableTable(CommonCore)) {
  static styles = styles;

  static properties = {
    categories: { type: Array },
    filterVideos: { type: Array },
    searchVideos: { type: Array },
    timeout: { type: Object },
    lang: { type: String },
    desktop: { type: Boolean },
    config: { type: Object },
    isLoading: { type: Boolean },
    searchTerm: { type: String },
    allSearchFields: { type: Array },
    activeSearchFields: { type: Array },
    columns: { type: Array }    
  };

  constructor() {
    super();
    this.config = undefined;
    this.categories = [];
    this.filterVideos = [];
    this.searchVideos = [];
    this.lang = 'en'; // Default language
    this.desktop = window.innerWidth > 768; // Responsive check
    this.isLoading = false;
    this.searchTerm = '';
    if (this.lang===undefined){this.lang="en"}
    if (this.lang==='en'){
      this.allSearchFields = ['title_en', 'summary_en', 'author_en'];
      this.columns = [
        { name: 'title_en', label_en: 'Title', label_es: 'Título' },
        { name: 'summary_en', label_en: 'Summary', label_es: 'Resumen' },
        { name: 'author_en', label_en: 'Author', label_es: 'Autor' }
      ];      
    }else{
      this.allSearchFields = ['title_es', 'summary_es', 'author_es'];
      this.columns = [
        { name: 'title_es', label_en: 'Title', label_es: 'Título' },
        { name: 'summary_es', label_en: 'Summary', label_es: 'Resumen' },
        { name: 'author_es', label_en: 'Author', label_es: 'Autor' }
      ];
    }
    this.activeSearchFields = [...this.allSearchFields];
  }

  _highlightMatch(text, searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") {
      return text; // Si no hay término de búsqueda válido, mostrar el texto tal como está
    }
  
    const searchTermRegex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(searchTermRegex, match => `<span class="highlighted">${match}</span>`);
  }  

  render() {
    return template(this, this.categories, this.searchVideos, this.lang, this.desktop, 
      this.catChanged.bind(this), this.searchObjects.bind(this), this.stopOthers.bind(this),notAvail);
  }

  updated(changedProperties) {
    // Verifica si la propiedad 'config' ha cambiado y si ahora tiene un valor válido
    if (changedProperties.has('config') && this.config) {
      this.getVideos();
    }
    if (changedProperties.has('lang')) {
      if (this.lang==='en'){
        this.allSearchFields = ['category_en', 'title_en', 'summary_en', 'author_en'];
        this.columns = [
          { name: 'category_en', label_en: 'Category', label_es: 'Categoría' },
          { name: 'title_en', label_en: 'Title', label_es: 'Título' },
          { name: 'summary_en', label_en: 'Summary', label_es: 'Resumen' },
          { name: 'author_en', label_en: 'Author', label_es: 'Autor' }
        ];  
        this.activeSearchFields = this.activeSearchFields.map(field => field.replace('_es', '_en'));    
      }else{
        this.allSearchFields = ['category_es', 'title_es', 'summary_es', 'author_es'];
        this.columns = [
          { name: 'category_es', label_en: 'Category', label_es: 'Categoría' },
          { name: 'title_es', label_en: 'Title', label_es: 'Título' },
          { name: 'summary_es', label_en: 'Summary', label_es: 'Resumen' },
          { name: 'author_es', label_en: 'Author', label_es: 'Autor' }
        ];
        this.activeSearchFields = this.activeSearchFields.map(field => field.replace('_en', '_es'));
      }
      this.requestUpdate()
    }
  }

  async getVideos() {
    // Verifica que config tenga valor
    if (!this.config) return;
  
    this.isLoading = true;
    this.filterVideos = [];
    this.searchVideos = [];
    this.categories = [];
  
    try {
      const token = JSON.parse(sessionStorage.getItem("userSession")).finalToken;
      const url = `${this.config.backendUrl}${this.config.frontEndVideoTutorialsUrl}?${new URLSearchParams({
        actionName: "ALL_ACTIVE_VIDEO_TUTORIALS",
        finalToken: token,
        dbName: this.config.dbName
      })}`;
  
      const response = await this.fetchApi(url, false);
  
      if (response && Array.isArray(response)) {
        this.categories = response;
        
        // Aplanar la estructura
        this.filterVideos = response.flatMap(category => {
          return category.videos.map(video => ({
            ...video,
            category_es: category.summary_es, 
            category_en: category.summary_en, // Agregamos el nombre de la categoría si es necesario en el template
          }));
        });
  
        // Inicialmente, `searchVideos` es igual a `filterVideos`
        this.searchVideos = [...this.filterVideos];
      } else {
        console.error('La respuesta no es válida o no contiene un array esperado.', response);
      }
    } catch (error) {
      console.error('Error al obtener los videos:', error);
    } finally {
      this.isLoading = false;
    }
  }
  

  stopOthers(v) {
    let allVids = this.shadowRoot.querySelectorAll("video");
    allVids.forEach(vid => {
      if (vid.id !== v) {
        vid.pause();
      }
    });
  }
  get search() {
    return this.shadowRoot.querySelector("input[type=search]");
  }
  catChanged(e) {
    alert('catChanged')
    // Obtiene el valor seleccionado
    const selectedCategoryId = e.target.value;
  
    // Reinicia el valor de búsqueda
    this.search.value = "";
  
    // Filtra los videos basándose en la categoría seleccionada
    if (selectedCategoryId == -1) {
      // Si se selecciona "-1" (todas las categorías), mostrar todos los videos
      this.searchVideos = [...this.filterVideos];
    } else {
      // Busca la categoría seleccionada en la lista de categorías
      const selectedCategory = this.categories.find(c => c.id == selectedCategoryId);
      if (selectedCategory) {
        this.searchVideos = selectedCategory.videos || [];
      } else {
        this.searchVideos = []; // Si no se encuentra la categoría, muestra una lista vacía
      }
    }
  
    // Solicita una actualización del componente para reflejar los cambios
    this.requestUpdate();
  }
  
  searchObjects(e) {
    this.searchTerm = e.target.value.toLowerCase().trim();
    
    // Si el término de búsqueda está vacío, devolvemos todos los videos
    if (!this.searchTerm) {
      this.searchVideos = [...this.filterVideos];
    } else {
      const searchTermRegex = new RegExp(`(${this.searchTerm})`, 'gi');
  
      this.searchVideos = this.filterVideos.filter(video => {
        return this.columns.some(field => 
          this.activeSearchFields.includes(field.name) &&
          video[field.name] &&
          video[field.name].toLowerCase().includes(this.searchTerm)
        );
      }).map(video => {
        const highlightedVideo = { ...video };
  
        this.columns.forEach(field => {
          if (this.activeSearchFields.includes(field.name) && video[field.name] !== undefined) {
            highlightedVideo[field.name] = video[field.name].replace(searchTermRegex, match => `<span class="highlighted">${match}</span>`);
          }
        });
  
        return highlightedVideo;
      });
    }
  
    this.requestUpdate();
  }
  
  

  _toggleSearchField(field) {
    if (this.activeSearchFields.includes(field)) {
      this.activeSearchFields = this.activeSearchFields.filter(f => f !== field);
    } else {
      this.activeSearchFields = [...this.activeSearchFields, field];
    }

    this.searchObjects({ target: { value: this.searchTerm || '' } });
    this.requestUpdate();
  }

  _selectAllFields() {
    if (this.activeSearchFields.length === this.allSearchFields.length) {
      this.activeSearchFields = [];
    } else {
      this.activeSearchFields = [...this.allSearchFields];
    }

    this.searchObjects({ target: { value: this.searchTerm || '' } });
    this.requestUpdate();
  }

}

customElements.define('video-tutorial', VideoTutorial);
