import {sendData} from './api.js';
import {showAlert} from './alerts.js';
import {closeEditForm} from './upload-popup.js';

const uploadPictureForm = document.querySelector('.img-upload__form');

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
    const formData = new FormData(evt.target);
    sendData(
      () => {
        closeEditForm();
        showAlert('success');
      },
      () => showAlert('error'),
      formData
    );
  }
};

export {uploadPictureForm, commentValidate};
