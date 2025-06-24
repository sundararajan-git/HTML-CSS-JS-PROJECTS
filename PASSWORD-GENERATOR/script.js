// dom elements
const passwordGenForm = document.getElementById("passwordGenForm");
const passwordEle = document.getElementById("password");

// var
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

// generate handler
const generateHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(passwordGenForm);
  const formJson = Object.fromEntries(formData);
  const password = genPassword(formJson);
  passwordEle.innerText = password;
  calPassStrength(password);
};

const genPassword = (json) => {
  const {
    passwordlength: length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = json;

  let mixHash = "";

  if (includeUppercase) {
    mixHash += uppercaseLetters;
  }
  if (includeLowercase) {
    mixHash += lowercaseLetters;
  }
  if (includeNumbers) {
    mixHash += numberCharacters;
  }
  if (includeSymbols) {
    mixHash += symbolCharacters;
  }

  let password = "";
  for (let i = 0; i <= Number(length); i++) {
    const randomIndex = Math.floor(Math.random() * mixHash?.length);
    password += mixHash[randomIndex];
  }

  return password;
};

const calPassStrength = (password) => {
  // password
  const passwordLength = password?.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);

  let strengthScore = 0;
  strengthScore += Math.min(passwordLength * 2, 40);

  if (hasUppercase) strengthScore += 15;
  if (hasLowercase) strengthScore += 15;
  if (hasNumbers) strengthScore += 15;
  if (hasSymbol) strengthScore += 15;

  if (passwordLength < 8) {
    strengthScore = Math.min(strengthScore, 40);
  }
};

passwordGenForm.addEventListener("submit", generateHandler);
