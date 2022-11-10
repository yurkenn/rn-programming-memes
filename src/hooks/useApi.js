// api hook with axios

import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';
const useApi = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key': Config.API_KEY,
          'X-RapidAPI-Host': Config.API_HOST,
        },
      });
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return [data, loading, error, fetchData];
};

export default useApi;
