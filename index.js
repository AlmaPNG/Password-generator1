generate = document.getElementById("generate")
passwordOne = document.getElementById("password1")
passwordTwo = document.getElementById("password2")
passwordThree = document.getElementById("password3")
passwordFour = document.getElementById("password4")
lengthInput = document.getElementById("input-length")



const Uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const Symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

lengthInput.addEventListener("input", function() {
    length = lengthInput.value
})

generate.addEventListener("click", function() {
    if (lengthInput.value >= 4 && lengthInput.value <= 20) {
        let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        if (document.getElementById("uppercase").checked) {
            characters.push(...Uppercaseletters);
        }
        if (document.getElementById("numbers").checked) {
            characters.push(...Numbers);
        }
        if (document.getElementById("symbols").checked) {
            characters.push(...Symbols);
        }
        let randomPassword1 = "";
        let randomPassword2 = "";
        let randomPassword3 = "";
        let randomPassword4 = "";
        for (let i = 0; i < length; i++) {
            randomPassword1 += characters[Math.floor(Math.random() * characters.length)];
            randomPassword2 += characters[Math.floor(Math.random() * characters.length)];
            randomPassword3 += characters[Math.floor(Math.random() * characters.length)];
            randomPassword4 += characters[Math.floor(Math.random() * characters.length)];
        }
        passwordOne.textContent = randomPassword1;
        passwordTwo.textContent = randomPassword2;
        passwordThree.textContent = randomPassword3;
        passwordFour.textContent = randomPassword4;
    } else {
        alert("Please enter a length between 4 and 16!");
    }
});
 