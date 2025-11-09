
const passwordInput = document.querySelector("input") as HTMLInputElement;
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.querySelector(".fa-eye-slash") as HTMLElement;

toggleBtn?.addEventListener("click", change)

function change() {
    const isPassword: boolean = passwordInput?.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    toggleIcon.classList = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";


}