import { html } from 'lit';
import './elements/procedures-menu.js';
import './elements/tab-state.js';

export const template = (lang, isDesktop, procedures, handleMenuClick) => html`
  <header class="header">
    <img src="/images/logo.png" alt="Logo">
    <div>
      <label>Session Id: 13152 (demo_v0_9_2)</label>
      <p>Date: Mon Sep 23 10:44:29 UTC 2024</p>
    </div>
  </header>

  <nav class="menu">
    ${procedures.map(proc => html`
      <div class="menu-item" @click="${() => handleMenuClick(proc, lang)}">
        ${proc["label_" + lang]}
      </div>
    `)}
  </nav>

  ${isDesktop
    ? html`<procedures-menu .procAccess="${procedures}"></procedures-menu>`
    : html`<tab-state .lang="${lang}" .procedures="${procedures}"></tab-state>`
  }
`;
