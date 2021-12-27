import { Response, Request, Application } from 'express'
import { keys } from './config/keys'

var fs = require('fs');
var https = require('https');

var privateKey  = fs.readFileSync(__dirname + '/ssl/host.key');
var certificate = fs.readFileSync(__dirname + '/ssl/host.cert');
var credentials = {key: privateKey, cert: certificate};

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const cookieSession = require('cookie-session')

const isAuthenticated = require('./modules/isAuthenticated')

const authRoutes = require('./routes/auth.routes')
const instagramRoutes = require('./routes/instagram.routes')


require('dotenv').confing
const PORTHTTPS = 7000 || process.env.HTTPS

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}))

app.use('/public', express.static('public'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/modules', express.static(__dirname + '/modules'));
app.set('views',path.join(__dirname,"../views"))
app.set('view engine','ejs')

app.get('/',(req:any,res:any)=>{
    res.redirect('/instagram/auth/login')
})

app.use('/instagram/auth',authRoutes)

app.use('/instagram', /* isAuthenticated,*/ instagramRoutes)

var httpsServer = https.createServer(credentials, app);



httpsServer.listen(PORTHTTPS,(req:Request,res:Response)=>{
    console.log('https server started at port ' + PORTHTTPS)
})

