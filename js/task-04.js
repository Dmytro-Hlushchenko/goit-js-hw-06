

const counterEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const onDecrementBtn = () => {
    counterEl.textContent = counterValue -=1;
};

const onIncrementBtn = () => {
    counterEl.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener('click', onDecrementBtn);
incrementBtnEl.addEventListener('click', onIncrementBtn);
