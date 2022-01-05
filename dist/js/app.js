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
        this.handleTabLink = (e) => {
            this.tabLinks.forEach((link) => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');
        };
        this.handleTab = (e) => {
            const id = e.target.dataset.id;
            let activeTab = document.querySelector(`#tab-${id}`);
            this.tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            activeTab.classList.add('active');
        };
        this.handleTabChange = () => {
            const path = window.location.pathname;
            this.tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            this.tabLinks.forEach((link) => {
                link.classList.remove('active');
            });
            switch (path) {
                case '/instagram/profile':
                    (function () {
                        const activeLink = document.getElementById('tab-link-1');
                        const activeTab = document.getElementById('tab-1');
                        activeLink.classList.add('active');
                        activeTab.classList.add('active');
                    }());
                    break;
                case '/instagram/saved':
                    (function () {
                        const activeLink = document.getElementById('tab-link-2');
                        const activeTab = document.getElementById('tab-2');
                        activeLink.classList.add('active');
                        activeTab.classList.add('active');
                    }());
                    break;
                default:
                    return;
            }
        };
        this.handleSettingsActiveLink = () => {
            const path = window.location.pathname;
            switch (path) {
                case '/settings/edit-profile':
                    this.settingsNavLinks[0].classList.add('active');
                    break;
                case '/settings/change-password':
                    this.settingsNavLinks[1].classList.add('active');
                    break;
                case '/settings/manage-access':
                    this.settingsNavLinks[2].classList.add('active');
                    break;
                case '/settings/email-and-sms':
                    this.settingsNavLinks[3].classList.add('active');
                    break;
                case '/settings/push-notifications':
                    this.settingsNavLinks[4].classList.add('active');
                    break;
                case '/settings/manage-contacts':
                    this.settingsNavLinks[5].classList.add('active');
                    break;
                case '/settings/privacy-and-security':
                    this.settingsNavLinks[6].classList.add('active');
                    break;
                case '/settings/emails-from-instagram':
                    this.settingsNavLinks[7].classList.add('active');
                    break;
                case '/settings/emails-from-instagram':
                    this.settingsNavLinks[8].classList.add('active');
                    break;
                case '/settings/help':
                    this.settingsNavLinks[9].classList.add('active');
                    break;
                case '/settings/switch-to-proffesional-account':
                    this.settingsNavLinks[10].classList.add('active');
                    break;
            }
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
        this.switchAccountsModalOpenBtn = document.querySelector('.navbar__switch-accounts-btn');
        this.switchAccountsModalCloseBtn = document.querySelector('.switch-accounts-modal__close');
        this.switchAccountsModal = document.querySelector('.switch-accounts-modal-overlay');
        this.tabLinks = document.querySelectorAll('.profile__tab-link');
        this.tabs = document.querySelectorAll('.profile__tab');
        this.settingsNavLinks = document.querySelectorAll('.settings__tab-link');
    }
}
const UI_CLIENT = new UI_ACTIONS_CLIENT;
UI_CLIENT.handleIconsChange();
UI_CLIENT.handleTabChange();
UI_CLIENT.navbarFeedIcon.addEventListener('click', UI_CLIENT.handleChangeFeedIcon);
UI_CLIENT.profileBtn.addEventListener('click', UI_CLIENT.handleProfileMenu);
UI_CLIENT.navbarAddPostIcon.addEventListener('click', UI_CLIENT.handlePostIcon);
UI_CLIENT.navbar.addEventListener('click', UI_CLIENT.isNavOpen);
UI_CLIENT.navbarAddPostIcon.addEventListener('click', () => UI_CLIENT.handleOpenModal(UI_CLIENT.addPostModal));
UI_CLIENT.closeAddPostModal.addEventListener('click', () => {
    UI_CLIENT.handleCloseModal(UI_CLIENT.addPostModal);
    UI_CLIENT.handlePostIcon();
});
UI_CLIENT.switchAccountsModalOpenBtn.addEventListener('click', () => UI_CLIENT.handleOpenModal(UI_CLIENT.switchAccountsModal));
UI_CLIENT.switchAccountsModalCloseBtn.addEventListener('click', () => UI_CLIENT.handleCloseModal(UI_CLIENT.switchAccountsModal));
if (UI_CLIENT.postMoreInfo && UI_CLIENT.postModalClose) {
    UI_CLIENT.viewComments.forEach((item) => {
        item.addEventListener('click', UI_CLIENT.handlePostModalOpen);
    });
    UI_CLIENT.postMoreInfo.forEach((item) => {
        item.addEventListener('click', UI_CLIENT.handleInfo);
    });
    UI_CLIENT.postModalClose.forEach((item) => {
        item.addEventListener('click', UI_CLIENT.handlePostModalClose);
    });
}
if (UI_CLIENT.sendModalOpenBtn) {
    UI_CLIENT.sendModalOpenBtn.addEventListener('click', () => UI_CLIENT.handleOpenModal(UI_CLIENT.sendModal));
}
if (UI_CLIENT.sendModalCloseBtn) {
    UI_CLIENT.sendModalCloseBtn.addEventListener('click', () => UI_CLIENT.handleCloseModal(UI_CLIENT.sendModal));
}
if (UI_CLIENT.tabLinks) {
    UI_CLIENT.tabLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            UI_CLIENT.handleTabLink(e);
            UI_CLIENT.handleTab(e);
        });
    });
}
if (UI_CLIENT.settingsNavLinks) {
    UI_CLIENT.handleSettingsActiveLink();
}
