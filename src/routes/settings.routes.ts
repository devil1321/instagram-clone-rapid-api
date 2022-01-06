import { render } from 'ejs'
import { Response, Request, Application } from 'express'

const router = require('express').Router()

router.get('/edit-profile',(req:Request,res:any)=>{
    res.render('./settings-views/edit-profile',{title:'Edit Profile'})
})

router.get('/change-password',(req:Request,res:any)=>{
    res.render('./settings-views/change-password',{title:'Change Password'})
})

router.get('/manage-access',(req:Request,res:any)=>{
    res.render('./settings-views/manage-access',{title:'Apps & Websites'})
})
router.get('/email-and-sms',(req:Request,res:any)=>{
    res.render('./settings-views/email-sms',{title:'Email & SMS'})
})

router.get('/push-notifications',(req:Request,res:any)=>{
    res.render('./settings-views/push-notifications',{title:'Notifications'})
})

router.get('/manage-contacts',(req:Request,res:any)=>{
    res.render('./settings-views/manage-contacts',{title:'Manage Contacts'})
})

router.get('/privacy-and-security',(req:Request,res:any)=>{
    res.render('settings-views/privacy-and-security',{title:'Privacy & Security'})
})

router.get('/login-activity',(req:Request,res:any)=>{
    res.render('./settings-views/login-activity',{title:'Login Activity'})
})
router.get('/emails-from-instagram',(req:Request,res:any)=>{
    res.render('./settings-views/emails',{title:'Emails'})
})

router.get('/help',(req:Request,res:any)=>{
    res.render('./settings-views/help',{title:'Help'})
})

router.get('/switch-to-proffesional-account',(req:Request,res:any)=>{
    res.render('./settings-views/switch-to-proffessional-account',{title:'Switch Accounts'})
})

module.exports = router