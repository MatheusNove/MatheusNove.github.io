const images = [
    "images/PlaceHolderProjectImage.png",
    "images/LogoPlaceHolder.png",
    "images/BackgroundHexa.jpg"
];

let currentImage = 0;

const imageElement =
    document.getElementById("console-image");

/*Button Next*/
document
.querySelector(".next")
.addEventListener("click", () => {

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    imageElement.src =
        images[currentImage];
});

/*Button Prev*/
document
.querySelector(".prev")
.addEventListener("click", () => {

    currentImage--;

    if(currentImage < 0){
        currentImage =
            images.length - 1;
    }

    imageElement.src =
        images[currentImage];
});
