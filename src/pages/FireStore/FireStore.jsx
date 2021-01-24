import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useFetch } from 'services/hooks';

import FireStorePage from './presentation/FireStorePage';

const FireStore = () => {
  const firstLoad = useRef(true);

  const [pokemons, setPokemons] = useState([]);
  const [loadingPokemons, setLoadingPokemons] = useState(false);

  const { get: getFireData, loading: loadingFire } = useFetch(); // prettier-ignore
  const { get: getPokemons } = useFetch(); // prettier-ignore

  const fetch = useCallback(async () => {
    const { pokemon } = await getFireData({ url: '/type/fire' });
    const firePokemonsUrl = pokemon.slice(0, 10).map(x => x.pokemon.url);

    setLoadingPokemons(true);

    await Promise.all(
      firePokemonsUrl.map(async x => {
        const pokemonData = await getPokemons({ url: x });
        setPokemons(oldState => [...oldState, pokemonData]);
      }),
    );

    setLoadingPokemons(false);
  }, [getFireData, getPokemons]);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    fetch();
  }, [fetch]);

  return (
    <FireStorePage data={pokemons} loading={loadingFire || loadingPokemons} />
  );
};

export default FireStore;
