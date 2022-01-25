const aboutRouter = require('./about');
const userRouter = require('./user');
const siteRouter = require('./site');
const meRouter = require('./me');
const authRouter = require('./authentication');
const cartRouter = require('./cart');
const authMiddleware = require('../app/middlewares/AuthMiddleware');
const apiUser = require('../api/routers/site');

function route(app) {
    app.use('/about', authMiddleware.requireAuth, userRouter);

    app.use('/auth', authRouter);

    app.use('/user',authMiddleware.requireAuth, userRouter);

    app.use('/api', apiUser);

    app.use('/cart', cartRouter);

    app.use('/me', authMiddleware.requireAuth, meRouter);

    app.use('/',authMiddleware.requireAuth,  siteRouter);
}
module.exports = route;
