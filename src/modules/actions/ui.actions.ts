class UI_ACTIONS {
    public isMobile:boolean;
    UI_ACTIONS_CLIENTconstructor(){
        this.isMobile = false
    }
    async setIsMobile(){
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
        this.isMobile = await detectMob()
    }   
}

const UI = new UI_ACTIONS

module.exports = UI


