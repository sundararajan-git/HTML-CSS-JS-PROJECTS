function showToast(message) {
    const container = document.getElementById('toastContainer');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = "toast bg-gray-800 text-white px-4 py-2 rounded shadow-md opacity-0";
    toast.textContent = message;

    // Append toast
    container.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Auto remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300);
    }, 3000);
}