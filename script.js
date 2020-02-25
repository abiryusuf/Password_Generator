// Assignment Code
var generateBtn = document.querySelector("#generate");
var prompt = prompt("how many char");
// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password").value;
  //create an array 
  var value = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz!@$%^&*()_+0123456789"
  
  var password ="";
//get the value
  passwordText.value = password;


// if(!isNaN(parseInt(numOfChars)) && numOfChars >=8 && numOfChars <=128){
//   for(var i =0; i<= prompt; i++){
//     //26+26+9=61
//     password += value.charAt(Math.floor(Math.random()*61));
//   }
//   alert(password);
// }
   for(var i =0; i<= prompt; i++){
//   //   //26+26+9=61
     password += value.charAt(Math.floor(Math.random()*61));
  }
 alert(password);

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  return "password"
}
// var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
