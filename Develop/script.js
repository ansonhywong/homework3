
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {
  
  var pswLength = 0
  lowerCase = false
  upperCase = false
  numericCharacters = false
  specialCharacters = false

alert("Welcome to Anson's Password Generator!");

alert("Please pick a password between 6 & 100 characters.")

while(pswLength > 100 || pswLength < 6){
  pswLength = prompt("What's your ideal password length?")
  if(pswLength > 100 || pswLength < 6){
    alert("Please read my instructions of a length of 6 or greater but 100 or less.")
  }
}

var criteriaList = []

while(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){

  var lowerCase = confirm("Would you like your password to have lowercase characters?")
  if(lowerCase){

    criteriaList.push('abcdefghijklmnopqrstuvwxyz'.split(''))
  }

  var upperCase = confirm("Would you like your password to have upppercase characters?")
  if(upperCase){

    criteriaList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
  }

  var numericCharacters = confirm("Would you like your password to have numbers?")
  if(numericCharacters){

    criteriaList.push('0123456789Z'.split(''))
  }

  var specialCharacters = confirm("Would you like your password to have special characters?")
  if(specialCharacters){

    criteriaList.push('!@#$%^&*'.split(''))
  }

  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert("Are you dumb? If you want no lowercase, no uppercase, no numeric & no special characters ... what kinda password do you want??")
  }
}
var flattenedArray = criteriaList.flat(1)

var randompsw = []
for(var i = 0; i <criteriaList.length; i++){
  randompsw.push(criteriaList[i][Math.floor(Math.random() * criteriaList[i].length)])
}

var randoms = Array.from({length: pswLength-criteriaList.length}, () => Math.floor(Math.random() * flattenedArray.length));

for(var i = 0; i<randoms.length; i++){
  randompsw.push(flattenedArray[randoms[i]])
}
 return randompsw.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);