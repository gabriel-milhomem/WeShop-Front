import { createGlobalStyle } from 'styled-components';

import Global from './global';
import Root from './root';

export const GlobalStyle = createGlobalStyle`
  ${Root}
  ${Global}
`;
