export function getPassword({len, upperCase, lowerCase, symbols, numbers}) {
    var charsNumber = "0123456789";
    var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var charUpperCase = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    var charSymbols = "!@#$%^&*()+?><:{}[]";
    var chars = "";
   
    var passwordLength = len;
    var password = "";
    
    if(upperCase){
        chars += charUpperCase
    }
    if(lowerCase){
        chars += charLowerCase
    }
    if(symbols){
        chars += charSymbols
    }
    if(numbers){
        chars+= charsNumber
    }


    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    
    return password
}