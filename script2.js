// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult ="";
var letters;
var numOfChars;
var upperCase;

//create array for lowercase 
letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");

upperCase ="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var upper = upperCase.split();
//generate the password
function generatePassword(){

     getPrompts();
     var pass = passwordBuild();
     return pass;
  
  
  //console.log(isNaN(parseInt(numOfChars)));

  //length 8-128


  //lowercase


  //uppercase


  //unmeric

  //special characters
 
}

function getPrompts(){
  numOfChars = prompt("How many Charecters do you want ?");
  
}
//To get randon element from array
function getRandomFromArray(ar){
  return ar [parseInt(
    Math.random() * ar.length)]
}

function passwordBuild(){
  //check the number
  if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
    for (var i = 0; i < numOfChars; i++){

      
           addCharArray(lowerCaseArray);
           addCharArrayUpperCase(upperCase);
      
    }
  }
 return passwordResult;
}
//add char
function addCharArray(){
  passwordResult += getRandomFromArray(lowerCaseArray);
}
function addCharArrayUpperCase(){
    passwordResult += getRandomFromArray(upperCase);
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

