import { css } from 'lit';
import { MdFilledIconButtonStyles } from './md3-buttons-styles.js';

export const UserCertificationsStyles = css`
  ${MdFilledIconButtonStyles}


  .split-container {
    display: flex;
    height: calc(100vh - 150px);
  }
  .resizable {
    flex: 1;
    padding: 10px;
    overflow: hidden;
    background-color: transparent;
  }
  .divider {
    width: 4px;
    background-color: #ccc;
    cursor: ew-resize;
    position: relative;
  }
  #mainDiv {
    display:flex;
  }
  #leftSplit {
    padding: 10px;
    background-color: transparent;
    overflow: hidden;
  }
  #endpointName {
    height: 100%;
    overflow: hidden;
  }

  /* Ajuste para el estilo del select */
  select {
    background-color: #1473e614;
    font-size: 16px;
    border: 1px solid #ccc; /* Añade un borde para mayor visibilidad */
    padding: 5px;
    font-size: 16px;
    border-radius: 4px; /* Añade un poco de redondez a las esquinas */
    appearance: none; /* Remueve el estilo predeterminado del navegador */
    -webkit-appearance: none;
    -moz-appearance: none;
    color: #333; /* Color de texto */
  }

  select:focus {
    outline: none;
    border-color: #148cfa; /* Color de borde al enfocarse */
    box-shadow: 0 0 5px rgba(20, 140, 250, 0.5); /* Sombra al enfocarse */
  }

  /* Ajustes para las opciones del select */
  option.labelModule, option.labelApi {
    color: #333;
    padding: 5px;
    font-size: 14px;
  }

  /* Estilo adicional para un input de búsqueda */
  input[type="text"] {
    height: 30px;
    width: 300px;
    background-color: #1473e614;
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
  }

  input[type="text"]:focus {
    outline: none;
    border-color: #148cfa;
    box-shadow: 0 0 5px rgba(20, 140, 250, 0.5);
  }

  /* Ajuste de visibilidad y tamaño en el componente JSON Viewer */
  json-viewer {
    left: 30px;
    position: relative;
    top: -10px;
    --background-color: #2a2f3a00;
    --string-color: rgba(57, 61, 71, 0.9);
    --property-color: rgba(57, 61, 71, 0.9);
    --preview-color: #24C0EB;
    --font-family: Montserrat;    
  }
  .labelModule {
      color: rgb(36, 192, 235);
      font-size: 16px;
  }
  .labelApi {
      rgb(114 76 154);
      font-size: 16px;
  }
  .labelEndpoint{
      color: rgb(68 98 201);
      font-size: 16px;
  }
.chips-container {
  display: inline-flex;
  flex-wrap: wrap;
}

.search-input {
  margin-top: 10px; /* Ajustar según sea necesario */
  transition: width 0.3s ease-in-out; /* Transición suave cuando cambia el ancho */
}     
md-filter-chip {
  /* Aplicar color de fondo y texto a los chips */
  --mdc-chip-background-color: #1473e614; /* Cambia el color de fondo del chip */
  --mdc-chip-text-color: #000; /* Cambia el color del texto */
}

md-filter-chip:hover {
  --mdc-chip-background-color: #1473e680; /* Cambia ligeramente el fondo al hacer hover */
}
`;
