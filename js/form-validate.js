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
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      }
    );
  }
};

export {uploadPictureForm, commentValidate};
