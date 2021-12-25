import { GraphActions } from '../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { keys } from '../../config/keys'
import { AxiosOptions } from '../interfaces'

export const IG_CONTAINER = (igContainerId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/${igContainerId}`,
        params:{
            fields:'id,status,status_code',
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_CONTAINER,
                IG_CONTAINER:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const IG_COMMENT = (commentId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/v12.0/${commentId}`,
        params:{
            fields:'from,hidden,id,like_count,media,parent_id,replies,text,timestamp,user,username',
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_COMMENT,
                IG_COMMENT:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const GET_IG_REPLIES = (commentId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/${commentId}/replies`,
        params:{
            fields:'from,hidden,id,like_count,media,parent_id,replies,text,timestamp,user,username',
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.GET_IG_REPLIES,
                IG_REPLIES:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const POST_IG_REPLIES = (commentId:string,message:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'POST',
        url:`https://graph.facebook.com/${commentId}/replies`,
        params:{
           message:message
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.POST_IG_REPLIES,
            })
        })
        .catch((err)=>console.log(err))
}

export const IG_HASHTAG_SEARCH = (userId:string,q:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/v12.0/ig_hashtag_search`,
        params:{
           user_id:userId,
           q:q,
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_HASHTAG_SEARCH,
                IG_HASHTAG_SEARCH:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const IG_HASHTAG = (igHashtagId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/${igHashtagId}`,
        params:{
           fields:'id,name,recent_media,top_media',
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.POST_IG_REPLIES,
                IG_HASHTAG:res.data
            })
        })
        .catch((err)=>console.log(err))
}
export const IG_MEDIA = (igMediaId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/v12.0/${igMediaId}`,
        params:{
           fields:'caption,comments_count,id,ig_id,is_comment_enabled,like_count,media_product_type,media_type,media_url,owner,permalink,shortcode,thumbnail_url,timestamp,username,video_title,children,comments,insights',
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_MEDIA,
                IG_MEDIA:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const POST_IG_MEDIA_COMMENTS = (igMediaId:string,message:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'POST',
        url:`https://graph.facebook.com/${igMediaId}/comments`,
        params:{
           message:message,
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.POST_IG_MEDIA_COMMENTS,
            })
        })
        .catch((err)=>console.log(err))
}
export const IG_MEDIA_CHILDREN = (igMediaId:String) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/${igMediaId}/children`
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_MEDIA_CHILDREN,
                IG_MEDIA_CHILDREN:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const IG_MEDIA_INSIGHTS = (igMediaId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/v12.0/${igMediaId}/insightss`,
        params:{
           metric:'engagement,impressions,reach,saved,video_views,carousel_album_engagement,carousel_album_impressions,carousel_album_reach,carousel_album_saved,carousel_album_video_views,exits,impressions,impressions,replies,taps_forward,taps_back',
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_MEDIA_INSIGHTS,
                IG_MEDIA_INSIGHTS:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const IG_USER = (igUserId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/v3.2/${igUserId}`,
        params:{
           fields:'biography,id,ig_id,followers_count,follows_count,media_count,name,profile_picture_url,username,website',
           access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_USER,
                IG_USER:res.data
            })
        })
        .catch((err)=>console.log(err))
}
export const IG_USER_STORIES = (igUserId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.facebook.com/${igUserId}/stories`
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:GraphActions.IG_USER_STORIES,
                IG_USER_STORIES:res.data
            })
        })
        .catch((err)=>console.log(err))
}
