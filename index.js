
// Form validation for login and register pages
document.addEventListener('DOMContentLoaded', function () {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            let valid = true;
            let message = '';
            if (!validateEmail(email)) {
                valid = false;
                message = 'Please enter a valid email address.';
            } else if (password.length < 6) {
                valid = false;
                message = 'Password must be at least 6 characters.';
            }
            if (!valid) {
                e.preventDefault();
                showAlert(message);
            } else {
                e.preventDefault();
                showUserMessage('Login successful! Welcome back.', true);
            }
        });
    }

    // Register form validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            const name = document.getElementById('register-name').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value;
            let valid = true;
            let message = '';
            if (name.length < 2) {
                valid = false;
                message = 'Name must be at least 2 characters.';
            } else if (!validateEmail(email)) {
                valid = false;
                message = 'Please enter a valid email address.';
            } else if (password.length < 6) {
                valid = false;
                message = 'Password must be at least 6 characters.';
            }
            if (!valid) {
                e.preventDefault();
                showAlert(message);
            } else {
                e.preventDefault();
                // Store user data in localStorage as JSON
                const userData = { name, email, password };
                localStorage.setItem('user', JSON.stringify(userData));
                // Clear the form
                registerForm.reset();
                showUserMessage('Registration successful! Redirecting to login...', true);
                // Redirect to login page after short delay
                setTimeout(function() {
                    window.location.href = 'login.html';
                }, 1500);
            }
        });
    }
});

// Show user message after successful login/register
function showUserMessage(message, success) {
    // Remove existing alert
    const oldAlert = document.querySelector('.form-alert');
    if (oldAlert) oldAlert.remove();
    const msg = document.createElement('div');
    msg.className = 'form-alert';
    msg.textContent = message;
    msg.style.background = success ? '#e6ffed' : '#ffeded';
    msg.style.color = success ? '#388e3c' : '#d32f2f';
    msg.style.padding = '0.7rem';
    msg.style.marginBottom = '1rem';
    msg.style.borderRadius = '6px';
    msg.style.textAlign = 'center';
    const form = document.querySelector('form');
    if (form) form.parentNode.insertBefore(msg, form);
}

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showAlert(message) {
    // Remove existing alert
    const oldAlert = document.querySelector('.form-alert');
    if (oldAlert) oldAlert.remove();
    // Create new alert
    const alert = document.createElement('div');
    alert.className = 'form-alert';
    alert.textContent = message;
    alert.style.background = '#ffeded';
    alert.style.color = '#d32f2f';
    alert.style.padding = '0.7rem';
    alert.style.marginBottom = '1rem';
    alert.style.borderRadius = '6px';
    alert.style.textAlign = 'center';
    // Insert alert above the form
    const form = document.querySelector('form');
    if (form) form.parentNode.insertBefore(alert, form);
}
