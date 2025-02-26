document.getElementById('agreeCheckbox').addEventListener('change', function () {
    const proceedButton = document.getElementById('proceedButton');
    proceedButton.disabled = !this.checked;
});

document.getElementById('termsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'user_guide.html'; // Redirect to User Guide Page
});
