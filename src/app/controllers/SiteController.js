const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res) {
        User.find({})
            .then((cousres) => {
                res.render('home', {
                    cousres: mutipleMongooseToObject(cousres),
                });
            })
            .catch(res.next);
    }
    search(req, res) {
        // [GET] about
        res.render('search', {
            title: 'Search Page',
        });
    }
}

module.exports = new SiteController();
