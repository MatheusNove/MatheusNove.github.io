const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    
    const images = card.dataset.images.split(",");
    let currentImage = 0;

const imageElement =
    document.getElementById("console-image");

    const imageElement = card.querySelector(".project-media img");
    const nextButton = card.querySelector(".next");
    const prevButton = card.querySelector(".prev");


    
    function UpdateImage(){
        imageElement.style.opacity = 0;
    
        setTimeout(() => {
    
            imageElement.src = images[currentImage];
    
            imageElement.style.opacity = 1;
    
        }, 300);
    }


    
    /*Button Next*/
    nextButton.addEventListener("click", () => {    
        currentImage++;
    
        if(currentImage >= images.length){
            currentImage = 0;
        }
    
       UpdateImage();
    });

    /*Button Prev*/
    prevButton.addEventListener("click", () => {    
        currentImage--;
    
        if(currentImage < 0){
            currentImage =
                images.length - 1;
        }
    
       UpdateImage();
    });

