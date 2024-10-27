import { css } from 'lit';

export const CredDialogStyles = css`
  tr-dialog {
    --mdc-dialog-heading-ink-color: blue;
    --mdc-typography-headline6-font-size: 35px;
    --md-dialog-container-color: white !important;
    position: relative;
    z-index: 999;
  }

  .content {
    opacity: 0.9;
  }

  .content * {
    margin: 5px 0;
  }

  p.attemptsphraseblue {
    color: #464dbb;
  }

  p.attemptsphrasered {
    color: #f3371680;
    animation-duration: 2s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 30%;
    }
    to {
      margin-left: 0%;
    }
  }

  /* Estilos para los componentes de Material Design 3 (MD) */

  md-filled-text-field {
    border-style: solid;
    border-color: #999999;
    border-width: 1px;
    border-radius: 7px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    background-color: #FFFFFF;
    --md-filled-field-container-color: #148CFA;
    --md-filled-field-focused-label-color: #148CFA;
    --md-filled-field-label-color: #148CFA;
    --md-filled-field-ink-color: #0465FB;
  }

  md-filled-button {
    --mdc-theme-primary: #0465FB;
    background-color: #0465FB;
    color: white;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    margin-right: 10px;
  }

  md-filled-button:hover {
    background-color: #034cbf;
  }

  /* Estilo para el campo de justificación */
  md-outlined-text-field {
    border-style: solid;
    border-color: #148CFA;
    border-radius: 5px;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 18px;
    --md-outlined-field-ink-color: #148CFA;
    --md-outlined-field-container-color: #FFFFFF;
  }

  /* Botones en los diálogos */
  md-text-button {
    --mdc-theme-primary: #148CFA;
    color: #148CFA;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 16px;
  }
`;
