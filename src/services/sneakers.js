import axios from 'axios';

const API_URL = 'https://the-sneaker-database.p.rapidapi.com';
const API_HEADERS = {
  'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
  'X-RapidAPI-Key': '1d6685f314msh853970c2ea1bc3bp197a1fjsnddb35fa3a5eb',
};

export const getAllShoesAPI = async () => {
  const options = {
    method: 'GET',
    url: `${API_URL}/sneakers`,
    params: { limit: '10' },
    headers: {
      ...API_HEADERS,
    },
  };

  const response = await axios.request(options);
  const axiosResponse = response.data;

  return axiosResponse.results;
};

export const getBrandedShoesAPI = async (brand) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/sneakers`,
    params: { limit: '10', brand: brand },
    headers: {
      ...API_HEADERS,
    },
  };

  const response = await axios.request(options);
  const axiosResponse = response.data;

  return axiosResponse.results;
};

export const getDetailShoeAPI = async (id) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/sneakers/${id}`,
    headers: {
      ...API_HEADERS,
    },
  };

  const response = await axios.request(options);
  const axiosResponse = response.data;

  return axiosResponse.results[0];
};

export const getSearchShoesAPI = async (query) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/search`,
    params: { limit: '20', query: query },
    headers: {
      ...API_HEADERS,
    },
  };

  const response = await axios.request(options);
  const axiosResponse = response.data;

  return axiosResponse.results;
};
