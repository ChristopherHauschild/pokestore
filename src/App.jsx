import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
