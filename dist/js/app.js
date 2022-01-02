class UI_ACTIONS_CLIENT {
    constructor() {
        this.isNavOpen = () => {
            if (!this.isHomeOpen) {
                this.isHomeOpen = true;
                this.navbarHomeIcon.src = '/public/assets/icons/png/home-open.png';
            }
            else {
                this.isHomeOpen = false;
                this.navbarHomeIcon.src = '/public/assets/icons/png/home.png';
            }
        };
        this.handleChangeFeedIcon = () => {
            if (!this.isFeedOpen) {
                this.navbarFeedIcon.src = '/public/assets/icons/png/activity-feed-black.png';
                this.isFeedOpen = true;
                this.handleOpenModal(this.feedMenu);
            }
            else {
                this.navbarFeedIcon.src = '/public/assets/icons/png/activity-feed.png';
                this.isFeedOpen = false;
                this.handleCloseModal(this.feedMenu);
            }
        };
        this.handlePostIcon = () => {
            if (!this.isAddPostOpen) {
                this.navbarAddPostIcon.src = '/public/assets/icons/png/add-black.png';
                this.isAddPostOpen = true;
            }
            else {
                this.navbarAddPostIcon.src = '/public/assets/icons/png/add.png';
                this.isAddPostOpen = false;
            }
        };
        this.handleIconsChange = () => {
            const path = window.location.pathname;
            switch (path) {
                case '/instagram/home':
                    this.navbarHomeIcon.src = '/public/assets/icons/png/home.png';
                    break;
                case '/instagram/inbox':
                    this.navbarTelegramIcon.src = '/public/assets/icons/png/telegram-black.png';
                    break;
                case '/instagram/create-post':
                    this.navbarAddPostIcon.src = '/public/assets/icons/png/add-black.png';
                    break;
                case '/instagram/explore':
                    this.navbarExploreIcon.src = '/public/assets/icons/png/find-people-black.png';
                    break;
                default:
                    return;
            }
        };
        this.handleProfileMenu = () => {
            if (!this.isProfileOpen) {
                this.profileBtn.style.border = '1px solid black';
                this.isProfileOpen = true;
                this.handleOpenModal(this.profileMenu);
            }
            else {
                this.profileBtn.style.border = '1px solid white';
                this.isProfileOpen = false;
                this.handleCloseModal(this.profileMenu);
            }
        };
        this.handlePostModalOpen = (e) => {
            const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`);
            setTimeout(() => {
                postModal.style.visibility = 'visible';
                postModal.style.opacity = '1';
                postModal.style.zIndex = '3';
            }, 100);
        };
        this.handlePostModalClose = (e) => {
            const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`);
            postModal.style.opacity = '0';
            postModal.style.visibility = 'hidden';
            setTimeout(() => {
                postModal.style.zIndex = '-1';
            }, 1000);
        };
        this.handleInfo = (e) => {
            const postContentInfo = document.querySelector(`#post__content-${e.target.dataset.id}`);
            postContentInfo.classList.remove('close');
            e.target.style.display = 'none';
        };
        this.handleOpenModal = (element) => {
            element.style.zIndex = '3';
            element.style.visibility = 'visible';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 100);
        };
        this.handleCloseModal = (element) => {
            element.style.opacity = '0';
            element.style.visibility = 'hidden';
            setTimeout(() => {
                element.style.zIndex = '-1';
            }, 1000);
        };
        this.isHomeOpen = false;
        this.isFeedOpen = false;
        this.isAddPostOpen = false;
        this.isProfileOpen = false;
        this.navbar = document.querySelector('.navbar__btn');
        this.navbarHomeIcon = document.querySelector('.navbar__home-icon');
        this.navbarMenu = document.querySelector('.navbar__main-menu');
        this.homeIcon = document.querySelector('.navbar__home-icon');
        this.navbarTelegramIcon = document.querySelector('.navbar__telegram-icon');
        this.navbarAddPostIcon = document.querySelector('.navbar__add-icon');
        this.navbarExploreIcon = document.querySelector('.navbar__find-people-icon');
        this.navbarFeedIcon = document.querySelector('.navbar__feed-icon');
        this.viewComments = document.querySelectorAll('.post__comments-btn');
        this.postModalClose = document.querySelectorAll('.post__modal-close span');
        this.postMoreInfo = document.querySelectorAll('.post__more-info');
        this.addPostModal = document.querySelector('.add-post-modal');
        this.closeAddPostModal = document.querySelector('.add-post-modal__close');
        this.feedMenu = document.querySelector('.navbar__activity-menu-wrapper');
        this.profileBtn = document.querySelector('.navbar__profile-img');
        this.profileMenu = document.querySelector('.navbar__profile-menu-wrapper');
        this.sendModalOpenBtn = document.querySelector('.inbox__send-message');
        this.sendModalCloseBtn = document.querySelector('.send-modal__close');
        this.sendModal = document.querySelector('.send-modal-overlay');
    }
}
const UI_CLIENT = new UI_ACTIONS_CLIENT;
UI_CLIENT.handleIconsChange();
UI_CLIENT.navbarFeedIcon.addEventListener('click', UI_CLIENT.handleChangeFeedIcon);
UI_CLIENT.profileBtn.addEventListener('click', UI_CLIENT.handleProfileMenu);
UI_CLIENT.navbarAddPostIcon.addEventListener('click', UI_CLIENT.handlePostIcon);
UI_CLIENT.navbar.addEventListener('click', UI_CLIENT.isNavOpen);
UI_CLIENT.viewComments.forEach((item) => {
    item.addEventListener('click', UI_CLIENT.handlePostModalOpen);
});
UI_CLIENT.postMoreInfo.forEach((item) => {
    item.addEventListener('click', UI_CLIENT.handleInfo);
});
UI_CLIENT.postModalClose.forEach((item) => {
    item.addEventListener('click', UI_CLIENT.handlePostModalClose);
});
UI_CLIENT.navbarAddPostIcon.addEventListener('click', () => UI_CLIENT.handleOpenModal(UI_CLIENT.addPostModal));
UI_CLIENT.closeAddPostModal.addEventListener('click', () => {
    UI_CLIENT.handleCloseModal(UI_CLIENT.addPostModal);
    UI_CLIENT.handlePostIcon();
});
if (UI_CLIENT.sendModalOpenBtn) {
    UI_CLIENT.sendModalOpenBtn.addEventListener('click', () => UI_CLIENT.handleOpenModal(UI_CLIENT.sendModal));
}
if (UI_CLIENT.sendModalCloseBtn) {
    UI_CLIENT.sendModalCloseBtn.addEventListener('click', () => UI_CLIENT.handleCloseModal(UI_CLIENT.sendModal));
}
