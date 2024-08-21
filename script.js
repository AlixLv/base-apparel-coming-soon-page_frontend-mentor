// version mobile est version initiale ne nécessitant pas de modifications

let imgMobile = document.getElementById("img");
console.log(imgMobile);

let screenWidth = screen.width;
console.log(screenWidth)


// version Ipad et tablettes
if (screenWidth >= 769){
    imgMobile.src = "base-apparel-coming-soon-master/images/hero-desktop.jpg";
}

// version latop et desktop
// if (screenWidth > 770)