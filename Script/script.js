
let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    isValid = true;

    /*Primeiro vamos pegar todos os inputs e seus tipos pelo name */
    const inputFirstName = document.querySelector('input[name="firstName"]');
    const inputLastName = document.querySelector('input[name="lastName"]');
    const inputEmail = document.querySelector('input[name="email"]');
    const queryChecked = document.querySelector('input[name="check"]:checked');
    const inputMessage = document.querySelector('textarea[name="message"]');
    const consent = document.querySelector('#consentCheck');

    /* Apagando os erros, quando o usuário preenche-los novamente, sem a necessidade de recarregar a página */
    const allErrorsMessage = document.querySelectorAll('.MessageError');
    allErrorsMessage.forEach(error =>
        error.classList.remove("MessageErrorShow")
    );

    const allInputErrors = document.querySelectorAll('.inputError');
    allInputErrors.forEach(input =>
        input.classList.remove('inputError')
    );

    /* Pré monto as validações por IFs */
    if (inputFirstName.value.trim() === "") {
        showError(inputFirstName);
        isValid = false
    }

    if (inputLastName.value.trim() === "") {
        showError(inputLastName);
        isValid = false
    }

    if (!validateEmail(inputEmail.value)) {
        showError(inputEmail);
        isValid = false
    }

    if (!queryChecked) {
        document.querySelector(".container__aside .MessageError").classList.add("MessageErrorShow");
        isValid = false
    }

    if (inputMessage.value.trim() === "") {
        showError(inputMessage);
        isValid = false;
    }

    if (!consent.checked) {
        document.querySelector(".container__footer > .MessageError").classList.add("MessageErrorShow");
        isValid = false;
    }

    if (isValid) {
        const formSuccess = document.querySelector(".successMessage");
        formSuccess.classList.add("successMessageActive")


        setTimeout(() => {
            formSuccess.classList.remove("successMessageActive");
            form.reset();
        }, 3000)
    };
}
)

function showError(input) {
    input.classList.add("inputError");
    input.parentElement.querySelector(".MessageError").classList.add("MessageErrorShow");
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}





