const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    event.preventDefault();
});

function sendForm() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Correo electrónico no válido. Introduzca una dirección de correo electrónico válida.';
    }
}

function sendReview() {
    const newPath = 'thankyou.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Correo electrónico no válido. Introduzca una dirección de correo electrónico válida.';
    }
}

const numericInputs = document.querySelectorAll("[inputmode='numeric']");

numericInputs.forEach((input) => {
    validateInput(input);
});

function validateInput(el) {
    el.addEventListener('beforeinput', function (e) {
        let beforeValue = el.value;
        e.target.addEventListener(
            'input',
            function () {
                if (el.validity.patternMismatch) {
                    el.value = beforeValue;
                }
            },
            { once: true },
        );
    });
}
