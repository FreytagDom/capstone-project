import mongoose from 'mongoose';

const { Schema } = mongoose;

const factorSchema = new Schema({
  morningfactor: { type: Number, required: true },
  lunchfactor: { type: Number, required: true },
  eveningfactor: { type: Number, required: true },
});

const DayTimeFactor =
  mongoose.models.DayTimeFactor ||
  mongoose.model('DayTimeFactor', factorSchema);

export default DayTimeFactor;
