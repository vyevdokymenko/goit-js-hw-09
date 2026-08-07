import images from './gallery-images';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryDiv = document.querySelector('.gallery');

const galleryItems = [];
for (const image of images) {
  const { preview, original, description } = image;
  galleryItems.push(`
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"/>
    </a>
    </li>
  `);
}
galleryDiv.insertAdjacentHTML('beforeend', galleryItems.join(''));

new SimpleLightbox(
  '.gallery a',
  {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  }
);
