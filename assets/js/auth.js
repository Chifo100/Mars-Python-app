// Function to generate a random session token (for demonstration purposes)
function generateSessionToken() {
    return 'session-' + Math.random().toString(36).substr(2, 9);
}

// Function to store the session token in sessionStorage
function storeSessionToken(token) {
    sessionStorage.setItem('sessionToken', token);
}

// Function to validate the session token
function validateSessionToken() {
    const token = sessionStorage.getItem('sessionToken');
    if (!token) {
        window.location.href = 'index.html'; // Redirect to Login Page if token is missing
    }
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;

    // Call Google Cloud Function
    fetch('https://your-google-cloud-function-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const token = generateSessionToken();
            storeSessionToken(token);
            window.location.href = 'instructions.html'; // Redirect to Instructions Page
        } else {
            alert(data.message || 'Invalid email or OTP'); // Show specific error message
        }
    })
    .catch(error => console.error('Error:', error));
});

// Validate token on Pages 2 and 3
validateSessionToken();
