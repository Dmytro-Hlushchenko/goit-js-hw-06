
const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!")
    }

    else
        console.log({ email:email.value, password:password.value });
        event.currentTarget.reset();
}
