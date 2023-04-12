const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
    //[GET] /me/stored/products
    storedProducts(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('admin/stored-products', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new AdminController(); //exports gi require nhan do
