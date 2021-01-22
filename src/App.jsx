import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </Router>
);

export default App;
