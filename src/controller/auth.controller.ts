const router = require('express').Router()


router.get('/login',(req:Request,res:any)=>{
    res.render('login')
})

router.get('/sign-up',(req:Request,res:any)=>{
    res.render('sign-up')
})


module.exports = router