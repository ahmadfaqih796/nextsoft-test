function validate(components) {
  let isValidAll = true;
  let validationMessage = {};
  let rules = {
    username: {
      required: "Username harus diisi",
      minlength: { value: 5, message: "Username harus lebih dari 5 karakter" },
      maxlength: {
        value: 40,
        message: "Username harus kurang dari 40 karakter",
      },
    },
    password: {
      required: "Password harus diisi",
      minlength: { value: 8, message: "Password harus lebih dari 8 karakter" },
      maxlength: {
        value: 20,
        message: "Password harus kurang dari 20 karakter",
      },
    },
  };

  Object.keys(rules).forEach((key) => {
    if (key in components) {
      let inputElement = components[key];
      let errorDiv = document.querySelector(`#${key}-error`);

      if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = `${key}-error`;
        errorDiv.classList.add("error-message");
        inputElement.insertAdjacentElement("afterend", errorDiv);
      }

      let value = inputElement.value.trim();
      let errorMessage = "";

      if (rules[key].required && value === "") {
        errorMessage = rules[key].required;
      } else if (
        rules[key].minlength &&
        value.length < rules[key].minlength.value
      ) {
        errorMessage = rules[key].minlength.message;
      } else if (
        rules[key].maxlength &&
        value.length > rules[key].maxlength.value
      ) {
        errorMessage = rules[key].maxlength.message;
      } else if (rules[key].pattern && !rules[key].pattern.value.test(value)) {
        errorMessage = rules[key].pattern.message;
      }

      if (errorMessage) {
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = "red";
        isValidAll = false;
        validationMessage[key] = errorMessage;
      } else {
        errorDiv.textContent = "";
      }
    }
  });

  return { validationMessage, isValidAll };
}

export { validate };
