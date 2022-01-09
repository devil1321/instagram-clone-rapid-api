import { Response, Request } from 'express'
const IG_USERS = require('../actions/user.actions')
const IG_POSTS = require('../actions/posts.actions')
const IG_TAGS = require('../actions/tags.actions')

module.exports = async function(req:Request,res:Response,next:any){
    IG_USERS.following?.users?.map((user:any)=>{
        const { username } = user
        setTimeout(()=>{
            IG_POSTS.getUser(username)
            IG_TAGS.getTagPosts(username)
        },1000)
        setTimeout(()=>{
            IG_POSTS.allPosts.push(IG_POSTS.userPosts)
            IG_TAGS.allTagPosts.push(IG_TAGS.tagPosts)
        },1000)
        console.log(IG_POSTS)
        console.log(IG_TAGS)
    })
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(IG_POSTS)
        },3000)
    }).then(data => {
        setTimeout(()=>{
            next()
        },1000)
    }).catch(err => console.log(err))
}