import { Types } from "mongoose"
import { User } from "./users.interface"

export interface Post {
    _id?: string,
    title: string,
    text: string,
    likes: [Like],
    comments: [Comment],
    photoUrl: string,
    poster: User
}

export interface Like {
    _id?: string,
    user: Types.ObjectId
}

export interface Comment {
    _id?: string,
    text: string,
    user: Types.ObjectId
}