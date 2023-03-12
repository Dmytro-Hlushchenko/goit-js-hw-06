

const inputEl = document.querySelector('#validation-input');
const inputMaxLengthEl = document.querySelector('input[data-length = "6"]');


inputEl.addEventListener('blur', onInputCheck);


function onInputCheck() {
    
    if (inputEl.value.length <= inputMaxLengthEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    }

    else { 
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
       




