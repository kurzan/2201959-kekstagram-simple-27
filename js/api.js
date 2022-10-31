const PICTURES_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

//Получение данных
const getData = (onSuccess, onError) => fetch(PICTURES_URL)
  .then((response) => response.json())
  .then((descriptions) => {
    onSuccess(descriptions);
  })
  .catch(() => {
    onError('Что-то пошло не так :( Обновите страницу');
  });

//Отправка данных
const sendData = (onSucces, onError, body) => {
  fetch(
    SEND_DATA_URL,
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSucces();
      } else {
        onError();
      }
    })
    .catch(onError);
};

export {getData, sendData};

