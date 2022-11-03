import {createSimilarPictures} from './thumbnails.js';

const NUMBER_OF_RANDOM_PHOTOS = 10;

const filterElement = document.querySelector('.img-filters');

const defaulFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');

const setDefaultFilter = (descriptions) => descriptions;

const setRandomFilter = (descriptions) => descriptions.slice().sort(() => Math.random() - Math.random()).slice(0, NUMBER_OF_RANDOM_PHOTOS);

const setDiscussedFilter = (descriptions) => descriptions.slice().sort((a, b) => b.comments - a.comments);


const removePhotos = () => {
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const removeActiveClass = () => {
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

//Работа фильтров
const activateFilter = (descriptions) => {
  filterElement.classList.remove('img-filters--inactive');

  defaulFilterButton.addEventListener('click', (evt) => {
    removeActiveClass();
    if (evt.target === defaulFilterButton) {
      defaulFilterButton.classList.add('img-filters__button--active');
      removePhotos();
      createSimilarPictures(setDefaultFilter(descriptions));
    }
  });

  randomFilterButton.addEventListener('click', (evt) => {
    removeActiveClass();
    if (evt.target === randomFilterButton) {
      randomFilterButton.classList.add('img-filters__button--active');
      removePhotos();
      createSimilarPictures(setRandomFilter(descriptions));
    }
  });

  discussedFilterButton.addEventListener('click', (evt) => {
    removeActiveClass();
    if (evt.target === discussedFilterButton) {
      discussedFilterButton.classList.add('img-filters__button--active');
      removePhotos();
      createSimilarPictures(setDiscussedFilter(descriptions));
    }
  });
};

export {activateFilter};
