const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        code: { type: String, require: true },
        name: { type: String, require: true },
        price: { type: String, require: true },
        image: { type: String },
        description: { type: String, require: true },
        slug: { type: String, slug: 'name' }, //, unique: true biến name thành không dấu và đưa vào dạng slug, unique: nếu 2 name trùng nhau thì tự động thêm shortid vào cuối name để chỉ có 1 slug duy nhất.
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
