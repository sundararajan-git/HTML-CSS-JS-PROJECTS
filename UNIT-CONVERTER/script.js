const category = document.getElementById('category');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');

const units = {
    length: ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
};

function populateUnits() {
    const selected = category.value;
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    units[selected].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        fromUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toUnit.appendChild(option2);
    });
}

category.addEventListener('change', populateUnits);
populateUnits();

function convert() {
    const val = parseFloat(inputValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(val)) {
        result.textContent = 'Enter a valid number';
        return;
    }

    let res;

    if (category.value === 'length') {
        // Convert all to meters first
        const toMeter = {
            'Meter': 1,
            'Kilometer': 1000,
            'Centimeter': 0.01,
            'Millimeter': 0.001,
            'Mile': 1609.34,
            'Yard': 0.9144,
            'Foot': 0.3048,
            'Inch': 0.0254
        };
        res = val * toMeter[from] / toMeter[to];
    } else if (category.value === 'temperature') {
        if (from === 'Celsius') {
            res = to === 'Fahrenheit' ? val * 9 / 5 + 32 : val + 273.15;
        } else if (from === 'Fahrenheit') {
            res = to === 'Celsius' ? (val - 32) * 5 / 9 : (val - 32) * 5 / 9 + 273.15;
        } else if (from === 'Kelvin') {
            res = to === 'Celsius' ? val - 273.15 : (val - 273.15) * 9 / 5 + 32;
        }
    }

    result.textContent = res.toFixed(2) + ' ' + to;
}