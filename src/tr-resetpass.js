import { LitElement, html } from 'lit';

class TrResetppass extends LitElement {
  render() {
    return html`
      <section>
        <h2>Welcome to tr-resetpass</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `
  }
}

window.customElements.define('tr-resetpass', TrResetpass);
