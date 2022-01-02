class HOME_CAROUSEL{
    public carouselWrapper:HTMLDivElement
    public carousel:HTMLDivElement
    public carouselNext:HTMLDivElement
    public carouselPrev:HTMLDivElement
    constructor(){
        this.carouselWrapper = document.querySelector('.home__carousel-wrapper')
        this.carousel = document.querySelector('.home__carousel')
        this.carouselPrev = document.querySelector('.home__carousel-prev')
        this.carouselNext = document.querySelector('.home__carousel-next')
    }
    handlePrev = () =>{
        this.carousel.style.transform = 'translate(0%)'
    }
    handleNext = () =>{
        this.carousel.style.transform = 'translate(-28%)'
    }
}

const CAROUSEL =  new HOME_CAROUSEL
CAROUSEL.carouselNext.addEventListener('click',CAROUSEL.handleNext)
CAROUSEL.carouselPrev.addEventListener('click',CAROUSEL.handlePrev)
