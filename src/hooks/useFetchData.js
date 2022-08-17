import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchApiData = (url, fetchAgain) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, fetchAgain]);

  return { loading, response, error };
};

export default useFetchApiData;
