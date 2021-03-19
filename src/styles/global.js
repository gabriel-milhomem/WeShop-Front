import { css } from 'styled-components';

import { mediaTablet, mediaMobile } from '../utils/media';

export default css`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    ${mediaTablet} {
      font-size: 93.75%;
    }

    ${mediaMobile} {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
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
