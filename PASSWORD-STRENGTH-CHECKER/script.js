const password = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

function checkStrength(pwd) {
    let strength = 0;
    if (pwd.length >= 6) strength++;
    if (pwd.length >= 10) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    return strength;
}

password.addEventListener('input', () => {
    const pwd = password.value;
    const strength = checkStrength(pwd);

    strengthBar.style.width = `${(strength / 5) * 100}%`;

    switch (strength) {
        case 0:
        case 1:
            strengthBar.className = "h-2 w-full bg-red-500 transition-all duration-300";
            strengthText.textContent = "Very Weak";
            break;
        case 2:
            strengthBar.className = "h-2 w-full bg-orange-400 transition-all duration-300";
            strengthText.textContent = "Weak";
            break;
        case 3:
            strengthBar.className = "h-2 w-full bg-yellow-400 transition-all duration-300";
            strengthText.textContent = "Moderate";
            break;
        case 4:
            strengthBar.className = "h-2 w-full bg-blue-400 transition-all duration-300";
            strengthText.textContent = "Strong";
            break;
        case 5:
            strengthBar.className = "h-2 w-full bg-green-500 transition-all duration-300";
            strengthText.textContent = "Very Strong";
            break;
    }
});