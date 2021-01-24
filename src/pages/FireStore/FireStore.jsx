import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useFetch } from 'services/hooks';

import FireStorePage from './presentation/FireStorePage';

const FireStore = () => {
  const firstLoad = useRef(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const { get: getFireData, loading: loadingFire } = useFetch(); // prettier-ignore
  const { get: getPokemon } = useFetch(); // prettier-ignore

  const fetch = useCallback(async () => {
    const { pokemon } = await getFireData({ url: '/type/fire' });
    const firePokemonUrl = pokemon.slice(0, 10).map(x => x.pokemon.url);

    setLoadingPokemon(true);

    await Promise.all(
      firePokemonUrl.map(async x => {
        const pokemonDetails = await getPokemon({ url: x });
        setPokemonData(oldState => [...oldState, pokemonDetails]);
      }),
    );

    setLoadingPokemon(false);
  }, [getFireData, getPokemon]);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    fetch();
  }, [fetch]);

  return (
    <FireStorePage data={pokemonData} loading={loadingFire || loadingPokemon} />
  );
};

export default FireStore;
