import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useFetch } from 'services/hooks';

import AquaStorePage from './presentation/AquaStorePage';

const AquaStore = () => {
  const firstLoad = useRef(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const { get: getWaterData, loading: loadingWater } = useFetch(); // prettier-ignore
  const { get: getPokemon } = useFetch(); // prettier-ignore

  const fetch = useCallback(async () => {
    const { pokemon } = await getWaterData({ url: '/type/water' });
    const waterPokemonUrl = pokemon.slice(0, 10).map(x => x.pokemon.url);

    setLoadingPokemon(true);

    await Promise.all(
      waterPokemonUrl.map(async x => {
        const pokemonDetails = await getPokemon({ url: x });
        setPokemonData(oldState => [...oldState, pokemonDetails]);
      }),
    );

    setLoadingPokemon(false);
  }, [getWaterData, getPokemon]);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    fetch();
  }, [fetch]);

  return (
    <AquaStorePage
      data={pokemonData}
      loading={loadingWater || loadingPokemon}
    />
  );
};

export default AquaStore;
