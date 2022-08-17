document.getElementById('login-button').addEventListener('click', function () {
    const userEmailField = document.getElementById('email-input');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('password-input');
    const userPassword = userPasswordField.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'pass') {
        window.location.href = '/bank-index.html';
    };
})