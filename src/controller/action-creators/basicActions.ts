import { BasicActions } from '../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { keys } from '../../config/keys'
import { AxiosOptions } from '../interfaces'

export const getMe = () => (dispatch:Dispatch) => {
    const options:AxiosOptions = {
        method:'GET',
        url:'https://graph.instagram.com/v12.0/me',
        params:{
            fields:'',
            access_token:keys.session.accessToken
        }
    }

    axios.request(options)
        .then((res)=>{
            dispatch({
                type:BasicActions.GET_ME,
                me:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const getMedia = () => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:'https://graph.instagram.com/{media-id}',
        params:{
            fields:'caption,id,media_type,media_url,premalink,thumbnail_url,timestamp,username,children',
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:BasicActions.GET_MEDIA,
                media:res.data
            })
        })
        .catch((err)=>console.log(err))
}

export const getMediaChildren = () => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:'https://graph.instagram.com/{media-id}/children',
        params:{
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:BasicActions.GET_MEDIA_CHILDREN,
                mediaChildren:res.data
            })
        })
        .catch((err)=>console.log(err))
}
export const getUser = (userId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/v12.0/${userId}`,
        params:{
            fields:'account_type,id,media_count,username,media',
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:BasicActions.USER,
                user:res.data
            })
        })
        .catch((err)=>console.log(err))
}
export const getUserMedia = (userId:string) => (dispatch:Dispatch) =>{
    const options:AxiosOptions = {
        method:'GET',
        url:`https://graph.instagram.com/v12.0/${userId}/media`,
        params:{
            access_token:keys.session.accessToken
        }
    }
    axios.request(options)
        .then((res)=>{
            dispatch({
                type:BasicActions.GET_MEDIA_CHILDREN,
                mediaChildren:res.data
            })
        })
        .catch((err)=>console.log(err))
}