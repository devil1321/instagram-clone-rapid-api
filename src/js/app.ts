
class UI_ACTIONS_CLIENT {
    public isHomeOpen:boolean;
    public isFeedOpen: boolean;
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
    constructor(){
        this.isHomeOpen = false
        this.isFeedOpen = false
        this.navbar = document.querySelector('.navbar__btn')
        this.navbarHomeIcon = document.querySelector('.navbar__home-icon') 
        this.navbarMenu = document.querySelector('.navbar__main-menu') 
        this.homeIcon = document.querySelector('.navbar__home-icon') 
        this.navbarTelegramIcon = document.querySelector('.navbar__telegram-icon')
        this.navbarAddPostIcon = document.querySelector('.navbar__add-icon') 
        this.navbarExploreIcon = document.querySelector('.navbar__find-people-icon')
        this.navbarFeedIcon = document.querySelector('.navbar__feed-icon')
        this.viewComments = document.querySelectorAll('.post__comments-btn')
        this.postModalClose = document.querySelectorAll('.post__modal-close')
        this.postMoreInfo = document.querySelectorAll('.post__more-info')
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
        }else{
            this.navbarFeedIcon.src = '/public/assets/icons/png/activity-feed.png'
            this.isFeedOpen = false
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
    handlePostModalOpen = (e:any)=>{
        const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`) as HTMLDivElement
        postModal.style.display = 'block'
        postModal.style.opacity = '1'
        postModal.style.zIndex = '3'
    }
    handlePostModalClose = (e:any) => {
        const postModal = document.querySelector(`#post__modal-overlay-${e.target.dataset.id}`) as HTMLDivElement
        postModal.style.display = 'none'
        postModal.style.opacity = '0'
        postModal.style.zIndex = '-1'
    }
    handleInfo = (e:any) =>{
        const postContentInfo = document.querySelector(`#post__content-${e.target.dataset.id}`) as HTMLParagraphElement
        postContentInfo.classList.remove('close')
        e.target.style.display = 'none'
        
    }
}

const UI_CLIENT = new UI_ACTIONS_CLIENT

UI_CLIENT.handleIconsChange()
UI_CLIENT.navbarFeedIcon.addEventListener('click',UI_CLIENT.handleChangeFeedIcon)
UI_CLIENT.navbar.addEventListener('click',UI_CLIENT.isNavOpen)
UI_CLIENT.viewComments.forEach((item:any)=>{
    item.addEventListener('click',UI_CLIENT.handlePostModalOpen)
})
UI_CLIENT.postMoreInfo.forEach((item:any) =>{
    item.addEventListener('click',UI_CLIENT.handleInfo)
})
UI_CLIENT.postModalClose.forEach((item:any)=>{
    item.addEventListener('click',UI_CLIENT.handlePostModalClose)
})
