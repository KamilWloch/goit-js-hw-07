import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector("ul.gallery");

const galleryImages = galleryItems
    .map(image => 
        `<div class = "gallery__item">
            <a class = "gallery__link" href = "${image.original}">
                <img class = "gallery__image" data-source = "${image.original}" src = "${image.preview}" alt = "${image.description}" />
            </a>
        </div>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryImages);
console.log(gallery);

gallery.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") return;

    const handleEscapeKey = e => { if (e.key === "Escape") instance.close() };

    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,
        {
            onShow: () => {
                document.addEventListener("keydown", handleEscapeKey);
            },
            onClose: () => {
                document.removeEventListener("keydown", handleEscapeKey);
            },
        });
    
    instance.show();

});

// gallery.innerHTML = markup;

// let instance;

// gallery.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     const modal = document.createElement("div");
//     const newPic = document.createElement("img");
//     newPic.src = event.target.getAttribute("data-source");
//     modal.append(newPic);

//     instance = basicLightbox.create(modal);

//     function closeHandler() {
//         instance.close();
//         modal.removeEventListener("click", closeHandler);
//     }
//     instance.show();
//     modal.addEventListener("click", closeHandler);
// });

// document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//         instance.close();
//     }
// });

// console.log(galleryItems);
