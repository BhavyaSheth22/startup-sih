import { Document, model, Schema } from "mongoose";
import { Comment, Like, Post } from "@interfaces/posts.interface"
import { userSchema } from "@models/users.model"

const commentSchema: Schema = new Schema({
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

// const likeSchema: Schema = new Schema({
//     user: userSchema
// })

const postSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    // likes: {
    //     type: [likeSchema]
    // },
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

export const commentModel = model<Comment & Document>('Comment', commentSchema);
// export const likeModel = model<Like & Document>('Like', likeSchema);
export const postModel = model<Post>('Post', postSchema);