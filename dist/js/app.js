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
const viewComments = document.querySelector('.post__comments-btn');
const modal = document.querySelector('.post__modal-overlay');
var isModal = false;
const handleModal = () => {
    if (!isModal) {
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '1';
        isModal = true;
    }
    else {
        isModal = false;
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        modal.style.zIndex = '-1';
    }
};
viewComments.addEventListener('click', handleModal);
