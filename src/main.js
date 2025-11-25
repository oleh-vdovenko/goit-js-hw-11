'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

const formElem = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
formElem.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const formValues = Object.fromEntries(formData.entries());
  getImagesByQuery(formValues['search-text'])
    .then(res => {
      if (res.data.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!
`,
          messageColor: 'white',
          messageSize: '20',
          backgroundColor: 'red',
          position: 'center',
          timeout: 2000,
        });
      } else {
        gallery.innerHTML = createGallery(res.data.hits);
      }
    })
    .catch(err => err);

  formElem.reset();
});
