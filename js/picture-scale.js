const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;

function setScaleOnImg() {
  const currentValue = parseFloat(scaleValue.value);
  photoPreview.style.transform = `scale(${currentValue / 100})`;
}

const smallerValue = () => {
  const currentScaleValue = parseFloat(scaleValue.value);
  if (currentScaleValue > MIN_SCALE_VALUE) {
    scaleValue.value = `${currentScaleValue - SCALE_STEP}%`;

    setScaleOnImg();
  }
};

const biggerValue = () => {
  const currentScaleValue = parseFloat(scaleValue.value);
  if (currentScaleValue < MAX_SCALE_VALUE) {
    scaleValue.value = `${currentScaleValue + SCALE_STEP}%`;

    setScaleOnImg();
  }
};

smallerButton.addEventListener('click', smallerValue);
biggerButton.addEventListener('click', biggerValue);


export {photoPreview};
