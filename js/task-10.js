//  Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
//  в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку
//  Очистити, колекція елементів очищається.

//  Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки
//  <div>, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію
//    getRandomHexColor для отримання кольору.

//  Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені
//  елементи.


//!!!При виконанні завдань замість більш звичного вам циклу for віддавайте перевагу методам масиву,
 // що перебирають(це актуально як для 1 - 3 завдань, так і для 10 - го необов‘язкового).

const inputEl = document.querySelector('input');
const boxesListEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16) 
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputEl.value);
  const boxesArray = new Array(amount).fill(`<div></div>`).join('');
   
  console.log(boxesArray);
  boxesListEl.insertAdjacentHTML('afterbegin', boxesArray);
 
}


function destroyBoxes() {
  boxesListEl.innerHTML = '';
}