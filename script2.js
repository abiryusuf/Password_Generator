
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";
var letters;
var numOfChars;
var upperCase;
var lowerCase;
var specialCharacters;
var unimericNum;
//****** 
var lowerAccept;
var upperAccept;
var specialAccept;
var unmericAccept;
//create array for lowercase 
lowerCase = "abcdefghijklmnopqrstuvwxyz";
// ***********
// var lowerCaseArr = lowerCase.split("");
//uppercase
upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

//special characters
specialCharacters ="!@$%^&*()_";

//unmeric 
unimericNum = "0123456789";
// *************
// var upperCaseArr = upperCase.split("");
//generate the password
function generatePassword() {
  getPrompts();
  var pass = passwordBuild();
  return pass;
  //console.log(isNaN(parseInt(numOfChars)));
  //uppercase
  //unmeric
  //special characters
}
function getPrompts() {
  numOfChars = prompt("How many Charecters do you want ?");
  if (!Number.isInteger(numOfChars)) {
    console.log(numOfChars)
    alert("You need a number");
  } else if(Number.isInteger(numOfChars)){
    alert("You need a letter");
  }
  // *************
  //add to the question must be between 8-128
  lowerAccept = confirm("Do you want lower case letters?");
  upperAccept = confirm("Do you want upper case letters?");
  specialAccept = confirm("Do you want special characters");
  unmericAccept = confirm("Do you want unmeric");
}
//To get random element from array
function getRandomFromArray(arr) {
  //   var randomIndex = arr [parseInt(Math.random() * arr.length)];
  //   var randomEle = arr[randomIndex];
  //   return randomEle;
  return arr[parseInt(Math.random() * arr.length)];
}
function passwordBuild() {
  //check the number
  //length 8-128
  // ********************
  
  if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128 && lowerAccept && upperAccept && 
    specialAccept && unmericAccept) {
    var combine = lowerCase + upperCase + specialCharacters + unimericNum
    for (var i = 0; i < numOfChars; i++) {
      addCharArray(combine);
      // addCharArrayUpperCase(upperCase);
      // addCharArrayLowerCase(lowerCase);
      // addCharArraySpecialCase(specialCharacters);
   }

  //   if(!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128 && lowerAccept && upperAccept && 
  //   specialAccept && unmericAccept){
  //      for (var i = 0; i < numOfChars; i++){
  //         addCharArrayUpperCase();
  //     }
        
  //  }
  //  if  (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128 && lowerAccept && upperAccept && 
  //   specialAccept && unmericAccept){
  //      for (var i = 0; i < numOfChars; i++){
  //         addCharArrayLowerCase(lowerCase);
  //     }
        
  //  }
  //  if  (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128 && lowerAccept && upperAccept && 
  //   specialAccept && unmericAccept){
  //      for (var i = 0; i < numOfChars; i++){
  //       addCharArraySpecialCase(specialCharacters);
  //     }
        
  //  }



   //********** */
  } else {
    alert("Must choose a number!")
  }
  return passwordResult;
}

//add char
function addCharArray(arr) {
  passwordResult += getRandomFromArray(arr);
  return passwordResult;
}
function addCharArrayUpperCase(upperCase) {
  passwordResult += getRandomFromArray(upperCase);
  return passwordResult;
}
function addCharArrayLowerCase(lowerCase) {
  passwordResult += getRandomFromArray(lowerCase);
  return passwordResult;
}
function addCharArraySpecialCase(specialCharacters) {
  passwordResult += getRandomFromArray(specialCharacters);
  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordResult = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);