import { LitElement, html, css } from 'lit';

class LoadingLogo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
      }
      img {
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  render() {
    return html`
      <img src="/images/Icon.png" alt="Loading">
    `;
  }
}

customElements.define('loading-logo', LoadingLogo);
