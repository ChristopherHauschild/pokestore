import React, { useCallback, useEffect, useRef } from 'react';

import { useFetch } from 'services/hooks';

import AquaStorePage from './presentation/AquaStorePage';

const AquaStore = () => {
  const firstLoad = useRef();

  const { get, data, loading } = useFetch();

  const fetch = useCallback(async () => {
    await get({ url: '/type/water' });
  }, [get]);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = true;

    fetch();
  }, [fetch]);

  return <AquaStorePage data={data} loading={loading} />;
};

export default AquaStore;
