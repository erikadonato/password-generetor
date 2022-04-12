export function getPassword({len, upperCase, lowerCase, symbols, numbers}) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var passwordLength = len;
    var password = "";

    if(upperCase === false){
        chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()+?><:{}[]";
    }
    if(lowerCase === false ){
        chars = "0123456789ABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    }

    if(numbers === false ) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    }
    if(symbols === false) {
        chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
}