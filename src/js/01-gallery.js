// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryListElement = document.querySelector('.gallery');

const createGalleryArray = galleryItems
  .map(({ preview, original, description }) => {
    const createItem = `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>
    `;
    return createItem;
  })
  .join('');

galleryListElement.insertAdjacentHTML('beforeend', createGalleryArray);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});