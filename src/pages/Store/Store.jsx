import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'; // prettier-ignore

import { useStore } from 'hooks/store';
import { useFetch } from 'services/hooks';

import StorePage from './presentation/StorePage';

const Store = () => {
  const firstLoad = useRef(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const { store } = useStore();
  const { get: getStoreData, loading: loadingStore } = useFetch();
  const { get: getPokemon } = useFetch();

  const fetchPokemon = useCallback(async () => {
    const { pokemon } = await getStoreData({ url: `/type/${store}` });
    const pokemonUrl = pokemon.slice(0, 15).map(x => x.pokemon.url);

    setLoadingPokemon(true);

    await Promise.all(
      pokemonUrl.map(async x => {
        const pokemonDetails = await getPokemon({ url: x });
        setPokemonData(oldState => [...oldState, pokemonDetails]);
      }),
    );

    setLoadingPokemon(false);
  }, [getStoreData, getPokemon, store]);

  useEffect(() => {
    if (!firstLoad.current || !store) return;
    firstLoad.current = false;

    fetchPokemon();
  }, [fetchPokemon, store]);

  const isLoading = useMemo(() => {
    return loadingStore || loadingPokemon || firstLoad.current;
  }, [loadingStore, loadingPokemon, firstLoad]);

  const pageTitle = useMemo(() => {
    return store === 'water' ? 'Pokémon aquáticos' : 'Pokémon de fogo';
  }, [store]);

  return (
    <StorePage data={pokemonData} loading={isLoading} pageTitle={pageTitle} />
  );
};

export default Store;
