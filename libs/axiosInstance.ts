import axios, { HeadersDefaults } from 'axios';

const axiosClient = axios.create();


// Replace this with our own backend base URL
axiosClient.defaults.baseURL = '';

type headers = {
  'Content-Type': string;
  Accept: string;
  Authorization: string;
};

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
} as any;

export default axiosClient;