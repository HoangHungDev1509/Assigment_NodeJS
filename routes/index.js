const newsRouter = require('./news');
const adminRouter = require('./admin');
const coursesRouter = require('./courses');
const usersRouter = require('./users');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/admin', adminRouter);

    app.use('/courses', coursesRouter);

    app.use('/users', usersRouter);

    app.use('/', siteRouter);
}

module.exports = route;
