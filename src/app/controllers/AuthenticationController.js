const md5 = require('md5');
const User = require('../model/User');

class AuthenticationController {
    login(req, res, next)
    {   
        res.render('authentication/login')
    }
    postLogin(req, res, next)
    {
       User.findOne({ email: req.body.email })
            .then((user) => {
                if(!user){
                    res.render('authentication/login',{
                        values: req.body
                    })
                    return;
                } 
                const hashedPassword = md5(req.body.password);
                if(user.password !== hashedPassword)
                {
                    res.render('authentication/login',{
                        values: req.body
                     })
                     return;
                 }
                 res.cookie('userId', user._id, {
                    signed: true
                 })
                 res.redirect("/");   
                
            })
            .catch(next)
      
    }
}
module.exports = new AuthenticationController();
