// Assignment code here
// Creates a prompt asking user if they would like to include spoecial characters and upper case letters
var characters = ["0123456789qwertyuiopasdfghjklzxcvbnm"];
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var charactersSpecial = ["@#$%^&*();<>"];

var specialChoice = confirm("Would you like to include special characters in the password generator?");
  if (specialChoice) {
    var parameterOne = characters + charactersSpecial;
  } else {
    var parameterOne = characters;
  }
var caseChoice = confirm("Would you like to include upper case letters as well?")
  if (caseChoice) {
    var parameters = parameterOne + upperCase;
  } else {
    var parameters = parameterOne;
  }

var passwordLength = prompt("Enter a numeric value for the password character length (Must be at least 8 and no more than 128)");
if (passwordLength != Number) {
  alert("Password length must be entered as a number");
  prompt("Try again");
} else if (passwordLength < 8) {
  alert("Password must be at least 8 characters long");
  prompt("Try again");
} else if (passwordLength > 128) {
  alert("Password cannot be longer than 128 characters");
  prompt("Try again");
} else {
  passwordLength = Number;
}

// function generatePassword() {

// }

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
