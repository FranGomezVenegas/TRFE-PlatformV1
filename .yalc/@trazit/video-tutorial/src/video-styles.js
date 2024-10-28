import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: 'Roboto', sans-serif;
  }
  :host([hidden]) {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .top-split {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .bottom-split {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }
  .card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 300px;
    height: 100%; /* Hacer que la tarjeta ocupe el 100% de la altura disponible */
    transition: box-shadow 0.3s;
  }
  .card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  .card-header {
    padding: 16px;
    background-color: var(--md-sys-color-primary);
    color: white;
    flex: 0 0 auto; /* Mantener la altura de la cabecera fija */
  }
  .card-content {
    flex: 1 1 auto; /* Permitir que el contenido ocupe el espacio disponible */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .notAvail {
    width: 100%;
    height: 25px; /* Establecer una altura fija para el preview o el placeholder */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#e52929;
  }
  .video-container {
    width: 100%;
    height: 225px; /* Establecer una altura fija para el preview o el placeholder */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#e52929;
  }    
  .video-container video {
    width: 100%;
    height: 100%;
    border-radius: 0 0 8px 8px;
  }
  @media (max-width: 600px) {
    .card {
      max-width: 100%; /* Para que ocupe todo el ancho disponible en pantallas pequeñas */
    }
  }
  .count-text {
    font-size: 1rem;
    font-weight: 500;
    color: var(--md-sys-color-primary);
    margin: 10px 0;
    text-align: center;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 8px;
  }
  .highlighted {
    background-color: yellow; /* Fondo de resaltado */
    padding: 0 3px;
    border-radius: 3px;
    transition: transform 0.2s ease-in-out;
    color:black;
  }

  .highlighted:hover {
    transform: scale(1.2); /* Efecto lupa cuando el usuario pasa el ratón */
    background-color: orange; /* Cambia el color al hacer hover */
    color:black;
  }    
`;
