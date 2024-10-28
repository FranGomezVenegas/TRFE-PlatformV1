import { ReportingFunctions } from "./reporting";
export function PrintableTable(base) {
    return class extends ReportingFunctions(base) {

        printTable(index, lang) {
            this.setPrintContentTable(index, lang);
            let printWindow = window.open('', '_blank');
            printWindow.document.write(this.printObj.contentWithFooter);
            printWindow.document.title = this.printObj.header;
            setTimeout(function () {
                printWindow.print();
                printWindow.close();
            }, 500);
        }

        setPrintContentTable(index, lang) {
            const styles = this._getAllStyles();
            const { header, content } = this._getPrintableContent(index, lang);
            
            let pagerFooter = '';
        
            // Ajustamos para que funcione con `certification-item`
            const tbody = this.shadowRoot.querySelector("certification-item") || this.shadowRoot.querySelector(".table-container");
            
            if (!tbody) {
                console.error("No certification items found for printing.");
                return;
            }
        
            // Obtener todos los estilos aplicados y agregarlos al documento de impresión
            const printStyles = `
                <style>
                    @media print {
                        @page { 
                            margin: 0;
                        }
                        body {
                            margin: 0;
                        }
                        .dossier-card {
                            page-break-inside: avoid;
                            margin-bottom: 20px;
                            border: 1px solid #ccc;
                            box-shadow: none;
                            width: 100%;
                            max-width: 300px;
                            background-color: #fdf5e6; /* Fondo beige */
                            background-image: 
                                radial-gradient(circle at 30% 30%, rgba(200, 180, 150, 0.2), transparent 70%),
                                radial-gradient(circle at 70% 60%, rgba(200, 180, 150, 0.2), transparent 80%),
                                radial-gradient(circle at 80% 40%, rgba(200, 180, 150, 0.1), transparent 80%),
                                linear-gradient(135deg, rgba(0,0,0,0.05) 25%, transparent 25%),
                                linear-gradient(225deg, rgba(0,0,0,0.05) 25%, transparent 25%);
                            background-size: cover;
                            border-radius: 10px;
                            padding: 20px;
                            font-family: Arial, sans-serif;
                            line-height: 1.5;
                        }
                        .dossier-card h3 {
                            font-size: 16px;
                            font-family: Arial, sans-serif;
                            margin-bottom: 10px;
                        }
                        .dossier-card b {
                            color: #333;
                        }
                        .dossier-card p {
                            color: #555;
                        }
                        .status-icon {
                            display: flex;
                            align-items: center;
                            margin-top: 10px;
                        }
                        .status-icon md-icon {
                            margin-left: 5px;
                            color: red;
                        }
                        /* Eliminamos el logo de la esquina superior derecha en la impresión */
                        .icon-top-right {
                            display: none !important;
                        }
                    }
                </style>
            `;
        
            this.printObj = {
                header: header,
                contentWithFooter: `
                    <html>
                        <head>
                            ${styles}
                            ${printStyles}
                        </head>
                        <body>
                            <div id="print-document-header" class="print-document-header">
                                ${header}
                            </div>
                            <div id="print-content" style="display: flex; flex-wrap: wrap; padding-left: 30px; gap: 10px">
                                ${content}
                            </div>
                            <div id="print-document-footer" class="print-document-footer">${pagerFooter}</div>
                        </body>
                    </html>
                `
            };
        }
        
               

        _getPrintableContent(index, lang) {
            const table = this.shadowRoot.querySelector(`table[data-index="${index}"]`);
            if (table) {
                return this._getTableHTML(table, index);
            } else {
                return this._getFallbackContent(lang);
            }
        }

        _getAllStyles() {
            const styles = Array.from(this.shadowRoot.querySelectorAll('style, link[rel="stylesheet"]'))
                .map(style => style.outerHTML)
                .join('\n');
            return styles;
        }

        _getTableHTML(table, index) {
            let getAllHeader = []
            getAllHeader = this.shadowRoot.querySelectorAll('#mainDiv > div > p');
            if (getAllHeader.length==0){
                getAllHeader = this.shadowRoot.querySelectorAll('#mainDiv > div > div > div > div > p');
            }
            let headerElement = getAllHeader[index];
            if (!headerElement) {
                headerElement = getAllHeader[0];
            }
            let headerTitle = ""
            if (headerElement!==undefined){
                headerTitle = headerElement.innerText //headerElement.querySelector('span') ? headerElement.querySelector('span').textContent.trim() : '';
            }else{

            }
            console.log(headerTitle);
            const clonedTable = table.cloneNode(true);
            const headers = clonedTable.querySelectorAll('th');
            let actionsColumnIndex = -1;
        
            headers.forEach((header, headerIndex) => {
                // Remove .sort-icons divs
                const sortIconsDiv = header.querySelector('.sort-icons');
                if (sortIconsDiv) {
                    sortIconsDiv.remove();
                }
        
                if (header.textContent.trim() === "Actions") {
                    actionsColumnIndex = headerIndex;
                }
        
                // Apply styles directly to cloned headers
                header.style.backgroundColor = '#b6d6f3';
                header.style.color = 'rgb(0 0 0 / 55%)';
                header.style.fontSize = '16px';
                header.style.fontFamily = 'Montserrat';
                header.style.padding = '8px';
            });
        
            if (actionsColumnIndex !== -1) {
                headers[actionsColumnIndex].remove();
                const rows = clonedTable.querySelectorAll('tr');
                rows.forEach(row => {
                    if (row.cells.length > actionsColumnIndex) {
                        row.deleteCell(actionsColumnIndex);
                    }
                });
            }
        
            const inputs = clonedTable.querySelectorAll('input');
            inputs.forEach(input => {
                const value = input.value;
                const textNode = document.createTextNode(value);
                input.parentNode.replaceChild(textNode, input);
            });
        
            const allStyles = this._getAllStyles();
        
            return { header: headerTitle, content: allStyles + clonedTable.outerHTML };
        }
        

        _getFallbackContent(lang) {
            const mainDiv = this.shadowRoot.querySelector('#mainDiv');
            if (!mainDiv) {
                console.error(`Main div not found.`);
                return { header: 'Error', content: 'Main div not found.' };
            }
        
            // Seleccionamos todos los componentes certification-item
            const certificationItems = mainDiv.querySelectorAll('certification-item');
            if (!certificationItems.length) {
                console.error('No certification items found.');
                return { header: 'Error', content: 'No certification items found.' };
            }
        
            // Crear un contenedor temporal para almacenar el contenido a imprimir
            const printContainer = document.createElement('div');
            
            certificationItems.forEach((item) => {
                // Accedemos al shadowRoot de cada certification-item
                const dossierCard = item.shadowRoot.querySelector('.dossier-card');
                if (dossierCard) {
                    // Clonamos el contenido de dossier-card y lo agregamos al contenedor
                    printContainer.appendChild(dossierCard.cloneNode(true));
                }
            });
        
            // Obtener todos los estilos aplicados
            const allStyles = this._getAllStyles();
        
            // Agregar estilos específicos de impresión si es necesario
            const printStyles = `
                <style>
                    .dossier-card {
                        page-break-inside: avoid;
                        margin-bottom: 20px;
                        border: 1px solid #ccc;
                        box-shadow: none;
                    }
                </style>
            `;
        
            // Retornar el contenido listo para imprimir
            let headerDesc= 'My certifications'
            if (lang!==undefined&&lang==="es"){
                headerDesc='Mis Certificaciones'
            }
            return { 
                header: headerDesc, 
                content: printStyles + allStyles + printContainer.innerHTML 
            };
        }
        
        
                
    }
}
