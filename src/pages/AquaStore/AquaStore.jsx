import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useFetch } from 'services/hooks';

import AquaStorePage from './presentation/AquaStorePage';

const AquaStore = () => {
  const firstLoad = useRef(true);

  const [pokemons, setPokemons] = useState([]);

  const { get: getWaterData, loading: loadingWater } = useFetch(); // prettier-ignore
  const { get: getPokemons, loading: loadingPokemons } = useFetch(); // prettier-ignore

  const fetch = useCallback(async () => {
    const { pokemon } = await getWaterData({ url: '/type/water' });
    const waterPokemonsUrl = pokemon.slice(0, 10).map(x => x.pokemon.url);

    await Promise.all(
      waterPokemonsUrl.map(async x => {
        const pokemonData = await getPokemons({ url: x });
        setPokemons(oldState => [...oldState, pokemonData]);
      }),
    );
  }, [getWaterData, getPokemons]);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    fetch();
  }, [fetch]);

  return (
    <AquaStorePage data={pokemons} loading={loadingWater || loadingPokemons} />
  );
};

export default AquaStore;
