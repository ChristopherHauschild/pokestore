import React from 'react';
import PropTypes from 'prop-types';

import { generateRandomValue } from 'utils/randomValue';

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
      <PageTitle title="Pokémon de fogo" />
      <Conditional when={loading}>
        <Loading />
      </Conditional>

      <Conditional when={!loading && !data.length > 0}>
        <EmptyData />
      </Conditional>

      <Conditional when={!loading && data.length > 0}>
        <ProductList>
          {data.map(x => {
            const price = generateRandomValue(0, 2000);
            return (
              <Product
                key={x.id}
                name={x.name}
                image={x.sprites.other['official-artwork'].front_default}
                price={price}
              />
            );
          })}
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
