import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';
import Loading from 'components/Loading';
import ProductList from 'components/ProductList';
import Product from 'components/Product';

const AquaStorePage = ({ data, loading }) => {
  return (
    <Layout>
      <PageTitle title="Pokémons aquáticos" />
      {loading && <Loading />}

      <ProductList>
        {data.map(x => (
          <Product key={x.id} />
        ))}
      </ProductList>
    </Layout>
  );
};

AquaStorePage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      sprites: PropTypes.shape({
        front_default: PropTypes.string,
      }),
    }),
  ),
  loading: PropTypes.bool.isRequired,
};

AquaStorePage.defaultProps = {
  data: [{}],
};

export default AquaStorePage;
