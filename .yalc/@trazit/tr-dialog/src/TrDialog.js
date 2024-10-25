import { LitElement, html, css } from 'lit';
import '@material/web/dialog/dialog.js';
import '@material/web/icon/icon.js';
import '@material/web/button/filled-button';

export class TrDialog extends LitElement {
    static properties = {
        showCloseButton: { type: Boolean },
        showDoButton: { type: Boolean },
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            .corner {
                cursor: pointer;
                margin: auto 5px;
                color: rgb(94, 145, 186);
            }
            md-icon {
                cursor: pointer;
                --mdc-icon-size: 24px;
                margin-left: 10px;
            }
            md-dialog::part(surface) {
                background-color: white !important;
                color: black;
            }
            .popup-header {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding: 10px;
            }
            md-filled-button {
                background-color: rgb(94, 145, 186);
                color: white;
            }

            /* Estilo para los resizers */
            .resizer {
                position: absolute;
                background: transparent;
                z-index: 10;
                transition: background 0.3s ease;
            }
            .resizer:hover {
                background: rgba(20, 115, 230, 0.3); /* Borde iluminado */
            }
            .resizer-right {
                width: 10px;
                height: 100%;
                right: 0;
                top: 0;
                cursor: e-resize;
            }
            .resizer-bottom {
                width: 100%;
                height: 10px;
                bottom: 0;
                left: 0;
                cursor: s-resize;
            }
            .resizer-corner {
                width: 10px;
                height: 10px;
                right: 0;
                bottom: 0;
                cursor: se-resize;
            }
    md-dialog::part(surface) {
      --md-dialog-container-color: white !important; /* Asegurarse de que el fondo sea blanco */
      background-color: white; /* Refuerzo del fondo blanco */
      color: black;
    }                
        `,
    ];

    firstUpdated() {
        this.initResizeElement();
        this.initDragElement();
    }

    render() {
        return html`
        <md-dialog id="new-dialog" style="--md-dialog-container-color: white !important;">
            <div slot="headline" class="popup-header">
                <slot name="icon1"></slot>
                <md-icon class="corner" @click=${this.minimize}>${this.expandLabel || 'expand_more'}</md-icon>
                <md-icon class="corner" @click=${this.zoomOut}>${this.zoomLabel || 'zoom_out_map'}</md-icon>
                <md-icon class="corner" dialogAction="decline" @click=${this.close}>close</md-icon>
            </div>
            <form slot="content" id="form-id" method="dialog">
                <slot name="content"></slot>
            </form>
            <div slot="actions">
                ${this.showCloseButton 
                    ? html`<md-filled-button form="form-id" @click="${this.close}">Close</md-filled-button>` 
                    : ''}
                ${this.showDoButton 
                    ? html`<md-filled-button form="form-id" @click="${this.doAction}">Do</md-filled-button>` 
                    : ''}
                <slot name="ad-hoc-buttons"></slot>
            </div>
            <!-- Resizers -->
            <div class="resizer resizer-right"></div>
            <div class="resizer resizer-bottom"></div>
            <div class="resizer resizer-corner"></div>
        </md-dialog>
        `;
    }

    initResizeElement() {
        const dialog = this.shadowRoot.querySelector('md-dialog');
        if (!dialog) return;

        // Seleccionar la superficie del diálogo para redimensionar
        const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
        if (!dialogSurface) return;

        const resizers = this.shadowRoot.querySelectorAll('.resizer');
        let startX, startY, startWidth, startHeight;

        resizers.forEach(resizer => {
            resizer.addEventListener('mousedown', (e) => initDrag(e, resizer), false);
        });

        const initDrag = (e, resizer) => {
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(dialogSurface).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(dialogSurface).height, 10);

            const doDrag = (e) => {
                // Modificar ancho
                if (resizer.classList.contains('resizer-right')) {
                    dialogSurface.style.width = startWidth + (e.clientX - startX) + 'px';
                }
                // Modificar alto
                if (resizer.classList.contains('resizer-bottom')) {
                    dialogSurface.style.height = startHeight + (e.clientY - startY) + 'px';
                }
                // Modificar ambos (esquina)
                if (resizer.classList.contains('resizer-corner')) {
                    dialogSurface.style.width = startWidth + (e.clientX - startX) + 'px';
                    dialogSurface.style.height = startHeight + (e.clientY - startY) + 'px';
                }
            };

            const stopDrag = () => {
                document.removeEventListener('mousemove', doDrag, false);
                document.removeEventListener('mouseup', stopDrag, false);
            };

            document.addEventListener('mousemove', doDrag, false);
            document.addEventListener('mouseup', stopDrag, false);
        };
    }

    close() {
        const dialog = this.shadowRoot.querySelector('md-dialog');
        if (dialog) {
            dialog.close();
        } else {
            console.error('md-dialog element not found');
        }
    }

    minimize() {
        const dialogSurface = this.shadowRoot.querySelector('md-dialog');
        if (!dialogSurface) return;

        this.dialogShape = "5px";
        dialogSurface.style.minWidth = "auto";
        dialogSurface.style.height = "auto";
        dialogSurface.style.overflow = "hidden";

        if (this.expandLabel === "expand_more") {
            dialogSurface.style.top = "45vh";
            dialogSurface.style.height = "0";
            this.expandLabel = "expand_less";
        } else {
            dialogSurface.style.top = "0";
            dialogSurface.style.height = "auto";
            this.expandLabel = "expand_more";
        }
    }

    zoomOut() {
        const dialogSurface = this.shadowRoot.querySelector('md-dialog');
        if (!dialogSurface) return;

        if (this.zoomLabel === "zoom_out_map") {
            this.top = dialogSurface.style.top;
            this.left = dialogSurface.style.left;
            this.width = dialogSurface.style.width;
            this.height = dialogSurface.style.height;

            this.dispatchEvent(new CustomEvent("zoom-out"));

            this.dialogShape = "0px";
            dialogSurface.style.height = "100vh";
            dialogSurface.style.top = "0px";
            dialogSurface.style.left = "0px";
            dialogSurface.style.minWidth = "100vw";
            this.zoomLabel = "zoom_in_map";
            this.expandLabel = "expand_more";
        } else {
            this.dispatchEvent(new CustomEvent("zoom-in"));

            dialogSurface.style.minWidth = "auto";
            this.dialogShape = "5px";
            dialogSurface.style.height = "auto";
            dialogSurface.style.top = this.top;
            dialogSurface.style.left = this.left;
            dialogSurface.style.width = this.width;
            dialogSurface.style.height = this.height;
            this.zoomLabel = "zoom_out_map";
        }
    }
    initDragElement() {
      const dialog = this.shadowRoot.querySelector('md-dialog');
      if (!dialog) return;

      const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
      if (!dialogSurface) return;

      const header = this.shadowRoot.querySelector('.popup-header');
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      if (header) {
          header.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
          e.preventDefault();
          e.stopPropagation();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          if (!dialogSurface) return;
          e.preventDefault();
          dialogSurface.style.top = (dialogSurface.offsetTop - (pos4 - e.clientY)) + "px";
          dialogSurface.style.left = (dialogSurface.offsetLeft - (pos3 - e.clientX)) + "px";
          pos3 = e.clientX;
          pos4 = e.clientY;
      }

      function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
      }
    }    
    show() {
        const dialog = this.shadowRoot.querySelector('md-dialog');
        if (dialog) {
            const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
            if (dialogSurface) {
                dialogSurface.style.width = '600px'; // Ancho inicial deseado
                dialogSurface.style.height = '400px'; // Altura inicial deseada
                dialogSurface.style.top = '50%'; // Posición inicial deseada
                dialogSurface.style.left = '50%'; // Posición inicial deseada
                dialogSurface.style.transform = 'translate(-50%, -50%)'; // Centrar el diálogo
            }
            dialog.show(); // Mostrar el diálogo usando el método nativo de `md-dialog`
        } else {
            console.error('md-dialog element not found');
        }
    }    
}


// import { LitElement, html, css } from 'lit';
// import '@material/web/dialog/dialog.js';
// import '@material/web/icon/icon.js';
// import '@material/web/button/filled-button';

// export class TrDialog extends LitElement {
//     static properties = {
//         showCloseButton: { type: Boolean },
//         showDoButton: { type: Boolean },
//     };    

//     static styles = [
//       css`
//           :host {
//               display: block;
//           }
//           .corner {
//               cursor: pointer;
//               margin: auto 5px;
//               color: rgb(94, 145, 186);
//           }
//           md-icon {
//               cursor: pointer;
//               --mdc-icon-size: 24px;
//               margin-left: 10px;
//           }
//           md-dialog::part(surface) {
//               background-color: white !important;
//               color: black;
//           }
//           .popup-header {
//               display: flex;
//               justify-content: flex-end;
//               align-items: center;
//               padding: 10px;
//           }
//           md-filled-button {
//               background-color: rgb(94, 145, 186);
//               color: white;
//           }
//           .resizer {
//               position: absolute;
//               background: transparent;
//               z-index: 10;
//           }
//           .resizer-right {
//               width: 10px;
//               height: 100%;
//               right: 0;
//               cursor: e-resize;
//           }
//           .resizer-bottom {
//               width: 100%;
//               height: 10px;
//               bottom: 0;
//               cursor: s-resize;
//           }
//           .resizer-corner {
//               width: 10px;
//               height: 10px;
//               right: 0;
//               bottom: 0;
//               cursor: se-resize;
//           }
//       `,
//   ];
  
//   firstUpdated() {
//     this.initResizeElement();
//     this.initDragElement();
// }

// render() {
//     return html`
//     <md-dialog id="new-dialog">
//         <div slot="headline" class="popup-header">
//             <slot name="icon1"></slot>
//             <md-icon class="corner" @click=${this.minimize}>${this.expandLabel || 'expand_more'}</md-icon>
//             <md-icon class="corner" @click=${this.zoomOut}>${this.zoomLabel || 'zoom_out_map'}</md-icon>
//             <md-icon class="corner" dialogAction="decline" @click=${this.close}>close</md-icon>
//         </div>
//         <form slot="content" id="form-id" method="dialog">
//             <slot name="content"></slot>
//         </form>
//         <div slot="actions">
//             ${this.showCloseButton 
//                 ? html`<md-filled-button form="form-id" @click="${this.close}">Close</md-filled-button>` 
//                 : ''}
//             ${this.showDoButton 
//                 ? html`<md-filled-button form="form-id" @click="${this.doAction}">Do</md-filled-button>` 
//                 : ''}
//             <slot name="ad-hoc-buttons"></slot>
//         </div>
//         <!-- Resizers -->
//         <div class="resizer resizer-right"></div>
//         <div class="resizer resizer-bottom"></div>
//         <div class="resizer resizer-corner"></div>
//     </md-dialog>
//     `;
// }

// initResizeElement() {
//     const dialog = this.shadowRoot.querySelector('md-dialog');
//     if (!dialog) return;

//     const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
//     if (!dialogSurface) return;

//     const resizers = this.shadowRoot.querySelectorAll('.resizer');
//     let startX, startY, startWidth, startHeight;

//     resizers.forEach(resizer => {
//         resizer.addEventListener('mousedown', (e) => initDrag(e, resizer), false);
//     });

//     const initDrag = (e, resizer) => {
//         e.preventDefault();
//         startX = e.clientX;
//         startY = e.clientY;
//         startWidth = parseInt(document.defaultView.getComputedStyle(dialogSurface).width, 10);
//         startHeight = parseInt(document.defaultView.getComputedStyle(dialogSurface).height, 10);

//         const doDrag = (e) => {
//             if (resizer.classList.contains('resizer-right')) {
//                 dialogSurface.style.width = startWidth + (e.clientX - startX) + 'px';
//             }
//             if (resizer.classList.contains('resizer-bottom')) {
//                 dialogSurface.style.height = startHeight + (e.clientY - startY) + 'px';
//             }
//             if (resizer.classList.contains('resizer-corner')) {
//                 dialogSurface.style.width = startWidth + (e.clientX - startX) + 'px';
//                 dialogSurface.style.height = startHeight + (e.clientY - startY) + 'px';
//             }
//         };

//         const stopDrag = () => {
//             document.removeEventListener('mousemove', doDrag, false);
//             document.removeEventListener('mouseup', stopDrag, false);
//         };

//         document.addEventListener('mousemove', doDrag, false);
//         document.addEventListener('mouseup', stopDrag, false);
//     };
// }

// close() {
//     const dialog = this.shadowRoot.querySelector('md-dialog');
//     if (dialog) {
//         dialog.close();
//     } else {
//         console.error('md-dialog element not found');
//     }
// }

// minimize() {
//     const dialogSurface = this.shadowRoot.querySelector('md-dialog');
//     if (!dialogSurface) return;

//     this.dialogShape = "5px";
//     dialogSurface.style.minWidth = "auto";
//     dialogSurface.style.height = "auto";
//     dialogSurface.style.overflow = "hidden";

//     if (this.expandLabel === "expand_more") {
//         dialogSurface.style.top = "45vh";
//         dialogSurface.style.height = "0";
//         this.expandLabel = "expand_less";
//     } else {
//         dialogSurface.style.top = "0";
//         dialogSurface.style.height = "auto";
//         this.expandLabel = "expand_more";
//     }
// }

// zoomOut() {
//     const dialogSurface = this.shadowRoot.querySelector('md-dialog');
//     if (!dialogSurface) return;

//     if (this.zoomLabel === "zoom_out_map") {
//         this.top = dialogSurface.style.top;
//         this.left = dialogSurface.style.left;
//         this.width = dialogSurface.style.width;
//         this.height = dialogSurface.style.height;

//         this.dispatchEvent(new CustomEvent("zoom-out"));

//         this.dialogShape = "0px";
//         dialogSurface.style.height = "100vh";
//         dialogSurface.style.top = "0px";
//         dialogSurface.style.left = "0px";
//         dialogSurface.style.minWidth = "100vw";
//         this.zoomLabel = "zoom_in_map";
//         this.expandLabel = "expand_more";
//     } else {
//         this.dispatchEvent(new CustomEvent("zoom-in"));

//         dialogSurface.style.minWidth = "auto";
//         this.dialogShape = "5px";
//         dialogSurface.style.height = "auto";
//         dialogSurface.style.top = this.top;
//         dialogSurface.style.left = this.left;
//         dialogSurface.style.width = this.width;
//         dialogSurface.style.height = this.height;
//         this.zoomLabel = "zoom_out_map";
//     }
// }

//     show() {
//         const dialog = this.shadowRoot.querySelector('md-dialog');
//         if (dialog) {
//             const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
//             if (dialogSurface) {
//                 dialogSurface.style.width = '600px'; // Ancho inicial deseado
//                 dialogSurface.style.height = '400px'; // Altura inicial deseada
//                 dialogSurface.style.top = '50%'; // Posición inicial deseada
//                 dialogSurface.style.left = '50%'; // Posición inicial deseada
//                 dialogSurface.style.transform = 'translate(-50%, -50%)'; // Centrar el diálogo
//             }
//             dialog.show(); // Mostrar el diálogo usando el método nativo de `md-dialog`
//         } else {
//             console.error('md-dialog element not found');
//         }
//     }






//     initDragElement() {
//         const dialog = this.shadowRoot.querySelector('md-dialog');
//         if (!dialog) return;
  
//         const dialogSurface = dialog.shadowRoot.querySelector('.mdc-dialog__surface');
//         if (!dialogSurface) return;
  
//         const header = this.shadowRoot.querySelector('.popup-header');
//         let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
//         if (header) {
//             header.onmousedown = dragMouseDown;
//         }
  
//         function dragMouseDown(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             pos3 = e.clientX;
//             pos4 = e.clientY;
//             document.onmouseup = closeDragElement;
//             document.onmousemove = elementDrag;
//         }
  
//         function elementDrag(e) {
//             if (!dialogSurface) return;
//             e.preventDefault();
//             dialogSurface.style.top = (dialogSurface.offsetTop - (pos4 - e.clientY)) + "px";
//             dialogSurface.style.left = (dialogSurface.offsetLeft - (pos3 - e.clientX)) + "px";
//             pos3 = e.clientX;
//             pos4 = e.clientY;
//         }
  
//         function closeDragElement() {
//             document.onmouseup = null;
//             document.onmousemove = null;
//         }
//     }



//     doAction() {
//         this.dispatchEvent(new CustomEvent('do-action'));
//     }
// }
