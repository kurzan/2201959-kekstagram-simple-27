const PICTURES_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onError) => fetch(PICTURES_URL)
  .then((response) => response.json())
  .then((descriptions) => {
    onSuccess(descriptions);
  })
  .catch(() => {
    onError('Что-то пошло не так :( Обновите страницу');
  });


const sendData = (onSucces, onError, body) => fetch(
  SEND_DATA_URL,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body,
  }
);

export {getData, sendData};

