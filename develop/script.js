// Assignment code here
// Variables for the characters that can be used for the generator
var characters = ["qwertyuiopasdfghjklzxcvbnm"];
var upperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var charactersSpecial = ["@#$%^&*();<>"];
var charactersNumeric = ["0123456789"];
// Declaring variables that will store the user's input on the generator's parameters
var userSpecialChoice = [""];
var userCaseChoice = [""]
var userNumericChoice = [""]

// This function generates prompts for user input on the password generator's parameters
// Then stores the chosenParameters and uses them to generate random password
function generatePassword() {
  var specialChoice = confirm("Would you like to include special characters in the password generator?");
    // If the user picked ok to using special characters, they get combined with the base characters
    if (specialChoice === true) {
      userSpecialChoice = characters.concat(charactersSpecial);
    // If user didnt want special characters then only the base characters are included
    } else {
      userSpecialChoice = characters;
    }
  var caseChoice = confirm("Would you like to include upper case letters as well?");
    // If user hit ok their previous choice is combined with upper case letters
    if (caseChoice === true) {
      userCaseChoice = userSpecialChoice.concat(upperCase);
    // If user did not want then their new choice takes the value of their previous one
    } else {
      userCaseChoice = userSpecialChoice;
    }
  var numericChoice = confirm("Would you like to include numbers as well?");
    // If user wanted to include numbers, the previous choice is combined with numbers
    if (numericChoice === true) {
      userNumericChoice = userCaseChoice.concat(charactersNumeric);
    // If user didnt want then their new choice takes the value of their previous choice
    } else {
      userNumericChoice = userCaseChoice;
    }
    // Used this variable to store user parameter selections
    var userParameters = userNumericChoice;
    // Then creating a new variable to store the string selections joined together
    var chosenParameters = userParameters.join("");
    // Last prompt asking for user input 
    // Upon getting a valid answer, the for loop will run and return the randomString which is the generated password
    var passwordLength = parseInt(prompt("Enter a numeric value for the password character length (Must be at least 8 and no more than 128)"));
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password must be at least 8 characters long and not more than 128");
        return "Password length must be entered as a number and between 8 and 128";
      } else {
        var randomString = [];
        for (var i = 0; i < passwordLength; i++) {
          randomString += chosenParameters.charAt(Math.floor(Math.random() * chosenParameters.length));
        }
        console.log(randomString);
        console.log(chosenParameters);
        return randomString;
      }
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
