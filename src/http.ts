import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
});

export const get = async (url: string, params = {}) => {
  return await axiosInstance.get(url, { params });
};
