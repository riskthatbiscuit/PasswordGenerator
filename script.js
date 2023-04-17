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
  var Password = "";

  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = '0123456789';
  var specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  const minLength = 8;
  const maxLength = 123;
  
  let promptResponse = prompt('Enter required length of password');
  var passwordLength = parseInt(promptResponse);
  
  if (passwordLength >= minLength && passwordLength <= maxLength) {
  } else {
    do {
      passwordLength = prompt('Password needs to be between ' + minLength + ' and ' + maxLength);
    } while (isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength);
  }

  const options = ["lowercase", "uppercase", "numeric", "special"];
  const optionsAnswers = []
  
  var loopcount = 0;
  do {
    for (let i = 0; i < options.length; i++) { 
      if (loopcount >= 4 && loopcount % 4 == 0) {
        alert("At least one option must be selected.");
      }
      optionsAnswers[i]=confirm((i+1) + ". Confirm that you would like to include " + options[i] +  " characters");
      loopcount++;
    }
  } while (!optionsAnswers.includes(true));

  var charOptions = "";
  const charList = [lowerChar, upperChar, numericChar, specialChar];
  console.log(charList)
  console.log(optionsAnswers)

  for (let i = 0; i < optionsAnswers.length; i++) {
    if (optionsAnswers[i] == true){
      charOptions = charOptions.concat(charList[i]);
      const ranNum = Math.floor(Math.random()*(charList[i]).length);
      const newChar = charList[i].slice(ranNum,ranNum+1);
      Password = Password.concat(newChar);
    }
  }

let numRemaining = passwordLength - Password.length;

for (let i = 0; i < numRemaining; i++) {
  const ranNum = Math.floor(Math.random()*charOptions.length);
  const newChar = charOptions.slice(ranNum,ranNum+1);
  Password = Password.concat(newChar);
}


  console.log(charOptions)
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
  console.log(Password);
  return Password;
}
