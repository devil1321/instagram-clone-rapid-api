import { keys } from './keys'

const passport = require('passport')
const InstagramStrategy = require('passport-instagram').Strategy

passport.serializeUser((user:any,done:any)=>{
    done(null,user.id)
})

passport.deserializeUser((user:any,done:any)=>{
    done(null,user.id)
})

passport.use(new InstagramStrategy({
        clientID:keys.passport.clientID,
        clientSecret:keys.passport.clientSecret,
        callbackURL:'/instagram/auth/authorize/callback',
    },
    function(accessToken:string,refreshToken:string,profile:any,done:any){
        global.accessToken = accessToken
        console.log(profile)
        done(null,profile)
    }
))