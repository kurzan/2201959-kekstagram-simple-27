import {createSimilarPictures} from './thumbnails.js';
import {debounce} from './util.js';

const NUMBER_OF_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const FILTERS = {
  'filter-default': setDefaultFilter,
  'filter-random': setRandomFilter,
  'filter-discussed': setDiscussedFilter,
};

const filterElement = document.querySelector('.img-filters');

function setDefaultFilter (descriptions) {
  return descriptions;
}

function setRandomFilter (descriptions) {
  return descriptions.slice().sort(() => Math.random() - Math.random()).slice(0, NUMBER_OF_RANDOM_PHOTOS);
}

function setDiscussedFilter (descriptions) {
  return descriptions.slice().sort((a, b) => b.comments - a.comments);
}

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

  const changeFilter = (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      removeActiveClass();
      removePhotos();
      evt.target.classList.add('img-filters__button--active');
      createSimilarPictures(FILTERS[evt.target.id](descriptions));
    }
  };

  filterElement.addEventListener('click', debounce(changeFilter, RERENDER_DELAY));
};

export {activateFilter};
