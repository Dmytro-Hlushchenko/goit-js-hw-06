
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
    let x = event.currentTarget.value;

    textEl.style.fontSize = `${event.currentTarget.value}px`;
};
