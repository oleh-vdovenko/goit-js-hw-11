'use strict';
import axios from 'axios';

export default function getImagesByQuery(query) {
  const server = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '53377567-48fe25733f93d655972fbcb7e',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return server.get();
}
