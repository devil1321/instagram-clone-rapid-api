import { BasicActions } from "../types"

interface InitDataProps {
    me:any,
    media:any,
    mediaChildren:any,
    user:any,
    userMedia:any,
}

const initData:InitDataProps = {
    me:null,
    media:null,
    mediaChildren:null,
    user:null,
    userMedia:null,
}

export default (state = initData, action:any) =>{
    switch(action.type){
        case BasicActions.GET_ME:
            return {
                ...state,
                me:action.me
            }
        case BasicActions.GET_MEDIA:
            return {
                ...state,
                media:action.media
            }
        case BasicActions.GET_MEDIA_CHILDREN:
            return {
                ...state,
                mediaChildren:action.mediaChildren
            }
        case BasicActions.USER:
            return {
                ...state,
                user:action.user
            }
        case BasicActions.USER_MEDIA:
            return {
                ...state,
                userMedia:action.userMedia
            }
        default:
            return{
                ...state
            }
    }
}