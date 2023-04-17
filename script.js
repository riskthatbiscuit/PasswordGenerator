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

// Entered Code below
function generatePassword() {
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChar = '0123456789';
  const specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  const options = ["lowercase", "uppercase", "numeric", "special"];
  const charList = [lowerChar, upperChar, numericChar, specialChar];
  let password = "";
  
  const minLength = 8;
  const maxLength = 128;
  
  let passwordLength;
  while (true) {
    const promptResponse = prompt('Enter required length of password');
    passwordLength = parseInt(promptResponse);
    if (!isNaN(passwordLength) && passwordLength >= minLength && passwordLength <= maxLength) {
      break;
    }
    alert('password needs to be between ' + minLength + ' and ' + maxLength);
  }
  
  const optionsAnswers = []
  let selectedOptions = 0;
  do {
    for (let i = 0; i < options.length; i++) { 
      optionsAnswers[i]=confirm((i+1) + ". Confirm that you would like to include " + options[i] +  " characters");
      if (optionsAnswers[i]) {
        selectedOptions++;
      }
      loopcount++;
    }
  } while (selectedOptions === 0);

  var charOptions = "";

  for (let i = 0; i < optionsAnswers.length; i++) {
    if (optionsAnswers[i] == true){
      charOptions = charOptions.concat(charList[i]);
      const ranNum = Math.floor(Math.random()*(charList[i]).length);
      const newChar = charList[i].slice(ranNum,ranNum+1);
      password = password.concat(newChar);
    }
  }

  let numRemaining  = passwordLength - password.length;

  for (let i = 0; i < numRemaining; i++) {
    const ranNum = Math.floor(Math.random()*charOptions.length);
    const newChar = charOptions.slice(ranNum,ranNum+1);
    password = password.concat(newChar);
  }

  for (let i = 0; i < 3; i++){
    var ranNum = Math.floor(Math.random()*(password.length));
    password = [password.slice(1, ranNum), password[0], password.slice(ranNum)].join('');
  }

  return password;
}