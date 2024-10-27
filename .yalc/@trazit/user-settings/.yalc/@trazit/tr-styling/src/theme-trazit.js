import { css } from 'lit';
import { MdFilledIconButtonStylesTrazit } from './md3-buttons-styles-trazit.js';
// Importa aquí otros estilos necesarios para el tema trazit


export const TrazitTheme = {
  variables: {
    '--trazit-font-family': "'Montserrat', sans-serif",
    '--md-button-default-color': 'rgba(70, 104, 219, 1)',
    '--md-sys-color-primary': '#0465FB',
    '--trazit-input-background': '#148cfa54',    
    '--trazit-button-color': '#4668db',
    '--md-sys-color-surface': '#FFFFFF',
    '--md-sys-color-on-surface': '#233653',
    '--md-menu-item-hover-container-color': '#FFFFFF',
    '--md-sys-color-outline': '#148CFA',
    '--md-sys-color-on-primary': '#000000',
    '--md-sys-color-on-surface-variant': '#0465FB',
    '--md-filled-field-container-color': '#ffffff',
    '--md-sys-color-surface-container-highest': '#ffffff',
  },
};

export const TrazitTheme2 = {
  variables: {
    '--trazit-font-family': "'Montserrat', sans-serif",
    '--md-button-default-color':'rgba(70, 104, 219, 1)',
    '--md-sys-color-primary': '#0465FB', // Color principal para acciones
    '--md-sys-color-on-surface': '#148CFA', // Color del texto en superficie
    '--md-sys-color-surface': '#FFFFFF', // Fondo blanco para inputs y select
    '--md-sys-color-outline': '#148CFA', // Color del borde en inputs y select
    '--md-sys-color-on-primary': '#000000', // Color del texto sobre el color primario
    '--md-sys-color-on-surface-variant': '#0465FB', // Variación de color en inputs
    '--md-filled-field-container-color': 'rgba(255, 255, 255, 0.8) !important', // Fondo blanco con transparencia
    '--msd-filled-field-container-color': 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
    '--md-sys-color-surface-container-highest': '#ffffff',
  },
};