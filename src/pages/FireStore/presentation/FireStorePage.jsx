import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

import Conditional from 'components/Conditional';

import Loading from 'components/Loading';
import EmptyData from 'components/EmptyData';
import ProductList from 'components/ProductList';
import Product from 'components/Product';

const FireStorePage = ({ data, loading }) => {
  return (
    <Layout>
      <PageTitle title="Pokémons de fogo" />
      <Conditional when={loading}>
        <Loading />
      </Conditional>

      <Conditional when={!loading && !data.length > 0}>
        <EmptyData />
      </Conditional>

      <Conditional when={!loading && data.length > 0}>
        <ProductList>
          {data.map(x => (
            <Product key={x.id} />
          ))}
        </ProductList>
      </Conditional>
    </Layout>
  );
};

FireStorePage.propTypes = {
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

FireStorePage.defaultProps = {
  data: [{}],
};

export default FireStorePage;
