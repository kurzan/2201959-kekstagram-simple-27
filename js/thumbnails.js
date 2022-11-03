import {getData} from './api.js';
import { showFilter } from './filters.js';
import {showAlert} from './util.js';

const filterElement = document.querySelector('.img-filters');

//находим контейнер для миниматюр
const picturesContainer = document.querySelector('.pictures');

//находим шаблон для минатюр
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderSimilarPictures = (descriptions) => {
//создаем фрагмент для миниатюр
  const picturesFragment = document.createDocumentFragment();

  //перебираем описания и добавлем к шаблонам, шаблоны помещаем во фрагмент
  descriptions.forEach(({url, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });

  //добавленяем фрагмент к основному контейнеру с миниатюрами
  picturesContainer.appendChild(picturesFragment);
};


getData(renderSimilarPictures, showAlert)
  .then(showFilter);
