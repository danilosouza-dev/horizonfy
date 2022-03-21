import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121212;
    --amarelo: #FCE10F;
    --backgroundcard: #282828;
    --text-title: #FFF;
    --text-description: #a7a7a7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }
  p {
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 500px;
    outline: 0;
    padding: 3rem;
    background: #181818;
    position: relative;
    border-radius: 0.25rem;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
    opacity: 1;
  }
  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

`;
