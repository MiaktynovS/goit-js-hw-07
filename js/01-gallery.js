import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(createImagesMarkup(galleryItems));

const galleryMarkup = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryMarkup.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
     return`<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
     }).join("")
  
}
// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

// galleryEl.append(...galleryItems);
