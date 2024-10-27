import { css } from 'lit';
import { panetoneStylesTrazit } from './Panetones/panetone-trazit';

export const MdFilledIconButtonStylesTrazit = css`
  ${panetoneStylesTrazit}
  :root {
    --trazit-font-family: 'Montserrat', sans-serif;
  }
  md-icon{
    color: var(--trazit-primary-color);
  }

  mxd-filled-text-field,
  mxd-outlined-text-field {
    --md-sys-color-primary: #0465FB;
    --md-sys-color-on-surface: #148CFA;
    --md-sys-color-surface: #FFFFFF;
    --md-sys-color-outline: #148CFA;
    --md-sys-color-surface-container-highest: #148CFA;
    --md-sys-color-on-surface-variant: #999999;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 19px;
  }  
    mxd-select {
    --md-sys-color-primary: rgba(36, 192, 235, 1);
    --md-sys-color-on-surface: #148CFA;
    --md-sys-color-surface: #FFFFFF;
    --md-sys-color-outline: rgba(186, 235, 248, 0.4);
    --md-sys-color-on-primary: rgba(47, 47, 47, 1);
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 19px;
  }    
`;
