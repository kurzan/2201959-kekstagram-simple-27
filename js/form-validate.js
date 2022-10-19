const uploadPictureForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form_comment_error',
});

const commentValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

export {uploadPictureForm, commentValidate};
