const galleryContainer = document.querySelector('.gallery');
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
];

// Create gallery markup
const galleryMarkup = images.reduce(
  (markup, { preview, original, description }) => {
    return (
      markup +
      `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `
    );
  },
  ''
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Event delegation for opening modal
galleryContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageUrl = e.target.dataset.source;
  console.log(largeImageUrl); // Output the large image URL to console
});

// Include basicLightbox library
const script = document.createElement('script');
script.src =
  'https://cdn.jsdelivr.net/npm/basiclightbox/dist/basicLightbox.min.js';
document.body.appendChild(script);
