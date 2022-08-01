import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, cardsGallery);
galleryContainer.addEventListener(`click`, modalOpen);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
};



function modalOpen(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"  width="800" height="600">`
    );
    instance.show();


    window.addEventListener("keydown", onEscPress);
      function onEscPress(event) {
        if (event.code === "Escape") {
            instance.close();
    
        }
    }

};

