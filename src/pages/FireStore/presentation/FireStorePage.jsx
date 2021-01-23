import React from 'react';

import Layout from 'components/Layout';

import PageTitle from 'components/PageTitle';
import Loading from 'components/Loading';
// import Product from 'components/Product';

const FireStorePage = () => {
  return (
    <Layout>
      <PageTitle title="Pokémons de fogo" />
      <Loading />
      {/* <Product /> */}
    </Layout>
  );
};

export default FireStorePage;
