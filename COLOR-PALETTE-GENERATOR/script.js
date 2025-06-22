const generate = document.getElementById("generate");
const container = document.getElementById("colorContainer");
const hexCodes = [];

const genCodes = () => {
  const hexLetters = "0123456789ABCDEF";
  let hexCode = "";
  for (let i = 0; i < 6; i++) {
    const randIndex = Math.floor(Math.random() * 16);
    hexCode += hexLetters[randIndex];
  }
  if (hexCodes.length > 25) {
    hexCodes.length = 0;
  }
  hexCodes.push(hexCode);
};

const generateBtnHandler = () => {
  for (let i = 0; i < 25; i++) {
    genCodes();
  }
  let templates = "";
  hexCodes.map((code) => {
    templates += `<div>
                    <div id="color" style="background-color: #${code}; width: 100px; height: 100px;"></div>
                    <p id="code">#${code}</p>
                  </div>`;
  });
  container.innerHTML = templates;
};

window.addEventListener("DOMContentLoaded", generateBtnHandler);
generate.addEventListener("click", generateBtnHandler);
