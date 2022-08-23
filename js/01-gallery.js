import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

container.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCards(galleryItems) {
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
}

container.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  // Відкриття модального вікна
  const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  // Закриття модального вікна
  addEventListener("keydown", onKeyPress);
  function onKeyPress(event) {
    if (event.code == "Escape") {
      instance.close();
      document.removeEventListener("keydown", onKeyPress);
    }
  }
}
