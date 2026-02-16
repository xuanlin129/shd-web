import { css, createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

const style = css`
  :root {
    --primary-color: ${theme.primary};
    --secondary-color: ${theme.secondary};
    --bg-light-color: ${theme.bgLight};
    --navbar-height: 80px;
    --base-padding: 16px;

    font-family: 'Noto Sans TC', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: #fff;
    overflow-x: hidden;
  }

  .wrapper {
    padding: 90px 0;
  }

  .container {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 var(--base-padding);
    overflow-x: clip;
  }

  @media (min-width: 576px) {
    :root {
      --base-padding: 32px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${style}
`;

export default GlobalStyle;
