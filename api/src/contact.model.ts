import mongoose from 'mongoose';
import { IContact } from './interfaces';

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

export default mongoose.model<IContact>("Contact", ContactSchema);