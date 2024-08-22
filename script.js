let emailInput = document.getElementById("email");
console.log(emailInput);

let button = document.getElementById("svg");
console.log(button);

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
    // let errorImage = document.createElement("img");
    // errorImage.src = 'base-apparel-coming-soon-master/images/icon-error.svg';
    // errorImage.id = "errorImg";
    // console.log(`errorImage = ${errorImage}`);
    emailInput.value = "";
    emailInput.style.border = "1px solid hsl(0, 93%, 68%)";
    let errorMessage = document.getElementById("errormessage");
    console.log(errorMessage)
    errorMessage.style.display ='block';
    // ctaDiv.appendChild(errorImage);
}



button.addEventListener("click", () => {
    let emailValidation;
    let inputValue = verifyInputIsFilled(emailInput);
    if (inputValue === false){
        invalidEmail();
    }
    else {
      emailValidation = validateEmail(inputValue);
    }

    if (emailValidation === false){
        invalidEmail();
        verifyInputIsFilled(emailInput);
        emailValidation = validateEmail(valueTrimmed);
    }
    else if (emailValidation === true) {
        let errorMessage = document.getElementById("errormessage");
        errorMessage.style.display = 'none';
        // ctaDiv.removeChild(ctaDiv.lastChild);
        console.log(`email enregistré = ${emailValidation}`);

    }
});   

