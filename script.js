const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const projectCards = document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    const images = card.dataset.images.split(",");

    let currentImage = 0;

    const imageElement = card.querySelector(".project-media img");
    const nextButton = card.querySelector(".next");
    const prevButton = card.querySelector(".prev");


    function updateImage() {

        imageElement.style.opacity = 0;

        setTimeout(() => {
            imageElement.src = images[currentImage];
            imageElement.style.opacity = 1;
        }, 300);
    }

    nextButton.addEventListener("click", () => {
        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }
        updateImage();
    });

    prevButton.addEventListener("click", () => {
        currentImage--;

        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
        updateImage();
    });

    /*LightBox Click*/
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.style.display = "flex";
    });
    
});



/*LightBox Close Click*/
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/*LightBox Close ESC*/
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});



