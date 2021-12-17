import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api';

const useFetch = (endpoint, numberOfAnswers) => {
  // -- state
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //   -- side effects
  useEffect(() => {
    axios
      .get(`${API}/${endpoint}/${numberOfAnswers}`)
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [endpoint, numberOfAnswers]);
  return [loading, data, error];
};

export default useFetch;
