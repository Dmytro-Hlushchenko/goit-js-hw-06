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

const inputEl = document.querySelector('input');
const boxeslistEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = Number.parseInt(inputEl.value);
  let item = []
  for (let i = 0; i < amount; i++) {
    item = document.createElement('div');
    console.loq(item)
  }
  
}