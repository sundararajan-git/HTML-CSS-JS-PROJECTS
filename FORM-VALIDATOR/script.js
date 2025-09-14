// dom elements
const signUpForm = document.getElementById("signUpForm");

const formHandler = (e) => {
  e.preventDefault();
  const isValidForm = formValidation(signUpForm);
  if (!isValidForm) {
    return null;
  }
  const formData = new FormData(signUpForm);
  const formJson = Object.fromEntries(formData);
  console.log(formJson);
  alert("Successfully submitted");
  signUpForm.reset()
};

const formValidation = (form) => {
  let isValid = true;
  let password = "";
  Array.from(form).forEach((ele) => {
    if (ele.tagName === "INPUT") {
      const errorTag = ele.nextElementSibling;
      if (ele.value.trim() === "") {
        errorTag.textContent = `${ele.previousElementSibling.textContent} is required`;
        isValid = false;
      } else {
        if (ele.name === "email") {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(ele.value)) {
            errorTag.textContent = "Enter a valid email address";
            isValid = false;
          } else {
            errorTag.textContent = " ";
          }
        } else if (ele.name === "password") {
          password = ele.value;
          const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
          if (!passwordPattern.test(ele.value)) {
            errorTag.textContent =
              "Password must be at least 6 characters and include a number and a letter";
            isValid = false;
          } else {
            errorTag.textContent = " ";
          }
        } else if (ele.name === "confirmPassword") {
          if (ele.value !== password) {
            errorTag.textContent = "Passwords do not match";
            isValid = false;
          } else {
            errorTag.textContent = " ";
          }
        } else {
          errorTag.textContent = " ";
        }
      }
    }
  });
  return isValid;
};

// trigers
signUpForm.addEventListener("submit", formHandler);
