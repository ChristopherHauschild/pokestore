import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Wrapper, MainContent } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
