import { Response, Request, Application } from 'express'
const IG_USERS = require('../modules/actions/user.actions')

const router = require('express').Router()
const setUserDataContoller = require('../modules/controllers/setUserData.controller')
const setUserPostsArrayController = require('../modules/controllers/setUserPostsArray.controller')
router.get('/home',/*setUserDataContoller,setUserPostsArrayController,*/(req:Request,res:any)=>{
    // console.log(IG_USERS)
    res.render('home',{title:'Home'})
})

module.exports = router