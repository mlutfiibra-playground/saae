import axios from 'axios';

const createAPI = (baseURL, config = {}) => {
  const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...config,
  });

  // setup axios.intercept
  return axiosInstance;
};

const MY_AXIOS = createAPI();

export default MY_AXIOS;
