// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterAmountRange = document.getElementById
  ('characterAmountRange')
  const characterAmountNumber = document.getElementById
  ('characterAmountNumber')

  characterAmountNumber.addEventListener('input', syncCharacterAmount)
  characterAmountRange.addEventListener('input', syncCharacterAmount)
// Write password to the #password input
function writePassword() 
{
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
