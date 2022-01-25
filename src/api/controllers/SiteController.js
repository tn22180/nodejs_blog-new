const User = require('../../app/model/User');

const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        User.find({})
            .then((users) => {
                res.json(users);
            })
            .catch(next);
    }
}

module.exports = new SiteController();
