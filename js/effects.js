import {photoPreview} from './picture-scale.js';

const effectsRadio = document.querySelectorAll('.effects__radio');

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

export {resetEffects};
