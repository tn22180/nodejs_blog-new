const aboutRouter = require('./about');
const userRouter = require('./user');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/about', userRouter);

    app.use('/user', userRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}
module.exports = route;
