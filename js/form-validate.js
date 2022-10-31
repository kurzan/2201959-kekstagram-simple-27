import {sendData} from './api.js';
import {showAlert} from './alerts.js';
import {closeEditForm} from './upload-popup.js';

const uploadPictureForm = document.querySelector('.img-upload__form');
const uploadButton = uploadPictureForm.querySelector('#upload-submit');

const blockSubmitButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Идет отправка...';
};

const unblockSubmitButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
};

const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__text__error',
});

const commentValidate = (evt) => {
  evt.preventDefault();

  const IsValid = pristine.validate();

  if (IsValid) {
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

export {uploadPictureForm, commentValidate};
