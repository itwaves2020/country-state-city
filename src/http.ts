import Axios from 'axios';


const API_BASE_URL = 'https://raw.githubusercontent.com/harpreetkhalsagtbit/country-state-city/develop/src/assets';

const errorHandler = (error: any) => {
  if (error.response.status == 429 || error.response.status == 503) {
    return Promise.reject(error.response.data.message);
  }
};

const defaultOptions = () => ({
  headers: {
    "authority": "raw.githubusercontent.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
    Content: 'application/json',
    'pragma': 'no-cache', 
    'upgrade-insecure-requests': '1', 
    'Content-Type': 'application/json',
    // 'Accept-Type': 'application/json',
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