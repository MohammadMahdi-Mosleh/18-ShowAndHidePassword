"use strict";
const passwordInput = document.querySelector("input");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.querySelector(".fa-eye-slash");
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", change);
function change() {
    const isPassword = (passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.type) === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleIcon.classList = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
}
