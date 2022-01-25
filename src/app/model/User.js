const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const User = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        img: { type: String },
        email: { type: String },
        password: { type: String },
        info: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);
// Add plugin
mongoose.plugin(slug);

User.plugin(AutoIncrement);
User.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('user', User);
