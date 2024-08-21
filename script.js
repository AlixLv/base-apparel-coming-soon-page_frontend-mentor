// version mobile est version initiale ne nécessitant pas de modifications

let imgMobile = document.getElementById("img");
console.log(imgMobile);

let screenWidth = window.innerWidth;
console.log(screenWidth)
console.log(`coucou ${screenWidth}`);

let originalWidth = true;

let button = document.getElementById("svg");
console.log(button);


// version laptop et desktop : changement de l'image
window.addEventListener("window.innerWidth", () => {
    console.log('coucou');
    if (window.innerWidth >= 769 && originalWidth === true) {
        console.log("premier if")
        imgMobile.src = "base-apparel-coming-soon-master/images/hero-desktop.jpg";
        originalWidth = false;
        console.log(originalWidth);
    }
    if (originalWidth === false && window.innerWidth < 769) {
        console.log("deuxième if")
        imgMobile.src = "base-apparel-coming-soon-master/images/hero-mobile.jpg";
        originalWidth = true;
    }
})

//   if (screenWidth >= 769) {
//         console.log("premier if")
//         imgMobile.src = "base-apparel-coming-soon-master/images/hero-desktop.jpg";
//         console.log(originalWidth);
//     }
//  if (screenWidth < 769) {
//         console.log("deuxième if")
//         imgMobile.src = "base-apparel-coming-soon-master/images/hero-mobile.jpg";
//     }


// button.addEventListener("onclick", () => {
//     // si l'input est rempli et s'il remplit les conditions d'adresse mail valide alors on envoie 
//     // si l'input n'est pas rempli OU si adresse mail invalide alors 
//     // - faire apparaître message erreur, 
//     // - faire apparaître image ! d'erreur,
//     // - bordure rouge autour de l'input
// }
// )