
class UI_ACTIONS_CLIENT {
    public isHomeOpen:boolean;
    public isFeedOpen: boolean;
    public isAddPostOpen:boolean
    public isProfileOpen:boolean;
    public navbar:HTMLImageElement;
    public navbarHomeIcon: HTMLImageElement;
    public navbarMenu: HTMLDivElement;
    public homeIcon: HTMLImageElement;
    public navbarTelegramIcon: HTMLImageElement;
    public navbarAddPostIcon: HTMLImageElement;
    public navbarExploreIcon: HTMLImageElement;
    public navbarFeedIcon: HTMLImageElement;
    public postModal: NodeListOf<HTMLDivElement>;
    public viewComments:NodeListOf<HTMLParagraphElement>
    public postMoreInfo: NodeListOf<HTMLSpanElement>;
    public postModalClose: NodeListOf<HTMLDivElement>
    public addPostModal:HTMLDivElement;
    public closeAddPostModal: HTMLDivElement;
    public feedMenu: HTMLDivElement;
    public profileBtn: HTMLDivElement;
    public profileMenu: HTMLDivElement;
    public sendModalOpenBtn: HTMLDivElement;
    public sendModalCloseBtn: HTMLDivElement;
    public sendModal: HTMLDivElement;
    public switchAccountsModalOpenBtn: HTMLParagraphElement;
    public switchAccountsModalCloseBtn: HTMLSpanElement;
    public switchAccountsModal: HTMLDivElement
    public tabLinks: NodeListOf<HTMLDivElement>
    public tabs:NodeListOf<HTMLDivElement>
    constructor(){
        this.isHomeOpen = false
        this.isFeedOpen = false
        this.isAddPostOpen = false
        this.isProfileOpen = false
        this.navbar = document.querySelector('.navbar__btn')
        this.navbarHomeIcon = document.querySelector('.navbar__home-icon') 
        this.navbarMenu = document.querySelector('.navbar__main-menu') 
        this.homeIcon = document.querySelector('.navbar__home-icon') 
        this.navbarTelegramIcon = document.querySelector('.navbar__telegram-icon')
        this.navbarAddPostIcon = document.querySelector('.navbar__add-icon') 
        this.navbarExploreIcon = document.querySelector('.navbar__find-people-icon')
        this.navbarFeedIcon = document.querySelector('.navbar__feed-icon')
        this.viewComments = document.querySelectorAll('.post__comments-btn')
        this.postModalClose = document.querySelectorAll('.post__modal-close span')
        this.postMoreInfo = document.querySelectorAll('.post__more-info')
        this.addPostModal = document.querySelector('.add-post-modal')
        this.closeAddPostModal = document.querySelector('.add-post-modal__close')
        this.feedMenu = document.querySelector('.navbar__activity-menu-wrapper')
        this.profileBtn = document.querySelector('.navbar__profile-img')
        this.profileMenu = document.querySelector('.navbar__profile-menu-wrapper')
        this.sendModalOpenBtn = document.querySelector('.inbox__send-message')
        this.sendModalCloseBtn = document.querySelector('.send-modal__close')
        this.sendModal = document.querySelector('.send-modal-overlay')
        this.switchAccountsModalOpenBtn = document.querySelector('.navbar__switch-accounts-btn')
        this.switchAccountsModalCloseBtn = document.querySelector('.switch-accounts-modal__close')
        this.switchAccountsModal = document.querySelector('.switch-accounts-modal-overlay')
        this.tabLinks = document.querySelectorAll('.profile__tab-link')
        this.tabs = document.querySelectorAll('.profile__tab')
    }
    isNavOpen = () => {
        if(!this.isHomeOpen){
            this.isHomeOpen = true
            this.navbarHomeIcon.src = '/public/assets/icons/png/home-open.png'
        }else{
            this.isHomeOpen = false
            this.navbarHomeIcon.src = '/public/assets/icons/png/home.png'
        }
    }
    handleChangeFeedIcon = () =>{
        if(!this.isFeedOpen){
            this.navbarFeedIcon.src = '/public/assets/icons/png/activity-feed-black.png'
            this.isFeedOpen = true
            this.handleOpenModal(this.feedMenu)
        }else{
            this.navbarFeedIcon.src = '/public/assets/icons/png/activity-feed.png'
            this.isFeedOpen = false
            this.handleCloseModal(this.feedMenu)
        }
    }
    handlePostIcon = () =>{
        if(!this.isAddPostOpen){
            this.navbarAddPostIcon.src = '/public/assets/icons/png/add-black.png'
            this.isAddPostOpen = true
        }else{
            this.navbarAddPostIcon.src = '/public/assets/icons/png/add.png'
            this.isAddPostOpen = false
        }
    }


    handleIconsChange = () =>{
        const path = window.location.pathname
        switch(path){
            case '/instagram/home':
                this.navbarHomeIcon.src = '/public/assets/icons/png/home.png'
                break
            case '/instagram/inbox':
                this.navbarTelegramIcon.src = '/public/assets/icons/png/telegram-black.png'
                break
            case '/instagram/create-post':
                this.navbarAddPostIcon.src = '/public/assets/icons/png/add-black.png'   
                break
            case '/instagram/explore':
                this.navbarExploreIcon.src = '/public/assets/icons/png/find-people-black.png'
                break
            default:
                return
        }
    }
    handleProfileMenu = () =>{
        if(!this.isProfileOpen){
            this.profileBtn.style.border = '1px solid black'
            this.isProfileOpen = true
            this.handleOpenModal(this.profileMenu)
        }else{
            this.profileBtn.style.border = '1px solid white'
            this.isProfileOpen = false
            this.handleCloseModal(this.profileMenu)
        }
    }

    handlePostModalOpen = (e:any)=>{
        const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`) as HTMLDivElement
        setTimeout(() => {
            postModal.style.visibility = 'visible'
            postModal.style.opacity = '1'
            postModal.style.zIndex = '3'
        }, 100);
    }
    handlePostModalClose = (e:any) => {
        const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`) as HTMLDivElement
        postModal.style.opacity = '0'
        postModal.style.visibility = 'hidden'
        setTimeout(() => {
            postModal.style.zIndex = '-1'
        }, 1000);
    }
    handleInfo = (e:any) =>{
        const postContentInfo = document.querySelector(`#post__content-${e.target.dataset.id}`) as HTMLParagraphElement
        postContentInfo.classList.remove('close')
        e.target.style.display = 'none'
        
    }
    handleOpenModal = (element:any) =>{
        element.style.zIndex = '3'
        element.style.visibility = 'visible'
        setTimeout(()=>{
            element.style.opacity = '1'
        },100)
    }
    handleCloseModal= (element:any) =>{
        element.style.opacity = '0'
        element.style.visibility = 'hidden'    
        setTimeout(()=>{
            element.style.zIndex = '-1'
        },1000)
    }
    handleTabLink = (e:any) =>{
        this.tabLinks.forEach((link:any)=>{
            link.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    handleTab = (e:any) =>{
        const id:string = e.target.dataset.id
        let activeTab = document.querySelector(`#tab-${id}`) as HTMLDivElement
        this.tabs.forEach((tab:any)=>{
            tab.classList.remove('active')
        })
        activeTab.classList.add('active')
    }
    handleTabChange = () =>{
        const path = window.location.pathname
        this.tabs.forEach((tab:any)=>{
            tab.classList.remove('active')
        })
        this.tabLinks.forEach((link:any)=>{
            link.classList.remove('active')
        })
        switch(path){
            case '/instagram/profile':
                (function(){
                    const activeLink = document.getElementById('tab-link-1') as HTMLDivElement
                    const activeTab = document.getElementById('tab-1') as HTMLDivElement
                    activeLink.classList.add('active')
                    activeTab.classList.add('active')
                }())
                break
            case '/instagram/saved':
                (function(){
                    const activeLink = document.getElementById('tab-link-2') as HTMLDivElement
                    const activeTab = document.getElementById('tab-2') as HTMLDivElement
                    activeLink.classList.add('active')
                    activeTab.classList.add('active')
                }())
                break
            default:
                return
        }

    }
}


const UI_CLIENT = new UI_ACTIONS_CLIENT

UI_CLIENT.handleIconsChange()
UI_CLIENT.handleTabChange()
UI_CLIENT.navbarFeedIcon.addEventListener('click',UI_CLIENT.handleChangeFeedIcon)
UI_CLIENT.profileBtn.addEventListener('click',UI_CLIENT.handleProfileMenu)
UI_CLIENT.navbarAddPostIcon.addEventListener('click',UI_CLIENT.handlePostIcon)
UI_CLIENT.navbar.addEventListener('click',UI_CLIENT.isNavOpen)
UI_CLIENT.navbarAddPostIcon.addEventListener('click',()=> UI_CLIENT.handleOpenModal(UI_CLIENT.addPostModal))

UI_CLIENT.closeAddPostModal.addEventListener('click',()=> {
    UI_CLIENT.handleCloseModal(UI_CLIENT.addPostModal)
    UI_CLIENT.handlePostIcon()
})

UI_CLIENT.switchAccountsModalOpenBtn.addEventListener('click',()=>UI_CLIENT.handleOpenModal(UI_CLIENT.switchAccountsModal))
UI_CLIENT.switchAccountsModalCloseBtn.addEventListener('click',()=>UI_CLIENT.handleCloseModal(UI_CLIENT.switchAccountsModal))

if(UI_CLIENT.postMoreInfo && UI_CLIENT.postModalClose){
    UI_CLIENT.viewComments.forEach((item:any)=>{
        item.addEventListener('click',UI_CLIENT.handlePostModalOpen)
    })
    UI_CLIENT.postMoreInfo.forEach((item:any) =>{
        item.addEventListener('click',UI_CLIENT.handleInfo)
    })
    UI_CLIENT.postModalClose.forEach((item:any)=>{
        item.addEventListener('click',UI_CLIENT.handlePostModalClose)
    })
}

if(UI_CLIENT.sendModalOpenBtn){
    UI_CLIENT.sendModalOpenBtn.addEventListener('click',()=>UI_CLIENT.handleOpenModal(UI_CLIENT.sendModal))
}
if(UI_CLIENT.sendModalCloseBtn){
    UI_CLIENT.sendModalCloseBtn.addEventListener('click',()=>UI_CLIENT.handleCloseModal(UI_CLIENT.sendModal))
}
if(UI_CLIENT.tabLinks){
    UI_CLIENT.tabLinks.forEach((link:any)=>{
        link.addEventListener('click',(e:any)=>{
            UI_CLIENT.handleTabLink(e)
            UI_CLIENT.handleTab(e)
        })
    })
}