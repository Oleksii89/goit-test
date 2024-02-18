import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://653cc41fd5d6790f5ec84281.mockapi.io',
});

export const requestCatalogCars = async page => {
  const { data } = await instance.get(`/adverts?page=${page}&limit=12`);
  return data;
};
