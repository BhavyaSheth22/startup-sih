const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema= new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    photoUrl: {
        type: String
    },
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Comment = mongoose.model('Comment', commentSchema);
const Post = mongoose.model('Post', postSchema);

module.exports={Post, Comment};