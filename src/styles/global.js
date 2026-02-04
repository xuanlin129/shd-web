import { createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${theme.primary};
    --secondary-color: ${theme.secondary};
    --navbar-height: 80px;
    --base-padding: 16px;

    font-family: 'Noto Sans TC', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: #fff;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--base-padding);
  }
`;

export default GlobalStyle;
