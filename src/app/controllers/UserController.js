const User = require('../model/User');
const { mongooseToObject, mutipleMongooseToObject  } = require('../../util/mongoose');

class UserController {
    // [GET] :slug
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then((user) => {
                res.render('user/show', { user: mongooseToObject(user) });
            })
            .catch(next);
    }
    // [GET] /user/search
    search(req, res, next) {
       const q = req.query.q;
       User.find({ name: new RegExp(q)})
       .then((users) => {
        res.render('home', {
            users: mutipleMongooseToObject(users),
        });
    })
    .catch(next);
    }
    // [GET] /create
    create(req, res, next) {
        res.render('user/create');
    }
    edit(req, res, next) {
        User.findById(req.params.id)
            .then((user) =>
                res.render('user/edit', { user: mongooseToObject(user) }),
            )
            .catch(next);
    }
    // [POST] /user/store
    store(req, res, next) {
        req.body.img = req.file.path.split('/').slice(5).join('/');
        const user = new User(req.body);
        user
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    // [PUT] /user/;id
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // [DELETE] /user/:id
    destroy(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /user/:id
    forceDestroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next);
    }
    // [PATCH] /user/:id/restore
    restore(req, res, next) {
        User.restore({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next);
    }
    // [POST] /user/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                User.delete({ _id: { $in: req.body.userId } })
                    .then(res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Action invalid' });
                break;
        }
    }
    handleFormActionBin(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                User.restore({ _id: { $in: req.body.userId } })
                    .then(res.redirect('back'))
                    .catch(next);
                break;
            case 'force-delete':
                User.deleteMany({ _id: { $in: req.body.userId } })
                    .then(res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Action invalid' });
                break;
        }
    }
}

module.exports = new UserController();
