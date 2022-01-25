const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Session = new Schema(
    {
        _id: { type: String},
        cart: {type: Object}
    },
    {
        _id: false,
        timestamps: true,
    },
);
// Add plugin
Session.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('session', Session);
