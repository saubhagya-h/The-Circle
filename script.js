function checkPassword() {
    // Get the password entered by the user
    var password = document.getElementById("password").value;

    // Check if the password is correct (replace "your_password" with the actual password)
    if (password === "sassy_saharsh") {
      // Redirect to the desired webpage (replace "https://example.com/newpage.html" with the actual URL)
      window.location.href = "ss.html";
    } else {
      // Display an error message if the password is incorrect
      alert("Incorrect password. Please try again.");
    }

    // Prevent the form from submitting
    return false;
}
