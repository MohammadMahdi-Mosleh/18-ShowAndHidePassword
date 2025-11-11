"use strict";
const passwordInput = document.getElementById("password-input");
const btnToggle = document.getElementById("btn-icon-toggle");
const icon = document.querySelector(".fa-solid");
btnToggle.addEventListener("click", showPassword);
function showPassword() {
    let inputType = passwordInput.type;
    const isInputPassword = inputType === "password";
    passwordInput.type = isInputPassword ? "text" : "password";
    if (icon) {
        icon.classList.remove("fa-eye", "fa-eye-slash");
        icon.classList.add("fa-solid", isInputPassword ? "fa-eye-slash" : "fa-eye");
    }
}
