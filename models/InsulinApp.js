import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema({
  bloodsugar: { type: Number, required: true, timestamps: true },
  carbohydrates: { type: Number, required: true, timestamps: true },
  insulin: { type: String, required: true, timestamps: true },
  daytimeFactor: { type: Number, required: true, timestamps: true },
  calculateUnit: { type: Number, required: true, timestamps: true },
  date: { type: String, required: true, timestamps: true },
});

const SavedInsulinData =
  mongoose.models.SavedInsulinData ||
  mongoose.model('SavedInsulinData', cardSchema);

export default SavedInsulinData;
