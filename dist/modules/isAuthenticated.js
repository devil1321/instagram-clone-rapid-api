module.exports = function (req, res, next) {
    if (global.session_key) {
        next();
    }
    else {
        res.redirect('/instagram/login');
    }
};
