// Assignment code here
var length = window.prompt("Enter a number from 8 to 128 for password length.");
var lowercase = abcdefghijklmnopqrstuvwxyz;
var uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
var numeric = 1234567890;
var special = !@#$%^&*-+;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


    if (confirm("Do you want lowercase characters?") === true) {
      lowercase = true
    }
  if (confirm("Do you want uppercase characters?") === true) {
    uppercase = true
  }
  if (confirm("Do you want numeric characters?") === true) {
    numeric = true
  }
  if (confirm("Do you want special characters?") === true) {
    special = true
  }
  // A choice needs to be validated
  if (lowercase, uppercase, numeric, special = "") {
    window.alert("You need to choose at least one criteria option")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
