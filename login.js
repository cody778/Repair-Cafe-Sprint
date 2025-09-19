// Simple JavaScript for login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert("Logged in as: " + username);
    // Add real login logic here (API request, validation, etc.)
  } else {
    alert("Please enter username and password");
  }
});