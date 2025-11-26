'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();

  const formData = new FormData(formElem);
  const formValues = Object.fromEntries(formData.entries());
  if (formValues['search-text'].trim() === '') {
    iziToast.show({
      message: `Please enter a search query!`,
      messageColor: 'white',
      messageSize: '20',
      backgroundColor: 'red',
      position: 'center',
      timeout: 2000,
    });
    formElem.reset();
    return;
  }
  showLoader();
  getImagesByQuery(formValues['search-text'].trim())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: 'black',
          messageSize: '20',
          backgroundColor: 'yellow',
          position: 'center',
          timeout: 2000,
        });
        hideLoader();
      } else {
        createGallery(data.hits);
      }
      hideLoader();
    })
    .catch(error => {
      hideLoader();
      iziToast.show({
        message: `Your request is fail!`,
        messageColor: 'white',
        messageSize: '20',
        backgroundColor: 'red',
        position: 'center',
        timeout: 2000,
      });
    });
  formElem.reset();
});
