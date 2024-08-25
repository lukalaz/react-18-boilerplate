import axios from "axios";

// axios.defaults.params["api-key"] = import.meta.env.VITE_NEWS_API_KEY;

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API_KEY,
});

apiRequest.interceptors.request.use((config) => {
  config.params = {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    ...config.params,
  };
  return config;
});

export default apiRequest;
