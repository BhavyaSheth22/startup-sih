import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

export const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

const userModel = model<User>('User', userSchema);

export default userModel;
