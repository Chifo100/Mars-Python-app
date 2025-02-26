setTimeout(() => {
    clearSessionToken(); // Clear the session token
    window.location.href = 'index.html'; // Redirect to Login Page
}, 120000); // 120,000 milliseconds = 120 seconds
