const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

const keyboard = document.getElementById('keyboard');
const inputField = document.getElementById('inputField');

// Generate keys
keys.forEach(key => {
    const btn = document.createElement('button');
    btn.textContent = key;
    btn.className = 'key px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition';
    btn.addEventListener('click', () => {
        inputField.value += key;
        inputField.focus();
    });
    keyboard.appendChild(btn);
});

// Backspace
document.getElementById('backspace').addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
    inputField.focus();
});

// Space
document.getElementById('space').addEventListener('click', () => {
    inputField.value += ' ';
    inputField.focus();
});