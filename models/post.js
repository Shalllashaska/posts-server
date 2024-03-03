const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = Post = mongoose.model('Post', postSchema);