function myFunction() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction2() {
    var x = document.getElementById("confirmar_senha");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var password = document.getElementById("senha")
    , confirm_password = document.getElementById("confirmar_senha");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas não correspondem");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;