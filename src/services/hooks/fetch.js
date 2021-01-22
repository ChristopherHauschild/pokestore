import { useState, useCallback } from 'react';

import api from 'services/api';

const useFetch = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const get = useCallback(async ({ url, config }) => {
    try {
      setLoading(true);
      const response = await api.get(url, config);
      setData(response?.data);
      return Promise.resolve(response?.data);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    get,
    data,
    loading,
  };
};

export default useFetch;
