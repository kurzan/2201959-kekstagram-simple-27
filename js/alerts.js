import {isEscKey} from './util.js';


const showAlert = (alert) => {
  const alertTemplate = document.querySelector(`#${alert}`).content.querySelector(`.${alert}`);
  const alertElement = alertTemplate.cloneNode(true);

  const alertButton = alertElement.querySelector(`.${alert}__button`);

  //закрытие алерта
  function onCloseAlertElement () {
    alertElement.remove();

    alertButton.removeEventListener('click', onCloseAlertElement);
    document.removeEventListener('click', onOutClick);
    document.removeEventListener('keydown', onEscDowm);
  }

  //закрытие по ESC
  function onEscDowm (evt) {
    if (isEscKey(evt)) {
      onCloseAlertElement();
    }
  }

  //закрытие по клику вне алерта
  function onOutClick (evt) {
    if (evt.target.matches('section')) {
      onCloseAlertElement();
    }
  }

  alertButton.addEventListener('click', onCloseAlertElement);
  document.addEventListener('click', onOutClick);
  document.addEventListener('keydown', onEscDowm);

  document.body.appendChild(alertElement);
};

export {showAlert};
