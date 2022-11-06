import {uploadPictureButton} from './upload-popup.js';
import {photoPreview} from './picture-scale.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

uploadPictureButton.addEventListener('change', () => {
  const file = uploadPictureButton.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
  }
});

