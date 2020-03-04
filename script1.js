// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for loewrcase english chars
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");
var numOfChars;
// generate password
function generatePassword() {
    getPrompts();
    var pass = buildPassword();
    return pass;
}
function getPrompts() {
    // get prompts from user
    // length 8 -128
    numOfChars = prompt("how many charecters do you want?");
}
function buildPassword() {
    // check for number and proper length of pass
    if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
        for (var i = 0; i < numOfChars; i++) {
          // TO-DO: check for user password preference
          addCharFromArray(lowerCaseArray);
        }
    }
    return passwordResult;
}
// add char from array func
function addCharFromArray(arr) {
    // build pass
    passwordResult += getRandomFromArray(lowerCaseArray);
}
// utility func to get a random element from array
function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
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

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult ="";
var letters;
var numOfChars;
var upperCase;

//create array for lowercase 
letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");
//uppercase
upperCase ="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var upper = upperCase.split();
//generate the password
function generatePassword(){

     getPrompts();
     var pass = passwordBuild();
     return pass;
  
  
  //console.log(isNaN(parseInt(numOfChars)));


  //uppercase


  //unmeric

  //special characters
 
}

function getPrompts(){
  numOfChars = prompt("How many Charecters do you want ?");
  // do u want lower
//   var lowerC = prompt("lower")
  // dp u want upper 

  
}
//To get random element from array
function getRandomFromArray(arr){
//   var randomIndex = arr [parseInt(Math.random() * arr.length)];
//   var randomEle = arr[randomIndex];
//   return randomEle;

return arr [parseInt(Math.random() * arr.length)];
}

function passwordBuild(){
  //check the number
  //length 8-128

  if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
    for (var i = 0; i < numOfChars; i++){

        var lowerCase2 = "";
        var upperCase2 = "";
           //var passwordResult ="";
           addCharArray(lowerCase2);
           addCharArrayUpperCase(upperCase2);
         console.log(lowerCase2);
         console.log(upperCase2);
        var combine = (lowerCase2) + (upperCase2);
     console.log(combine);
      
    }
    
 return passwordResult;
}
}
//add char
function addCharArray(lowerCase2){
  lowerCase2 += getRandomFromArray(lowerCaseArray);
  return lowerCase2;
}
 function addCharArrayUpperCase(upperCase2){
    upperCase2+= getRandomFromArray(upperCase);
    return upperCase2;
  }
// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value =password;
  passwordResult = "";

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);