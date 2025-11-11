const passwordInput = document.getElementById(
  "password-input"
) as HTMLInputElement;
const btnToggle = document.getElementById(
  "btn-icon-toggle"
) as HTMLButtonElement;
const icon = document.querySelector(".fa-solid");

btnToggle.addEventListener("click", showPassword);

function showPassword() {
  let inputType: string = passwordInput.type;
  const isInputPassword: boolean = inputType === "password";

  passwordInput.type = isInputPassword ? "text" : "password";

  if (icon) {
    icon.classList.remove("fa-eye", "fa-eye-slash");
    icon.classList.add("fa-solid", isInputPassword ? "fa-eye-slash" : "fa-eye");
  }
}
