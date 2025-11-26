const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const loginBtn = document.getElementById('loginBtn');
const btnText = loginBtn.querySelector('.btn-text');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Toggle Password Visibility
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
        togglePasswordBtn.classList.replace('ph-eye', 'ph-eye-slash');
    } else {
        togglePasswordBtn.classList.replace('ph-eye-slash', 'ph-eye');
    }
});

// Handle Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        showToast('Please fill in both fields', 'error');
        return;
    }

    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        showToast(`Welcome back, ${username}!`, 'success');
    }, 1500);
});

// Loading state
function setLoading(isLoading) {
    if (isLoading) {
        loginBtn.classList.add('loading');
        btnText.textContent = 'Signing in...';
    } else {
        loginBtn.classList.remove('loading');
        btnText.textContent = 'Sign In';
    }
}

// Toast Notification
function showToast(message, type = 'default') {
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;

    const icon = toast.querySelector('i');
    if (type === 'success') icon.className = 'ph ph-check-circle';
    else if (type === 'error') icon.className = 'ph ph-warning-circle';
    else icon.className = 'ph ph-info';

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
