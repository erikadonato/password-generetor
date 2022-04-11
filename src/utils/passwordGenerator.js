export const PassWordGenerator = (len, haverLower, haveUpper, HaveSymbols, haveNumbers) => {
    var password = ""; 
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerLetters = upperCaseLetters.toLowerCase
    const numbers = "0123456789"
    const symbols = "!@#$%&*()_-=+,"; 

    function getUppercase(){
        return upperCaseLetters[Math.floor(Math.random()* upperCaseLetters.length)]
    }

    function getLowerCase(){
        return lowerLetters[Math.floor(Math.random()* lowerLetters.length)]
    }

    function getNumber(){
        return numbers[Math.floor(Math.random()* numbers.length)]
    }

    function getSymbol(){
        return symbols[Math.floor(Math.random()* symbols.length)]
    }

    function generatePassword(lenEl, upperEl, lowerEl, numberEl, symbolEl, pwEl){
        const len = lenEl.value;

        let password = "";

        if (upperEl.checked) {
            password += getUppercase();
        }

        if (lowerEl.checked) {
            password += getLowerCase();
        }

        if (numberEl.checked) {
            password += getNumber();
        }

        if (symbolEl.checked) {
            password += getSymbol();
        }

        for (let i = password.length; i < len; i++) {
            const x = generateX(lenEl, upperEl, lowerEl, numberEl, symbolEl, pwEl);
            password += x;
        }

        pwEl.innerText = password;
            
        }

        function generateX(upperEl, lowerEl, numberEl, symbolEl) {
            const xs = [];
            if (upperEl.checked) {
                xs.push(getUppercase());
            }
        
            if (lowerEl.checked) {
                xs.push(getLowerCase());
            }
        
            if (numberEl.checked) {
                xs.push(getNumber());
            }
        
            if (symbolEl.checked) {
                xs.push(getSymbol());
            }
        
            if (xs.length === 0) return "";
        
            return xs[Math.floor(Math.random() * xs.length)];
        }
    
    return password
}