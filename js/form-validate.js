import {sendData} from './api.js';
import {showAlert} from './alerts.js';
import {closeEditForm} from './upload-popup.js';

const uploadPictureForm = document.querySelector('.img-upload__form');
const uploadButton = uploadPictureForm.querySelector('#upload-submit');

//Блокировка кнопки отправки формы
const blockSubmitButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Идет отправка...';
};

//Разблокировка кнопки отправки формы
const unblockSubmitButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
};

//Создание экземплра пристин
const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__text__error',
});

//Действия при нажатии на кнопку отправки формы
const onFormSubmitButton = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        closeEditForm();
        showAlert('success');
        unblockSubmitButton();
      },
      () => {
        showAlert('error');
        unblockSubmitButton();
      },
      formData
    );
  }
};

export {uploadPictureForm, onFormSubmitButton, pristine};
