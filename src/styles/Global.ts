import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;
    
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    
    --background-input: #e7e9ee;
    --border-color: #D7D7D7
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothig: antialiased;
  }

  body, input, button, textarea {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .reactModalOverlay {
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0, 0.6);
  }

  .reactModalContent {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem 4rem;
    background: var(--background);

    border-radius: 0.25rem;


    .buttonCloseModal {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;

      font-size: 0;
      border: 0;
      background: transparent;
      transition: transform .2s;
      
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`;
