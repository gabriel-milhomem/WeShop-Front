import { css } from 'styled-components';

export default css`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-color);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: var(--text-color);
  }

  ol,
  ul {
    list-style: none;
  }

  body,
  button,
  input,
  textarea {
    font-weight: 400;
    font-family: var(--font-poppins);
  }

  button,
  input {
    border: 0;
    color: inherit;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }
`;
