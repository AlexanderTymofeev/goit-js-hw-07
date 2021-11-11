import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const imageMarkup = createGalary(galleryItems);

container.insertAdjacentHTML('beforeend', imageMarkup);
container.addEventListener('click', onImageClick);

function onImageClick(event) {

    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
   };
console.log(event.target);
  
const imageItem = event.target.getAttribute('data-source');
const instance = basicLightbox.create(`<img src="${imageItem}" width="800" height="600">`);

instance.show()
}

function createGalary(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        }).join('');
  
}

console.log(galleryItems);


