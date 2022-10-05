//Получаем рандомное число

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  

}

//Проверяем максимальную длину строки

const checkMaxCommentLength = (comment, maxLength) => {
  return comment.length <= maxLength
}

getRandomNumber();
checkMaxCommentLength();
