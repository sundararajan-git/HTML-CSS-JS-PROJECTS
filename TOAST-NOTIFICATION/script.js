function showToast(message) {
    const container = document.getElementById('toastContainer');

    const toast = document.createElement('div');
    toast.className = "toast bg-gray-800 text-white px-4 py-2 rounded shadow-md opacity-0";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300);
    }, 3000);
}