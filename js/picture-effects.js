import {photoPreview} from './picture-scale.js';

const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

sliderContainer.classList.add('hidden');

const DEFAULT_START = 100;

const SLIDER_OPTIONS = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    postfix: '',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'grayscale',
    postfix: '',
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'sepia',
    postfix: '',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'invert',
    postfix: '%',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'blur',
    postfix: 'px',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    filter: 'brightness',
    postfix: '',
  },
};

let currentEffect = '';
let currentPostfix = '';

const updateSliderOptions = ({range, step, filter, postfix}) => {
  currentEffect = filter;
  currentPostfix = postfix;

  sliderElement.noUiSlider.updateOptions({
    range: range,
    step: step,
    start: DEFAULT_START,
  });
};

//Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

//Получение значения слайдера
sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();

  photoPreview.style.filter = `${currentEffect}(${value}${currentPostfix})`;
  sliderValue.setAttribute('value', value);
});

//Скрытие слайдера
const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

//Показ слайдера
const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

//Сброс эффектов и скрытие слайдера
const resetEffects = () => {
  photoPreview.classList = '';
  photoPreview.style.transform = '';
  photoPreview.style.filter = '';

  hideSlider();
  updateSliderOptions(SLIDER_OPTIONS.none);
};

//Смена эффекта
const onChangeEffect = (evt) => {
  photoPreview.classList = '';
  photoPreview.style.filter = '';
  if (evt.target.value !== 'none') {
    showSlider();
    photoPreview.classList.add(`effects__preview--${evt.target.value}`);
    updateSliderOptions(SLIDER_OPTIONS[evt.target.value]);
  } else {
    hideSlider();
  }
};

effectsList.addEventListener('change', onChangeEffect);


export {resetEffects};

