// Assignment code here
// Defining the characters that can be used for the generator
var characters = ["0123456789qwertyuiopasdfghjklzxcvbnm"];
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var charactersSpecial = ["@#$%^&*();<>"];

// Generates prompts for user input on the password generator's parameters
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter a numeric value for the password character length (Must be at least 8 and no more than 128)"));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be at least 8 characters long and not more than 128");
    return "Password length must be entered as a number and between 8 and 128"
  }
  // var specialChoice = confirm("Would you like to include special characters in the password generator?");
  //   if (specialChoice) {
  //   var parameterOne = characters.concat(charactersSpecial);
  //   } else {
  //   var parameterOne = characters;
  //   }
  // var caseChoice = confirm("Would you like to include upper case letters as well?");
  //   if (caseChoice) {
  //   var parameters = parameterOne.concat(upperCase);
  //   } else {
  //   var parameters = parameterOne;
  //   }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
