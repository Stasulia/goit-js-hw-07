import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
container.addEventListener('click', imageClick);

const images = galleryItems
.map (({preview, original, description}) => `
<li class = "gallery__item">
<a class = "gallery__link" href='${original}'>
<img loading = 'lazy' class = "gallery__image" src='${preview}' data-source = '${original}' alt = '${description}'/>
</a>
</li>`
)
.join(" ");
container.insertAdjacentHTML('afterbegin', images);

function imageClick(event){
    event.preventDefault();
 if (event.target.nodeName !== "IMG") {
    return;
}
const originalImage = event.target.dataset.source;
const originalAlt = event.target.getAttribute('alt');

const instance = basicLightbox.create(`
  <img src="${originalImage}" alt="${originalAlt}">
`, {
    onShow: (instance) => {document.addEventListener('keydown', closeInstance)},
    onClose: (instance) => {document.removeEventListener('keydown', closeInstance)},
});
instance.show();

function closeInstance(event) {
    if (event.code === "Escape") {
       instance.close();
}
}
}