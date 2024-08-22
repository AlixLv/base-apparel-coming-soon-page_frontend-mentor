let emailInput = document.getElementById("email");
console.log(emailInput);

let button = document.getElementById("svg");
console.log(button);

let errorMessage = document.getElementById("errormessage");
console.log(errorMessage)

let ctaDiv = document.getElementById("cta");



function verifyInputIsFilled(emailInput){
    console.log(emailInput.value);

    let value = emailInput.value.trim()
    console.log(`value = ${value}`);
        if (value) {
            // input.dataset.state = 'valid';
            console.log("valid input filled");
            return value;
        } else {
            console.log("invalid empty input");
            return false;
        }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function invalidEmail(){
    let errorImage = document.createElement("img");
    errorImage.src = 'base-apparel-coming-soon-master/images/icon-error.svg';
    errorImage.id = "errorImg";
    console.log(`errorImage = ${errorImage}`);
    emailInput.value = "";
    emailInput.style.border = "1px solid hsl(0, 93%, 68%)";
    errorMessage.innerText = "Please enter a valid email";
    ctaDiv.appendChild(errorImage);
}


button.addEventListener("click", () => {
    console.log("coucou");
    inputValue = verifyInputIsFilled(emailInput);
    console.log(`valueTrimmed = ${inputValue}`);
    emailValidation = validateEmail(inputValue);
    console.log(`emailValidation = ${emailValidation}`);

    if (emailValidation === false){
        console.log("je suis dans le if false")
        invalidEmail();
        verifyInputIsFilled(emailInput);
        validateEmail(valueTrimmed);
    }
    else if (emailValidation === true){
        newEmail = emailInput.value;
        console.log(`newEmail = ${newEmail}`);
        console.log("je suis dans le if true");
    }
})

// je tappe mon email,
// il est vérifié par verifyInputIsFilled et stocké dans valueTrimmed
// puis il vérifié par validateEmail

// s'il est invalide :
// je retappe mon email,
// il est vérifié par verifyInputIsFilled

// Tant que inputValue est égale à false,
// je lance verifyInputIsFilled

// si inputValue est différente de false 
// alors je lance validateEmail

// si validateEmail retourne true alors 
// je stocke l'email dans la variable newEmail

// si validateEmail retourne false
// Tant que validateEmail retourne false je lance validateEMail