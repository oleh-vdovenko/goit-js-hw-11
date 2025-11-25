'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getImagesByQuery from './pixabay-api';
const gallery = document.querySelector('.gallery');
function createImageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li><a class="gallery-link" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a><ul><li><h3>Likes</h3><p>${likes}</p></li><li><h3>Views</h3><p>${views}</p></li><li><h3>Comments</h3><p>${comments}</p></li><li><h3>Downloads</h3><p>${downloads}</p></li></ul></li>`;
}
export default function createGallery(images) {
  imageGallery.refresh();
  return images.map(createImageTemplate).join('');
}
let imageGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
