document.getElementById('search').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.tip-card').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
});
function checkAge(age) {
    if (age < 18) {
        alert("You are too young");
    } else if (age > 50) {
        alert("You are too old");
    } else {
        return("You are within the acceptable age range");
    }
}
function passwardValidator(password) {
    const minLength = 8;
    
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    if (password.length < minLength) {
        alert("Password must be at least 8 characters long");
    } else if (!hasUpperCase) {
        alert("Password must contain at least one uppercase letter");
    } else if (!hasLowerCase) {
        alert("Password must contain at least one lowercase letter");
    } else if (!hasNumber) {
        alert("Password must contain at least one number");
    } else if (!hasSpecialChar) {
        alert("Password must contain at least one special character");
    } else {
        return("Password is valid");
    }
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
}


function login(user, password) {
    if (!user || !password) {
        alert("Please enter both username and password");
    }
    // Simulate a login process
    if (user === "admin" && password === "password") {
        alert("Login successful");
    } else {
        alert("Invalid username or password");
    }
    Document.getElementById(login)
}
