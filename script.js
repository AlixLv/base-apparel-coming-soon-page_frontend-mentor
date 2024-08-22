let emailInput = document.getElementById("email");
console.log(emailInput);

let button = document.getElementById("svg");
console.log(button);

let errorMessage = document.getElementById("errormessage");
console.log(errorMessage)

let ctaDiv = document.getElementById("cta");

let errorImage = document.createElement("img");
errorImage.src = 'base-apparel-coming-soon-master/images/icon-error.svg';
console.log(`errorImage = ${errorImage}`);

//vérifier qu'il y a une valeur entrée dans l'input
//supprimer les espaces dans l'input
// vérifier que la valeur correspond à une adresse email
// si email invalide -> modification CSS + message d'alerte en-dessous de l'input
// si email valide -> le récupérer dans une variable en JS

function verifyInputIsFilled(emailInput){
    console.log(emailInput.value);

    let value = emailInput.value.trim()
    console.log(`value = ${value}`);
        if (value) {
            // input.dataset.state = 'valid';
            console.log("valid input filled");
            return value;
        } else {
            // input.dataset.state = 'invalid';
            console.log("invalid empty input");
        }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function invalidEmail(){
    emailInput.value = "";
    emailInput.style.backgroundColor = "hsl(0, 93%, 68%)";
    errorMessage.innerText = "Please enter a valid email";
    ctaDiv.appendChild(errorImage);
    // positionner dynamiquement l'image dans la div!!
    errorImage.animate({transform:'translate(0%)'}, {duration: 1000, fill:'forwards'});
}

button.addEventListener("click", () => {
    console.log("coucou");
    valueTrimmed = verifyInputIsFilled(emailInput);
    console.log(`valueTrimmed = ${valueTrimmed}`);
    emailValidation = validateEmail(valueTrimmed);
    console.log(`emailValidation = ${emailValidation}`);

    if (emailValidation === false){
        console.log("je suis dans le if false")
        invalidEmail();
    }
})