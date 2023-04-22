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

// Password generation function below
function generatePassword() {
  // Setting initial constants to be used in the creation of the password
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChar = '0123456789';
  const specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  const options = ["lowercase", "uppercase", "numeric", "special"];
  const charList = [lowerChar, upperChar, numericChar, specialChar];
  // Setting initial string for password creation
  let password = "";
  // Setting max and min length of password
  const minLength = 8;
  const maxLength = 128;
  
  // Initial question regarding the length of password
  let passwordLength;
  while (true) {
    const promptResponse = prompt('Enter required length of password');
    passwordLength = parseInt(promptResponse);
    if (!isNaN(passwordLength) && passwordLength >= minLength && passwordLength <= maxLength) {
      break;
    }
    alert('password needs to be between ' + minLength + ' and ' + maxLength);
  }
  
  // Looping through the sequence of 4 character options for inclusion in the password
  const optionsAnswers = []
  let selectedOptions = 0;
  do {
    for (let i = 0; i < options.length; i++) { 
      optionsAnswers[i]=confirm((i+1) + "/" + options.length + ". Confirm that you would like to include " + options[i] +  " characters");
      // Adding to master list of characters from which password can be built
      if (optionsAnswers[i]) {
        selectedOptions++;
      }
    }
    // Building check to see that at least one option had been selected
    if (selectedOptions === 0) {
    alert("At least one option must be selected!");
    }
  } while (selectedOptions === 0);

  // Adding one random initial character to password for each option selected in previous step
  let charOptions = "";
  for (let i = 0; i < optionsAnswers.length; i++) {
    if (optionsAnswers[i] == true){
      charOptions += charList[i];
      const ranNum = Math.floor(Math.random()*(charList[i]).length);
      const newChar = charList[i].slice(ranNum,ranNum+1);
      password += newChar;
    }
  }

  // Calculating the number of additional random characters required
  let numRemaining  = passwordLength - password.length;

  // Adding in remaining additional random letters selected from selectedOptions
  for (let i = 0; i < numRemaining; i++) {
    const ranNum = Math.floor(Math.random()*charOptions.length);
    const newChar = charOptions.slice(ranNum,ranNum+1);
    password += newChar;
  }

  // Shuffling the first 4 of the password into the rest so that structure completely random
  for (let i = 0; i < 4; i++){
    var ranNum = Math.floor(Math.random()*(password.length));
    password = [password.slice(1, ranNum), password[0], password.slice(ranNum)].join('');
  }

  return password;
}