import React, { useEffect, useState } from 'react';

import { useStore } from 'hooks/store';

import HomePage from './presentation/HomePage';

const Home = () => {
  const [previousPath, setPreviousPath] = useState({});

  const { store } = useStore();

  useEffect(() => {
    if (store === 'water') {
      setPreviousPath({ title: 'WaterStore', path: 'water' });
      return;
    }
    if (store === 'fire') {
      setPreviousPath({ title: 'FireStore', path: 'fire' });
      return;
    }
    setPreviousPath({});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <HomePage previousPath={previousPath} />;
};

export default Home;
