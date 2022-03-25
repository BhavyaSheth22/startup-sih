import { Post } from "./posts.interface";

export interface User {
  _id: string;
  email: string;
  password: string;
  posts: [Post]
}
