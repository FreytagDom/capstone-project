import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema({
  id: { type: String, required: true },
  bloodsugar: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  insulin: { type: String, required: true },
  factor: { type: Number, required: true },
  calculateUnits: { type: Number, required: true },
});

const SavedInsulinData =
  mongoose.models.SavedInsulinData ||
  mongoose.model('SavedInsulinData', cardSchema);

export default SavedInsulinData;
