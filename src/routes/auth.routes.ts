import axios from 'axios'
import { Response, Request, Application } from 'express'

const router = require('express').Router()
const IG_USERS = require('../modules/actions/user.actions')


router.get('/login',(req:Request,res:any)=>{
    res.render('login',{title:'Login'})
})

router.get('/sign-up',(req:Request,res:any)=>{
    res.render('signup',{title:"Sign Up"})
})

router.post('/authorize', async (req:any,res:any) => {
    const { name, password } = req.body
    IG_USERS.getLogin(name, password)
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(global.session_key !== undefined){
                global.user = name
                resolve(global.user)
            }else{
                reject(global.user)
            }
        },5000)
    }).then(user =>{
        res.redirect('/instagram/home')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
})




module.exports = router