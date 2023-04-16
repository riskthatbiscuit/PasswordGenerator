// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// Need a variable to store the password as it's being built!
  Password = "";
// Need a variable for our mega-array of characters
// TODO
// Need to ask the user how long the password should be
  // prompt()
  // ^ that needs to be stored in a variable
  const minLength = 8;
  const maxLength = 123;
  
  let passwordLength = prompt('Enter required length of password');
  if (passwordLength >= minLength && passwordLength <= maxLength) {
    // code to execute if the password length is within the valid range
  } else {
    do {
      passwordLength = prompt('Password needs to be between ' + minLength + ' and ' + maxLength);
    } while (passwordLength < minLength || passwordLength > maxLength);
    // code to execute after the user enters a valid password length
  }

  const options = ["lowercase", "uppercase", "numeric", "special characters"];
  const optionsAnswers = []

  for (let i = 0; i < options.length; i++) { 
    optionsAnswers[i]=confirm("Confirm that you would like to include " + options[i]);
  }

  console.log(options);
  console.log(optionsAnswers);

// Confirm whether to use uppercase letters, lowercase letters, numbers, and/or special characters
  // ^ each of those needs to be stored in a variable
  // Need to check whether the user selected a valid password length
// Need to check whether the user selected at least one character type
  // If not, prompt them again OR alert that the input wasn't valid and start over
// Need to make sure that at least one character is chosen from each character type
  // When the user selects a character type, generate a random character from that character set and concatenate it to the unfinished password
    // Generate a random character: Math.floor(Math.random() * array.length) gives me the random index, NOT the random character!
    // Can use .charAt()
    // OR array[Math.floor(Math.random() * array.length)]
    // Once we have the actual character, concatenate it to the variable that's storing our unfinished password
  // Push that character set to the mega-array
// Once we have our mega-array:
  // for loop:
    // Generate a random character: Math.floor(Math.random() * megaArray.length) gives me the random index, NOT the random character!
    // Can use .charAt()
    // OR array[Math.floor(Math.random() * megaArray.length)]
    // Once we have the actual character, concatenate it to the variable that's storing our unfinished password
    // Start at i = unfinishedPassword.length
    // Go as long as i < passwordLength  


// return unfinishedPassword
  Password = passwordLength;
  return Password;
}
