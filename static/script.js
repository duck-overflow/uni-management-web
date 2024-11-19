function submitLoginForm() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Formulardaten an den Server senden
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("loginResponse").innerText = "Antwort vom Server: " + data.message;
        })
        .catch(error => console.error('Fehler:', error));
}

function submitRegisterForm() {
    const username = document.getElementById('registerUsername').value;
    const mail = document.getElementById('registerMail').value;
    const password = document.getElementById('registerPassword').value;

    

}


document.addEventListener('DOMContentLoaded', () => {
    // LOGIN FORM
    const loginForm = document.getElementById('loginForm');
    const submitLoginButton = document.getElementById('loginButton');

    const validateLogForm = () => {
        const isValid = loginForm.checkValidity();
        submitLoginButton.disabled = !isValid;
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitLoginForm();
    });

    const loginInputs = loginForm.querySelectorAll('input');
    loginInputs.forEach(input => {
        input.addEventListener('input', validateLogForm);
    });

    validateLogForm();

    // REGISTER FORM
    const registerForm = document.getElementById('registerForm');
    const submitRegisterButton = document.getElementById('registerButton');
    const registerMAIL = document.getElementById('registerMail');
    const reregisterMAIL = document.getElementById('reregisterMail');
    const registerPassword = document.getElementById('registerPassword');
    const reregisterPassword = document.getElementById('reregisterPassword');
    const mailError = document.getElementById('mailerror');
    const passwordError = document.getElementById('passworderror');
    let matchingPasswd = false;
    let matchingMail = false;

    const validateRegForm = () => {
        const isValid = registerForm.checkValidity();

        if (isValid && matchingMail && matchingPasswd) {
            submitRegisterButton.disabled = false;
        } else {
            submitRegisterButton.disabled = true;
        }
    };

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // E-Mails validieren
        if (registerMAIL.value !== reregisterMAIL.value) {
            mailError.style.display = 'block';
            matchingMail = false;
        } else {
            mailError.style.display = 'none';
            matchingMail = true;
        }

        // Passwörter validieren
        if (registerPassword.value !== reregisterPassword.value) {
            passwordError.style.display = 'block';
            matchingPasswd = false;
        } else {
            passwordError.style.display = 'none';
            matchingPasswd = true;
        }
    });

    reregisterPassword.addEventListener('input', () => {
        if (registerPassword.value === reregisterPassword.value) {
            passwordError.style.display = 'none';
            matchingPasswd = true;
        } else {
            passwordError.style.display = 'block';
            matchingPasswd = false;
        }
    });

    reregisterMAIL.addEventListener('input', () => {
        if (registerMAIL.value === reregisterMAIL.value) {
            mailError.style.display = 'none';
            matchingMail = true;
        } else {
            mailError.style.display = 'block';
            matchingMail = false;
        }
    });

    const registerInputs = registerForm.querySelectorAll('input');
    registerInputs.forEach(input => {
        input.addEventListener('input', validateRegForm);
    });

    validateRegForm();
});
