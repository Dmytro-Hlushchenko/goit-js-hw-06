

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('button.change-color');
const colorCodeEl = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnEl.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = `${color}`;
  colorCodeEl.textContent = `${color}`;
}

