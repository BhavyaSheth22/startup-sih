import { model, Schema, Document } from 'mongoose';
import { Scheme } from '@interfaces/schemes.interface';

const workshopSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  ministry: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
});

const userModel = model<Scheme & Document>('Workshop', workshopSchema);

export default userModel;
