import { validate } from "./validations/authValidation.js";
import AuthService from "./services/authService.js";

document.addEventListener("DOMContentLoaded", () => {
  
  let components = {
    form: document.querySelector("#loginForm"),
    username: document.querySelector("#username"),
    password: document.querySelector("#password"),
  };

  components.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let { isValidAll } = validate(components);
    if (isValidAll) {
      const payload = {
        username: components.username.value,
        password: components.password.value,
      };

      const response = await AuthService.login(payload);
      if (response.accessToken) {
        alert("Login berhasil!");
      } else {
        alert("Login gagal!");
      }
    }
  });
});
