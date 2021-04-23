let form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];

    console.log(values);

    let email = data.get("email");
    let password = data.get("password");
    let repeatedPassword = data.get("repeatPassword");

    if (email.length == 0 || password.length == 0) {
        Swal.fire('Одно из полей не заполнено!', 'Проверьте введенные данные', 'error');
        return;
    }
    if (password != repeatedPassword) {
        Swal.fire('Пароли не совпадают!', '', 'error');
        return;
    }
    if (password.length < 8) {
        Swal.fire('Пароль должен состоять не менее чем из 8 символов', '', 'warning');
        return;
    }
    Swal.fire('Поздравляем!', 'Регистрация пройдена успешно!', 'success');
});