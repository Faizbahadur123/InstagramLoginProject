document.querySelector('#login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simulate login validation
    if (username === "testuser" && password === "password123") {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }

    // Clear the form fields
    event.target.username.value = '';
    event.target.password.value = '';
});
