import { css } from 'lit';

export const UserSettingsStyles = css`
  :host {
    display: block;
    max-width: 1000px;
    margin: 0 auto;
  }
  mxxd-icon{
    color: var(--md-sys-color-primary);
  }
  
  :host([hidden]) {
    display: none;
  }
  div.input * {
    margin: 10px 0 5px;
    padding-left: 10px;
  }
  md-icon{
    color: var(--md-sys-color-primary);
  }    
  mxxxxd-icon#lang {
    color: rgba(36, 192, 235, 1);
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
  }
  mxxxxd-button.button {
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    background: rgb(36, 192, 235);
    border-color: transparent !important;
    --mdc-button-fill-color: red;
    --mdc-button-ink-color: blue;
  }
  mxxxxd-icon.enabledtrue {
    color: red;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
  }
  mxxxxd-icon#video {
    color: rgba(36, 192, 235, 1);
  }
  sxxxp-button {
    background: rgba(36, 192, 235, 1);
    border-color: inherit !important;
    border-radius: 35px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    color: rgb(255, 255, 255);
  }
  mxxxxd-filled-text-field {
    border-style: solid;
    border-color: rgba(153, 153, 153, 1);
    border-width: 1px;
    border-radius: 7px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 19px;
    background-color: rgb(255, 255, 255);
    --mdc-text-field-idle-line-color: #148CFA;
    --mdc-theme-primary: #0465FB;
  }
  mxxxxd-filled-select {
    background-color: rgba(255, 255, 255, 1) !important;
    color: black;
  }
  mxxxxd-select-option {
    background-color: rgba(255, 255, 255, 1) !important;
    color: black;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
  }

  @media screen and (max-width: 1000px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
