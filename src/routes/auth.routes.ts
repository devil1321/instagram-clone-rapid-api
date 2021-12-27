import axios from 'axios'
import { Response, Request, Application } from 'express'
const IG_USERS = require('../modules/userActions')
const router = require('express').Router()


router.get('/login',(req:Request,res:any)=>{
    res.render('login',{title:'Login'})
})

router.get('/sign-up',(req:Request,res:any)=>{
    res.render('signup',{title:"Sign Up"})
})

router.get('/authorize',(req:Request,res:any) => {
  const { name, password } = req.body 
  console.log(name,password)
}))


module.exports = router