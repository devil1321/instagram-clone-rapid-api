class HOME_CAROUSEL {
    constructor() {
        this.handlePrev = () => {
            this.carousel.style.transform = 'translate(0%)';
        };
        this.handleNext = () => {
            this.carousel.style.transform = 'translate(-27%)';
        };
        this.carouselWrapper = document.querySelector('.home__carousel-wrapper');
        this.carousel = document.querySelector('.home__carousel');
        this.carouselPrev = document.querySelector('.home__carousel-prev');
        this.carouselNext = document.querySelector('.home__carousel-next');
    }
}
const CAROUSEL = new HOME_CAROUSEL;
CAROUSEL.carouselNext.addEventListener('click', CAROUSEL.handleNext);
CAROUSEL.carouselPrev.addEventListener('click', CAROUSEL.handlePrev);
