const navbar = document.querySelector('.navbar__btn') as HTMLImageElement
const img = document.querySelector('.navbar__home-icon') as HTMLImageElement
var isOpen:boolean = false

const isNavOpen = () =>{
    if(!isOpen){
        isOpen = true
        img.src = '/public/assets/icons/png/home-open.png'
    }else{
        isOpen = false
        img.src = '/public/assets/icons/png/home.png'
    }

}

navbar.addEventListener('click',isNavOpen)


const viewComments = document.querySelector('.post__comments-btn') as HTMLParagraphElement
const modal = document.querySelector('.post__modal-overlay') as HTMLDivElement
var isModal = false
const handleModal = ()=>{
    if (!isModal) {
        modal.style.visibility = 'visible'
        modal.style.opacity = '1'
        modal.style.zIndex = '1'
        isModal = true;
    }
    else {
        isModal = false;
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
        modal.style.zIndex = '-1'
      
    }
}
    

viewComments.addEventListener('click',handleModal)


const postMoreInfo = document.querySelector('.post__more-info') as HTMLSpanElement
const postContentInfo = document.querySelector('.post__content') as HTMLParagraphElement

const handleInfo = () =>{
    console.log('open')
    postContentInfo.classList.remove('close')
    postMoreInfo.style.display = 'none'
    
}

postMoreInfo.addEventListener('click',handleInfo)
