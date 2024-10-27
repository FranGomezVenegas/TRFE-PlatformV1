import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    background-color: transparent;
    font-family: Montserrat;
  }

#headerlanglogout {
  display: flex;
  justify-content: flex-start; /* Mantén los elementos alineados al inicio del contenedor */
  align-items: center;
  flex-grow: 1; /* El contenedor ocupa todo el espacio disponible */
}

.language-and-logout {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto; /* Empuja este contenedor a la derecha */
}

.language-and-logout md-filled-icon-button {
  margin-right: 10px; /* Espaciado entre el cambio de idioma y el botón de logout */
  --_container-color: rgb(98 182 238 / 73%);
}

.language-and-logout sp-menu-item {
  margin-right: 0; /* Asegúrate de que el botón de logout no tenga margen extra */
}


#changelang {
  margin-left: 20px; /* Space between the language and logout buttons */
  font-size: 30px;
  cursor:pointer;
}

img {
  height: 50px; /* Ensure logo is compact */
  margin-right: 0; /* Elimina cualquier margen a la derecha del logo */
}

  .header.isfortesting.false {
    background : linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
    border-radius : 12px;
    position: sticky;
    box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
  }

  .header.isfortesting.true {
    background : linear-gradient(166deg, rgba(224, 214, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%);
    border-radius : 12px;
    position: sticky;
    box-shadow : 2.77px 2.77px 4.62px rgba(20, 78, 117, 0.5);
  }
     
  #headerContent{
  z-index:1000;
  position:relative;
  }
.header {
  display: flex;
  justify-content: space-between; /* Distribute space between elements */
  align-items: center; /* Vertically align items */
  padding: 5px 15px; /* Adjust padding for a compact layout */
  background: var(--background-gradient, linear-gradient(166deg, rgba(214, 233, 248, 1) 43.85%, rgba(255, 255, 255, 1) 58.66%));
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 70px; /* Compact height */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  box-sizing: border-box;
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente */
  justify-content: flex-start; /* Alinea los elementos al inicio del contenedor */
  padding: 0; /* Asegúrate de que no haya padding extra en el contenedor */  
}

#sessionLabel {
  font-family: 'Myriad Pro', sans-serif;
  font-size: 0.8vw !important; /* Add the vw unit for responsive font size */
  line-height: 1.25; /* Adjust the line-height for better readability */
  color: #095aba;
  margin-left: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; /* Prevent overflow */
  max-width: 500px; 

  margin-left: 0; /* Elimina cualquier margen a la izquierda de los datos de sesión */
  padding-left: 10px; /* Opcional, para añadir un pequeño espacio si es necesario */

}

.special-section-definition {
  text-align: center;
  flex-grow: 1; /* Ocupa el espacio disponible */
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  align-items: center; /* Centra el contenido verticalmente */
  font-size: 36px; /* Ajuste de tamaño de texto */
  color: #61c9f8;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.operation-special-section-operation {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
}

.operation-menu-item {
  position: relative;
  margin-right: 10px;
  background: transparent !important; /* linear-gradient(135deg, rgb(98 182 238 / 84%) 0%, rgb(106 176 230) 100%); *
  border: none;
  color: rgba(68, 132, 208, 1);
}

.operation-menu-item button {
  background: transparent !important; /* linear-gradient(135deg, rgb(98 182 238 / 84%) 0%, rgb(106 176 230) 100%); *
  border: none;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: rgba(68, 132, 208, 1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  border-radius: 8px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.operation-menu-item button:hover {
  transform: scale(1.1); /* Agrandar ligeramente el botón en hover */
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  
}

.operation-menu-item.active button {
  background: linear-gradient(135deg, rgba(68, 132, 208, 1) 0%, rgba(124, 200, 245, 1) 100%);
  box-shadow: 0 4px 10px rgba(98, 182, 238, 0.4); /* Sombra más destacada para el menú activo */  
  color:white;
}

.operation-menu-item button .material-icons {
  margin-right: 8px;
  font-size: 18px;
}

.operation-dropdown-content {
  display: none;
  position: absolute;  
  min-width: 160px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
  border-radius: 8px;
  margin-top: -10px;
}

.operation-menu-item:hover .operation-dropdown-content,
.operation-menu-item.open .operation-dropdown-content {
  display: block;
}

.operation-dropdown-option {
  padding: 8px 12px;
  background: linear-gradient(135deg, #fff 0%, rgba(214, 233, 248, 1) 100%);
  color: #43657c;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 5px;
  margin-bottom: 4px; /* Espacio entre opciones */
   transition: transform 0.3s ease;
}

.operation-dropdown-option:hover {
  background: linear-gradient(135deg, rgba(68, 132, 208, 1) 0%, rgba(124, 200, 245, 1) 100%); /* Color más oscuro en hover */  
  color: #fff8f6;
  transform: scale(1.2);
}

.operation-button {
  color: rgba(68, 132, 208, 1); /* Color del texto */
  background: transparent;      /* Fondo transparente */
  border: none;                 /* Sin borde */
  font-size: 20px;              /* Tamaño de fuente */
  cursor: pointer;              /* Cursor en forma de mano */
  padding: 10px 15px;           /* Espaciado interno */
  display: flex;                /* Flex para alinear contenido */
  align-items: center;          /* Centrar verticalmente el contenido */
  text-shadow: rgba(20, 78, 117, 0.5) -0.11px -0.11px 0px, rgba(20, 78, 117, 0.5) 0.1051px -0.1051px 0px, rgba(20, 78, 117, 0.5) -0.101px 0.11px 0px, rgba(20, 78, 117, 0.5) 0.101px 0.101px 0px;
  transition: transform 0.2s ease;
}

.operation-button:hover {
  transform: scale(1.2); /* Efecto de agrandar ligeramente el botón en hover */  
}

.button-letters {
  background-color: rgba(0, 0, 0, 0) !important;;
  color: #2680eb !important;;
  --md-ripple-hover-color: rgba(36, 192, 235, 1) !important;;
  --md-ripple-hover-opacity: var(--_hover-state-layer-opacity) !important;;
  --md-ripple-pressed-color: rgba(68, 132, 208, 1) !important;;
  --md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity) !important;;  
  
}

.button-icon { 
  padding-left:10px;
  color:#03a9f4;
  margin-right: 17px;
}

div.mainbackground {
  position:relative;
  left: 20px;
  top: 10px;
}

      .menu {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .procedure-item {
        adding: 8px 12px;
        background: linear-gradient(135deg, #fff 0%, rgba(224, 214, 248, 1) 100%);
        margin: 5px;
        border-radius: 5px;
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;
      }
      .procedure:hover {
        background-color: #32C3EC;
        color: white;
      }
      .procedure button {
        font-size: 14px;
        font-weight: bold;
        color: rgb(36, 192, 235);
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
      }
  .sublist {
    visibility: hidden;
    height: 0;
    transition: visibility 0.3s, height 0.3s ease-in-out;
    padding-left: 20px;
    margin-top: 5px;

  max-height: none; /* Ajuste para permitir que el contenedor crezca */
  overflow-y: auto; /* Solo muestra el scroll si el contenido realmente excede el tamaño */
    
  }

  .sublist.open {
  
    visibility: visible;
    height: auto;
  }
    .procedure-list-option {
      padding: 2px 5px;
      background: transparent;
      color: #43657c;
      font-size: 16px;
      border: none;
      /* cursor: pointer; */
      /* transition: background-color 0.2s ease; */
      /* border-radius: 5px; */
      /* margin-bottom: 4px;
    }
    .procedure-list-option:hover {
      background: linear-gradient(135deg, rgba(68, 132, 208, 1) 0%, rgba(124, 200, 245, 1) 100%); /* Color más oscuro en hover */  
      color: #fff8f6;
      transform: scale(1.1);
    }  

.procedure-list-option-button {
  padding: 8px 12px;
  background: transparent;
  color: #43657c;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 5px;
  margin-bottom: 4px; /* Espacio entre opciones */
  border:none;
}

.procedure-list-option-button:hover {
  background: linear-gradient(135deg, rgba(68, 132, 208, 1) 0%, rgba(124, 200, 245, 1) 100%); /* Color más oscuro en hover */  
  color: #fff8f6;
  transform: scale(1.1);
}

  .subproc {
    display: flex;
    align-items: center; /* Alinear verticalmente al centro */
  }

  .sops_passed {
    color: #43657c;
    font-size:16px; 
    margin-left: 0.2vw;
    cursor: pointer;
  }

  .sops_not_passed {
    color: red;
    font-size:16px; 
    margin-left: 0.2vw;
    cursor: pointer;
  }

      .icons {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
      }
      .icons button {
        margin-right: 10px;
      }
      .definition button {
        display: block;
        margin: 5px 0;
        background-color: rgba(49, 130, 189, 0.1);
        padding: 5px;
        border-radius: 3px;
      }
      .definition button:hover {
        background-color: rgba(49, 130, 189, 0.3);
      }

/* Estilos generales */
#mobileMenuIcon {
    display: none;
    cursor: pointer;
    margin-right: 20px;
    left: 10px;
    position: relative;
    color: #095aba;
}

#desktopMenu {
  display: flex;
}

/* Mostrar el icono de hamburguesa y ocultar el menú de escritorio en pantallas pequeñas */
@media (max-width: 768px) {
  #mobileMenuIcon {
    display: block;
  }

  #desktopMenu {
    display: none;
  }

  /* Menú móvil (deslizante desde la izquierda) */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: -320px; /* Oculto por defecto */
    width: 320px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
    transition: left 0.3s ease;
    z-index: 1000;
    overflow: none; /* Para permitir scroll si es necesario */
  }

  /* Cuando el menú está abierto */
  .mobile-menu.open {
    left: 0;
  }

  .mobile-menu-content {
    padding: 20px;
  }

  .mobile-menu-item {
    margin-bottom: 20px;
  }

  .mobile-operation-button {
    background: none;
    border: none;
    color: #007bff;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .mobile-operation-button .material-icons {
    margin-right: 10px;
  }
}

/* Mostrar el menú de escritorio en pantallas grandes */
@media (min-width: 769px) {
  #mobileMenu {
    display: none;
  }

  #desktopMenu {
    display: flex;
  }
}
.mobile-submenu-content {
  display: none;
  padding-left: 20px;
}

.mobile-submenu-content.open {
  display: block;
}
   

.tabs-area {
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
}

.tabs-area.hidden {
  display: none;
}

.tabContainer {
  display: flex;
}

.mobile-tabs ul {
  list-style: none;
  padding: 0;
}

.mobile-tabs li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #e0e0e0;
  border-bottom: 1px solid #ccc;
}

.tabContainer tab-item {
  margin-right: 10px;
}
  label.submenu{
    transition: transform 0.3s ease;
  }
  label.submenu:hover,
  label.submenu:active {
    transform: scale(1.2);
  }
  img.submenu {
    width:2.2vw; 
    pointer-events: auto; 
    margin-right:1.5vw;
    transition: transform 0.3s ease;
  }
  img.submenu:hover,
img.submenu:active {
    transform: scale(1.3);
  }

  `;
