import Axios from 'axios';


const API_BASE_URL = 'https://raw.githubusercontent.com/harpreetkhalsagtbit/country-state-city/develop/src/assets';

const errorHandler = (error: any) => {
  if (error.response.status == 429 || error.response.status == 503) {
    return Promise.reject(error.response.data.message);
  }
};

const defaultOptions = () => ({
  headers: {
    Content: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Type': 'application/json',
  },
});

export const AxiosInstance = () => {
    const instance = Axios.create({
      baseURL: `${API_BASE_URL}`,
      ...defaultOptions()
    });
  
    instance.interceptors.response.use((res => res), errorHandler);  
    return instance;
  };