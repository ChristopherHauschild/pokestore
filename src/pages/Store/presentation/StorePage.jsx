import React from 'react';
import PropTypes from 'prop-types';

import { generateRandomValue } from 'utils/randomValue';

import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

import Conditional from 'components/Conditional';

import Loading from 'components/Loading';
import EmptyData from 'components/EmptyData';
import PokemonList from 'components/PokemonList';
import Pokemon from 'components/Pokemon';

const StorePage = ({ data, loading, pageTitle }) => {
  return (
    <Layout>
      <PageTitle title={pageTitle} />
      <Conditional when={loading}>
        <Loading />
      </Conditional>

      <Conditional when={!loading && !data.length > 0}>
        <EmptyData />
      </Conditional>

      <Conditional when={!loading && data.length > 0}>
        <PokemonList>
          {data.map(x => {
            const price = generateRandomValue(0, 2000);
            return (
              <Pokemon
                key={x.id}
                id={x.id}
                name={x.name}
                image={x.sprites.other['official-artwork'].front_default}
                price={price}
              />
            );
          })}
        </PokemonList>
      </Conditional>
    </Layout>
  );
};

StorePage.propTypes = {
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
  pageTitle: PropTypes.string.isRequired,
};

StorePage.defaultProps = {
  data: [{}],
};

export default StorePage;
