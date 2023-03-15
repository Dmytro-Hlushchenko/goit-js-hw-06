

const textInputEl = document.querySelector('#name-input');
const textOutputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', onInput);

function onInput() {
    if (textInputEl.value === "") {
        textOutputEl.textContent = 'Anonymous';
    }

    else {
        textOutputEl.textContent = textInputEl.value;
    }
};