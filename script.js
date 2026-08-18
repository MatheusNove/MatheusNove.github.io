const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    // Get the images belonging to THIS card
    const images = card.dataset.images.split(",");

    let currentImage = 0;

    // Find the elements belonging to THIS card
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

});
