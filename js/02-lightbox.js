import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

function createImagesMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join("");
}

galleryMarkup.insertAdjacentHTML('beforeend', imagesMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
	captionDelay: 250 
});





