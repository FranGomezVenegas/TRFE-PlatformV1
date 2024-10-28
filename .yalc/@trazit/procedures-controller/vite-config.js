import { defineConfig } from 'vite';

export default defineConfig({
  root: 'demo', // Cambia el directorio raíz a 'demo'
  build: {
    outDir: '../dist', // Directorio de salida para la construcción
    emptyOutDir: true,
  },
  server: {    
    open: true, // Abre automáticamente en el navegador
  },
});
