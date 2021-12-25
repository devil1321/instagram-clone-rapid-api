import { Response, Request, Application } from 'express'
import { bindActionCreators } from 'redux'
import store from '../controller/store'
import * as BasicActions from '../controller/action-creators/basicActions'
import * as GraphActions from '../controller/action-creators/graphActions'

const router = require('express').Router()

const dispatch = store.dispatch
const basicActions = bindActionCreators(BasicActions,dispatch)

router.get('/home',(req:Request,res:any)=>{
    basicActions.getMe()
    basicActions.getUser(store.getState().basicAPI.me.id)
    // basicActions.getUser()
    res.render('home',{title:'Home'})
})

module.exports = router