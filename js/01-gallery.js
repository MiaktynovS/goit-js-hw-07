import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(createImagesMarkup(galleryItems));

const galleryMarkup = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

function createImagesMarkup() {
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

galleryMarkup.insertAdjacentHTML('beforeend', imagesMarkup);

galleryMarkup.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()

  galleryMarkup.addEventListener('keydown', (evt) => {
    if(evt.code === "Escape"){
    instance.close()
  }
})

}


