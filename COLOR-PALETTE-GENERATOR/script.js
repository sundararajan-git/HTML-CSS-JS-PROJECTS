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

function codeCopy(e) {
  const code = '#' + JSON.parse(e.dataset.code)
  navigator.clipboard.writeText(code).then(() => {
    alert(`Copied -  ${code} `)
  }).catch(() => {
    alert(`Somthing wrong !`)
  })
}

const generateBtnHandler = () => {
  for (let i = 0; i < 25; i++) {
    genCodes();
  }
  let templates = "";
  hexCodes.map((code) => {
    templates += `<div class="color-card" data-code ='${JSON.stringify(code)}' onClick="codeCopy(this)">
      <div id = "color" class= "color-box" style = "background-color: #${code};" ></div>
    <p id="code" class="hex-code">#${code}</p>
        </div> `;
  });
  container.innerHTML = templates;
};



window.addEventListener("DOMContentLoaded", generateBtnHandler);
generate.addEventListener("click", generateBtnHandler);
