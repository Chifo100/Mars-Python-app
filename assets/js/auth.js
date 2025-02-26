// Generate a random session token
function generateSessionToken() {
    return 'session-' + Math.random().toString(36).substr(2, 9);
}

// Store the session token in sessionStorage
function storeSessionToken(token) {
    sessionStorage.setItem('sessionToken', token);
}

// Validate the session token
function validateSessionToken() {
    const token = sessionStorage.getItem('sessionToken');
    if (!token) {
        window.location.href = 'index.html'; // Redirect to Login Page if token is missing
    }
}

// Clear the session token
function clearSessionToken() {
    sessionStorage.removeItem('sessionToken');
}

// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;

    // Simulate a successful login (allow any input)
    const token = generateSessionToken();
    storeSessionToken(token);
    window.location.href = 'instructions.html'; // Redirect to Instructions Page
});

// Validate token on Pages 2 and 3
validateSessionToken();
