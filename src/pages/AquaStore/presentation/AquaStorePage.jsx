import React from 'react';

import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import Product from 'components/Product';

const AquaStorePage = () => {
  return (
    <Layout>
      <PageTitle title="Pokémons aquáticos" />
      <Product />
    </Layout>
  );
};

export default AquaStorePage;
