import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Wrapper, MainContent } from './styles';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
