//Получаем рандомное число
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  

};

//Проверяем максимальную длину строки
const checkMaxCommentLength = (comment, maxLength) => {
  return comment.length <= maxLength
};

getRandomNumber();
checkMaxCommentLength();

//описания фотографий
const DESCRIPTION = [
  'Это я на рыбалке',
  'Это я на работе',
  'Это я с друзьями',
  'Это я у своей машины',
  'А тут я дома уже',
];

//получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//создание объекта описания к фото
const createPhotoDescription = () => ({
  id: 0,
  url: '',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 250),
  comments: getRandomNumber(0, 200)
});

//создание массива с объекатами, добавление id и url
const getSimilarDescription = () => {
  arr = Array.from({length: 25}, createPhotoDescription);
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
    arr[i].url = `photos/${arr[i].id}.jpg`
  }

  return arr
}

getSimilarDescription()