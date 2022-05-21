// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var generatedPassword = "";
  var size = collectionOfLetters.length;
  for (var i = 0; i < maxLengthPass; ++i)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
