import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useStore } from 'hooks/store';
import { useFetch } from 'services/hooks';

import { generateRandomValue } from 'utils/randomValue';

import StorePage from './presentation/StorePage';

const Store = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const { store } = useStore();
  const { get: getStoreData, loading: loadingStore } = useFetch();
  const { get: getPokemon } = useFetch();

  const fetchPokemon = useCallback(async () => {
    setIsFirstLoad(false);

    const { pokemon } = await getStoreData({ url: `/type/${store}` });
    const pokemonUrl = pokemon.slice(0, 15).map(x => x.pokemon.url);

    setLoadingPokemon(true);

    await Promise.all(
      pokemonUrl.map(async x => {
        const pokemonDetails = await getPokemon({ url: x });
        const price = generateRandomValue(0, 2000);
        const formattedPokemon = { ...pokemonDetails, price };
        setPokemonData(oldState => [...oldState, formattedPokemon]);
      }),
    );

    setLoadingPokemon(false);
  }, [getStoreData, getPokemon, store]);

  useEffect(() => {
    if (!store) return;

    setPokemonData([]);
    fetchPokemon();
  }, [fetchPokemon, store]);

  const isLoading = useMemo(() => {
    return isFirstLoad || loadingStore || loadingPokemon;
  }, [isFirstLoad, loadingStore, loadingPokemon]);

  const pageTitle = useMemo(() => {
    return store === 'water' ? 'Pokémon aquáticos' : 'Pokémon de fogo';
  }, [store]);

  return (
    <StorePage data={pokemonData} loading={isLoading} pageTitle={pageTitle} />
  );
};

export default Store;
