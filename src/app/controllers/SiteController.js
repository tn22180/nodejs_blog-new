const User = require('../model/User');
const Session = require('../model/Session');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        User.find({})
            .then((users) => {
                var page = parseInt(req.query.page) || 1;
                var perPage = 8;
                const start = (page-1)*perPage;
                const end = page*perPage;
                res.render('home', {
                    users: mutipleMongooseToObject(users.slice(start,end)),
                });
            })
            .catch(next);
    }
    search(req, res) {
        // [GET] about
        res.render('search', {
            title: 'Search Page',
        });
    }
}

module.exports = new SiteController();
