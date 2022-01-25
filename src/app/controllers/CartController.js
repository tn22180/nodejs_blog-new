const md5 = require('md5');
const Session = require('../model/Session');
const User = require('../model/Session');

class CartController {
    add(req, res, next)
    {   
        const userId = req.params.id;
        const sessionId = req.signedCookies.sessionId;
        if(!sessionId)
        {
            res.redirect('/');
            return;
        }
        
        Session.findOne({_id: sessionId})
            .then(session => {
                var count = session.get('cart.'+userId, 0);
                session.set('cart.'+userId, count + 1)
                session.save();
                res.json(session);
            })
            .catch(next)
    }
}
module.exports = new CartController();
