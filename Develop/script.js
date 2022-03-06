// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowercase = false;
    if (confirm("Do you want lowercase characters?") === true) {
      lowercase = true
    }
  var uppercase = false;
  if (confirm("Do you want uppercase characters?") === true) {
    uppercase = true
  }
  var numeric = false;
  if (confirm("Do you want numeric characters?") === true) {
    numeric = true
  }
  var special = false;
  if (confirm("Do you want special characters?") === true) {
    special = true
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
