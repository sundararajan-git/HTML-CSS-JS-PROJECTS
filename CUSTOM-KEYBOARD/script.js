
// dom elements
const keyboard = document.getElementById('keyboard');
const inputField = document.getElementById('inputField');
const backSpaceBtn = document.getElementById('backspace');
const spaceBtn = document.getElementById('space')


// var
const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

keys.forEach(key => {
    const btn = document.createElement('button');
    btn.textContent = key;
    btn.className = 'key px-2 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-center cursor-pointer';
    btn.addEventListener('click', () => {
        inputField.value += key?.toLowerCase();
        inputField.focus();
    });
    keyboard.appendChild(btn);
});

backSpaceBtn.addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
    inputField.focus();
});

spaceBtn.addEventListener('click', () => {
    inputField.value += ' ';
    inputField.focus();
});