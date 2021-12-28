import { Response, Request } from 'express'
const IG_USERS = require('../actions/user.actions')

module.exports = async function(req:Request,res:Response,next:any){
    IG_USERS.getUser('devil2671321')
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            IG_USERS.getUserFollowing('devil2671321')
            resolve(IG_USERS)
        },5000)
    }).then(data => {
        setTimeout(()=>{
            next()
        },1000)
    }).catch(err => console.log(err))
}