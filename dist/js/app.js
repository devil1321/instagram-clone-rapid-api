const navbar = document.querySelector('.navbar__btn');
const img = document.querySelector('.navbar__home-icon');
var isOpen = false;
const isNavOpen = () => {
    if (!isOpen) {
        isOpen = true;
        img.src = '/public/assets/icons/home-open.png';
    }
    else {
        isOpen = false;
        img.src = '/public/assets/icons/home.png';
    }
};
navbar.addEventListener('click', isNavOpen);
