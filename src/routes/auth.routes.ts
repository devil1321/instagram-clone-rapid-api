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

router.post('/authorize', (req:any,res:any) => {
  const { name, password } = req.body 
  IG_USERS.getLogin(name,password)
  setTimeout(()=>{
      console.log(global.session_key)
  },1000)
})


module.exports = router