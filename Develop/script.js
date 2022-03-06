// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "1234567890";
  var special = "!@#$%^&*_-+=";

  // A choice needs to be validated
  if (!(lowercase || uppercase || numeric || special)) {
    alert("You need to pick at least one criteria!");
    return writePassword()
  }
  var length = window.prompt("Enter a number from 8 to 128 for password length.");
};


//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//passwordText.value = password;
