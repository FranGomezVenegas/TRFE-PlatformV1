// src/services/DialogManager.js
export class DialogManager {
    constructor() {
      if (!DialogManager.instance) {
        this.dialogs = new Map();
        DialogManager.instance = this;
      }
      return DialogManager.instance;
    }
  
    registerDialog(id, dialogElement) {
      this.dialogs.set(id, dialogElement);
    }
  
    openDialog(id) {
        const dialog = this.dialogs.get(id);
        if (dialog && typeof dialog.open === 'function') {
            dialog.open();
        } else {
            console.warn(`Dialog with ID ${id} not registered or method open not available.`);
        }
    }
    
    closeDialog(id) {
        const dialog = this.dialogs.get(id);
        if (dialog && typeof dialog.close === 'function') {
            dialog.close();
        } else {
            console.warn(`Dialog with ID ${id} not registered or method close not available.`);
        }
    }
  
    minimizeDialog(id) {
      const dialog = this.dialogs.get(id);
      if (dialog) {
        dialog.minimize();
      }
    }
  
    maximizeDialog(id) {
      const dialog = this.dialogs.get(id);
      if (dialog) {
        dialog.maximize();
      }
    }
  
    resizeDialog(id, width, height) {
      const dialog = this.dialogs.get(id);
      if (dialog) {
        dialog.resize(width, height);
      }
    }
  }
  
  // Exportar la instancia singleton
  export const dialogManager = new DialogManager();
  