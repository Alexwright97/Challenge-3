// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value =value
}
  // Write password to the #password input
function writePassword() 
{
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
