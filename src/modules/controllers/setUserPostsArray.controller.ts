import { Response, Request } from 'express'
const IG_USERS = require('../actions/user.actions')
const IG_POSTS = require('../actions/posts.actions')

module.exports = async function(req:Request,res:Response,next:any){
    IG_USERS.following?.users?.map((user:any)=>{
        const { username } = user
        setTimeout(()=>{
            IG_POSTS.getUser(username)
        },1000)
        setTimeout(()=>{
            IG_POSTS.allPosts.push(IG_POSTS.userPosts)
        },1000)
        console.log(IG_POSTS)
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