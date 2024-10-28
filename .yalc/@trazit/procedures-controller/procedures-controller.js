import { ProceduresController } from './src/procedures-controller.js';

if (!customElements.get('procedures-controller')) {
    customElements.define('procedures-controller', ProceduresController);
}
