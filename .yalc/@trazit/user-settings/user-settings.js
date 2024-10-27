import { UserSettings } from './src/user-settings.js';

if (!customElements.get('user-settings')) {
    window.customElements.define('user-settings', UserSettings);
}
