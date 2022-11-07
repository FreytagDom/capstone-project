import mongoose from 'mongoose';

const { Schema } = mongoose;

const factorSchema = new Schema({
  _id: { type: Number },
  user: { type: String, required: true },
  morningfactor: { type: Number, required: true },
  lunchfactor: { type: Number, required: true },
  eveningfactor: { type: Number, required: true },
  latefactor: { type: Number, required: true },
});

const DayTimeFactor =
  mongoose.models.DayTimeFactor ||
  mongoose.model('DayTimeFactor', factorSchema);

export default DayTimeFactor;
