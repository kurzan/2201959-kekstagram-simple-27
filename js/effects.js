import {photoPreview} from './picture-scale.js';

const effectsRadio = document.querySelectorAll('.effects__radio');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

effectsRadio.forEach((effect) => {
  effect.addEventListener('change', () => {
    photoPreview.classList = '';
    photoPreview.classList.add(`effects__preview--${effect.value}`);
  });
});

const resetEffects = () => {
  photoPreview.classList = '';
  photoPreview.style.transform = '';
};


//Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

//Получение значения слайдера
sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
});


export {resetEffects};

