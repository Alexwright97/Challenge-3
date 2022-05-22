// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(arrayFromLowToHigh(91, 96)
  ).concat(arrayFromLowToHigh(123, 126))
)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase,
  includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase,
includeNumbers, includeSymbols)

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}
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
