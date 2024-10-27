import { css } from 'lit';
import { panetoneStylesClient1 } from './Panetones/panetone-client1';
export const MdFilledIconButtonStylesClient1 = css`
${panetoneStylesClient1}
  :root {
    --trazit-font-family: 'Montserrat', sans-serif;
  }
  md-icon{
    color: var(--trazit-primary-color);
  }

`;
