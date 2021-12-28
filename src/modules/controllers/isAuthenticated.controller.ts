module.exports = function(req:any,res:any,next:any){
    if(global.session_key){
        next()
    }else{
        res.redirect('/instagram/login');
    }
}