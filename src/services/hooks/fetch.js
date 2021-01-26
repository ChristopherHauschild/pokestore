import { useState, useCallback } from 'react';

import { useToast } from 'hooks/toast';

import api from 'services/api';

const useFetch = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const get = useCallback(
    async ({ url, config }) => {
      try {
        setLoading(true);

        const response = await api.get(url, config);

        setData(response?.data);

        return Promise.resolve(response?.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Houve um problema na requisição',
          description: 'Por favor, tente novamente.',
        });

        return Promise.reject(err);
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return {
    get,
    data,
    loading,
  };
};

export default useFetch;
