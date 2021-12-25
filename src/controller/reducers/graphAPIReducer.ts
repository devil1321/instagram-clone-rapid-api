import { GraphActions } from "../types"

interface InitDataProps {
    IG_CONTAINER:any,
    IG_COMMENT:any,
    IG_HASHTAG_SEARCH:any,
    IG_HASHTAG:any,
    IG_MEDIA:any,
    IG_USER:any,
}

const initData:InitDataProps = {
    IG_CONTAINER:null,
    IG_COMMENT:null,
    IG_HASHTAG_SEARCH:null,
    IG_HASHTAG:null,
    IG_MEDIA:null,
    IG_USER:null,
}

export default (state = initData, action:any) =>{
    switch(action.type){
        case GraphActions.IG_CONTAINER:
            return{
                ...state,
                IG_CONTAINER:action.IG_CONTAINER
            }
        case GraphActions.IG_COMMENT:
            return{
                ...state,
                IG_CONTAINER:action.IG_CONTAINER
            }
        case GraphActions.GET_IG_REPLIES:
            return{
                ...state,
                IG_REPLIES:action.IG_REPLIES
            }
        case GraphActions.POST_IG_REPLIES:
            return{
                ...state
            }
        case GraphActions.IG_HASHTAG_SEARCH:
            return{
                ...state,
                IG_HASHTAG_SEARCH:action.IG_HASHTAG_SEARCH
            }
        case GraphActions.IG_HASHTAG:
            return{
                ...state,
                IG_HASHTAG:action.IG_HASHTAG
            }
        case GraphActions.IG_MEDIA:
            return{
                ...state,
                IG_MEDIA:action.IG_MEDIA
            }
        case GraphActions.POST_IG_MEDIA_COMMENTS:
            return{
                ...state,
            }
        case GraphActions.IG_MEDIA_CHILDREN:
            return{
                ...state,
                IG_MEDIA_CHILDREN:action.IG_MEDIA_CHILDREN
            }
        case GraphActions.IG_MEDIA_INSIGHTS:
            return{
                ...state,
                IG_MEDIA_INSIGHTS:action.IG_MEDIA_INSIGHTS
            }
        case GraphActions.IG_USER:
            return{
                ...state,
                IG_USER:action.IG_USER
            }
        case GraphActions.IG_USER_STORIES:
            return{
                ...state,
                IG_USER_STORIES:action.IG_USER_STORIES
            }
        default:
            return{
                ...state
            }
    }
}