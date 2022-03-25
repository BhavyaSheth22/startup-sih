import { model, Schema, Document } from 'mongoose';
import { Workshop } from '@interfaces/workshops.interface';

const workshopSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: false,
  },
});

const userModel = model<Workshop & Document>('Workshop', workshopSchema);

export default userModel;
