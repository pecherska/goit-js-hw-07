import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, cardsGallery);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
};







