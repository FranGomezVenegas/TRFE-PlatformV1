import { PlatformLogin } from './src/PlatformLogin.js';

if (!customElements.get('user-settings')) {
    window.customElements.define('platform-login', PlatformLogin);
}
