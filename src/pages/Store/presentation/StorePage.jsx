import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStore } from 'hooks/store';

import Layout from 'components/Layout';

import Conditional from 'components/Conditional';
import Loading from 'components/Loading';
import EmptyData from 'components/EmptyData';
import PokemonCard from 'components/PokemonCard';

import { PageTitle, PokemonList } from './StorePageStyles';

const StorePage = ({ data, loading, pageTitle }) => {
  const { search, setSearch } = useStore();

  const filteredData = useMemo(() => {
    return search ? data.filter(x => x.name.match(search)) : data;
  }, [data, search]);

  useEffect(() => {
    if (!data.length) setSearch(undefined);
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <PageTitle>
        <h2>{pageTitle}</h2>
      </PageTitle>
      <Conditional when={loading}>
        <Loading />
      </Conditional>

      <Conditional when={!loading && !filteredData.length}>
        <EmptyData
          search={search}
          type={search ? 'empty-search' : 'empty-list'}
        />
      </Conditional>

      <Conditional when={!loading && !!filteredData.length}>
        <PokemonList>
          {filteredData.map(x => {
            return (
              <PokemonCard
                key={x.name}
                name={x.name}
                price={x.price}
                image={x.sprites.other['official-artwork'].front_default}
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
      price: PropTypes.number,
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
