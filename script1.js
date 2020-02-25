// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordResult ="";

var letters = "abcdefghijklmnopqurstuvwxyz";
  var  lowerCase=letters.toLowerCase().split("");

//generate the password

function generatePassword(){
    //create an array for lower case 
  

  numOfChars = prompt("how many do want char");

  //check the number 

  if(!isNaN(parseInt(numOfChars)) && numOfChars >=8 && numOfChars <=128){
      for(var i =0; i<numOfChars; i++){

      }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value;
  
  var value = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz!@$%^&*()_+0123456789"
  
  var password ="";

  passwordText.value = password;

  for(var i =0; i<=passwordText; i++){
    password = password + value.charAt(Math.floor(Math.random()*Math.floor(value.length-1)));
  }
  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }