import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema({
  bloodsugar: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  insulin: { type: String, required: true },
  daytimeFactor: { type: Number, required: true },
  calculateUnit: { type: Number, required: true },
});

const SavedInsulinData =
  mongoose.models.SavedInsulinData ||
  mongoose.model('SavedInsulinData', cardSchema);

export default SavedInsulinData;
