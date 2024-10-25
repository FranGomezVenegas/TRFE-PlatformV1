import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
    // Elimina el campo root para que Vite use la raíz del proyecto donde esté index.html

    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Mi PWA',
                short_name: 'PWA',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/icons/android-icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/android-icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/android-icon-48x48.png',
                        sizes: '48x48',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/android-icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/android-icon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/android-icon-36x36.png',
                        sizes: '36x36',
                        type: 'image/png'
                    }
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/demo\.ff2024\.testing\.s3-website\.eu-west-3\.amazonaws\.com\//,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'my-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                            },
                        },
                    },
                ],
            },
        }),
    ],
    
    build: {
        rollupOptions: {
            input: './index.html', // Asegúrate de que el archivo index.html esté en la raíz del proyecto
        },
        target: 'es2017', // Define la versión de ECMAScript
    },
    publicDir: 'public', // Esta carpeta se usará para archivos estáticos como imágenes y iconos
});
