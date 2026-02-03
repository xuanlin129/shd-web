import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ConfigProvider } from 'antd';
import theme from './config/theme';
import router from './router';
import globalCss from './styles/global';
import GlobalSpinner from './components/GlobalSpinner';

const GlobalStyle = createGlobalStyle`
  ${globalCss}
`;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primary,
        },
        components: {},
      }}
    >
      <GlobalStyle />
      <GlobalSpinner />
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
