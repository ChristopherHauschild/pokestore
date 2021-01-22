import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
