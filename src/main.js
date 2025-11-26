'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  showLoader();
  const formData = new FormData(formElem);
  const formValues = Object.fromEntries(formData.entries());
  getImagesByQuery(formValues['search-text'].trim())
    .then(response => {
      if (
        response.data.hits.length === 0 ||
        formValues['search-text'].trim() === ''
      ) {
        hideLoader();
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: 'white',
          messageSize: '20',
          backgroundColor: 'red',
          position: 'center',
          timeout: 2000,
        });
      } else {
        hideLoader();
        createGallery(response.data.hits);
      }
    })
    .catch(error => {
      console.log('false');
    });
  formElem.reset();
});
