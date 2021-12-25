import axios from 'axios'
import { Response, Request, Application } from 'express'

const router = require('express').Router()
const passport = require('passport')

router.get('/login',(req:Request,res:any)=>{
    res.render('login',{title:'Login'})
})

router.get('/sign-up',(req:Request,res:any)=>{
    res.render('signup',{title:"Sign Up"})
})

router.get('/authorize',passport.authenticate('instagram',{
    scope:['user_profile','user_media'],
    failWithError: true
}))

router.get('/authorize/callback',passport.authenticate('instagram',{failWithError: true,failureRedirect:'/instagram/auth/login'}), (req:Request,res:any)=>{
    res.redirect('/home')
})

module.exports = router