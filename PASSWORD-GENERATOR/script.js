
// DOM elements
const passwordGenForm = document.getElementById("passwordGenForm");
const passwordEle = document.getElementById("password");
const progressBar = document.getElementById("progressBar");
const strengthLabel = document.querySelector("#passwordStrengthContainer label");

const chars = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()-_=+[]{}|;:,.<>?/",
};

const generateHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(passwordGenForm);
  const formJson = Object.fromEntries(formData);

  const password = genPassword(formJson);
  passwordEle.innerText = password || "⚠️ Select at least one option";
  calPassStrength(password);
};

const genPassword = ({ passwordlength, includeUppercase, includeLowercase, includeNumbers, includeSymbols }) => {
  const length = Number(passwordlength);

  let pool = "";
  let guaranteedChars = [];

  if (includeUppercase) {
    pool += chars.upper;
    guaranteedChars.push(randomChar(chars.upper));
  }
  if (includeLowercase) {
    pool += chars.lower;
    guaranteedChars.push(randomChar(chars.lower));
  }
  if (includeNumbers) {
    pool += chars.number;
    guaranteedChars.push(randomChar(chars.number));
  }
  if (includeSymbols) {
    pool += chars.symbol;
    guaranteedChars.push(randomChar(chars.symbol));
  }

  if (!pool) return "";

  let password = [...guaranteedChars];

  while (password.length < length) {
    password.push(randomChar(pool));
  }

  return password.sort(() => Math.random() - 0.5).join("");
};

const randomChar = (str) => str[Math.floor(Math.random() * str.length)];

const calPassStrength = (password) => {
  if (!password) {
    progressBar.value = 0;
    strengthLabel.innerText = "Weak";
    return;
  }

  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNum = /[0-9]/.test(password);
  const hasSym = /[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/]/.test(password);

  let score = 0;

  score += Math.min(length * 2, 40);
  if (hasUpper) score += 15;
  if (hasLower) score += 15;
  if (hasNum) score += 15;
  if (hasSym) score += 15;

  let label = "Weak";
  if (score >= 80) label = "Strong";
  else if (score >= 50) label = "Medium";

  progressBar.value = score;
  strengthLabel.innerText = label;
};

passwordGenForm.addEventListener("submit", generateHandler);
