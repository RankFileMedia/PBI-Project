document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
  
    //form.addEventListener('submit', function(e) {
    document.getElementById('signUpButton').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default form submission
  
      const firstName = document.getElementById('FirstName').value;
      const lastName = document.getElementById('LastName').value;
      const email = document.getElementById('Email').value;
      const password = document.getElementById('Password').value;
      const passwordConfirmation = document.getElementById('PasswordConfirmation').value;
      const marketingAccept = document.getElementById('MarketingAccept').checked;
      // Collect form data
      const formData = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        password: password.trim(),
        password_confirmation: passwordConfirmation.trim(),
        marketing_accept: marketingAccept,
      };

      if (!firstName || !lastName || !email || !password || !passwordConfirmation) {
        alert('Please fill in all fields.');
        return; // Stop the function if validation fails
      }
      
      if (password !== passwordConfirmation) {
        alert('Passwords do not match.');
        return; // Stop the function if validation fails
      }
  
      // Send a request to your API
      fetch('http://127.0.0.1:5000/login/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        console.log('Success:', data);
        // Handle success (e.g., show a message, redirect, etc.)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show error message)
      });
    });
  });