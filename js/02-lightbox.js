import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

const images = galleryItems
.map(({preview, original, description}) => ` 
<li class = 'gallery__item'>
    <a class = "gallery__link" href="${original}">
      <img loading = 'lazy' class = "gallery__image" src=" ${preview} " alt=" ${description} " />
    </a>
</li> `
)
.join(" ");

container.insertAdjacentHTML('afterbegin', images);

const instance = new SimpleLightbox('.gallery a',{
 captionsData: 'alt',
 captionDelay: '250',
});

