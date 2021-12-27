import { Response, Request, Application } from 'express'

const router = require('express').Router()

router.get('/home',(req:Request,res:any)=>{
    res.render('home',{title:'Home'})
})

module.exports = router