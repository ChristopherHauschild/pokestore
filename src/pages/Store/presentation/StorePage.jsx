import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useStore } from 'hooks/store';

import Layout from 'components/Layout';
import PageTitle from 'components/PageTitle';

import Conditional from 'components/Conditional';
import Loading from 'components/Loading';
import EmptyData from 'components/EmptyData';
import Pokemon from 'components/Pokemon';

import { List } from './StorePageStyles';

const StorePage = ({ data, loading, pageTitle }) => {
  const { search } = useStore();

  const filteredData = useMemo(() => {
    return search ? data.filter(x => x.name.match(search)) : data;
  }, [data, search]);

  return (
    <Layout>
      <PageTitle title={pageTitle} />
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
        <List>
          {filteredData.map(x => {
            return (
              <Pokemon
                key={x.name}
                name={x.name}
                price={x.price}
                image={x.sprites.other['official-artwork'].front_default}
              />
            );
          })}
        </List>
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
