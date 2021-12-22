import { Response, Request, Application } from 'express'

const express = require('express')
const path = require('path')
const app = express()

const authRoutes = require('./controller/auth.controller')

require('dotenv').confing

const PORT = 4000 || process.env.PORT

app.use('/public', express.static('public'));
app.set('views',path.join(__dirname,"../views"))
app.set('view engine','ejs')

app.get('/',(req:any,res:any)=>{
    res.redirect('/instagram/login')
})

app.use('/instagram',authRoutes)

app.listen(PORT,(req:Request,res:Response)=>{
    console.log('server started at port ' + PORT)
})