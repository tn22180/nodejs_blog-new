const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /me/stored-courses
    storedCourses(req, res, next) {
        let userQuery = User.find({});
        if (req.query.hasOwnProperty('_sort')) {
            userQuery = userQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([userQuery, User.countDocumentsDeleted()])
            .then(([users, countDelete]) =>
                res.render('me/stored-courses', {
                    countDelete,
                    users: mutipleMongooseToObject(users),
                }),
            )
            .catch(next);
    }
    // [GET] /me/trash-courses
    trashCourses(req, res, next) {
        User.findDeleted({})
            .then((users) => {
                res.render('me/trash-courses', {
                    users: mutipleMongooseToObject(users),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
