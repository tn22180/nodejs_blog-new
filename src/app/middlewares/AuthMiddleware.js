const User = require('../model/User');

module.exports.requireAuth = function(req, res, next)
{   
    if(!req.signedCookies.userId)
    {
        res.redirect('auth/login')
        return
    }
    User.findOne({_id : req.signedCookies.userId})
        .then((user) => {
            if(!user){
                res.redirect('auth/login')
                    return
            }
        })
        .catch(next)
    next();   
}