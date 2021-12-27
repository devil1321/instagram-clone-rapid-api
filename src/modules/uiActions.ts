class UI_ACTIONS {
    
    public isMobile:boolean;
    public isNavbarOpen:boolean
    constructor(){
        this.isMobile = false
        this.isNavbarOpen = false
    }
    setIsMobile(){
        function detectMob() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];
            
            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }
        this.isMobile = detectMob()
    }
    setIsNavbarOpen(){
        this.isNavbarOpen = !this.isNavbarOpen
    }    
}

const UI = new UI_ACTIONS

module.exports = UI


