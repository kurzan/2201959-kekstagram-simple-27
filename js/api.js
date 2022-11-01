const API_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

//Получение данных
const getData = (onSuccess, onError) => fetch(`${API_URL}/data`)
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
    API_URL,
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        return onSucces();
      }

      onError();
    })
    .catch(onError);
};

export {getData, sendData};
