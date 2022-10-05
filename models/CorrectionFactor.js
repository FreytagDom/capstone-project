import mongoose from 'mongoose';

const { Schema } = mongoose;

const correctionSchema = new Schema({
  morningcorretionfactor: { type: Number, required: true },
  lunchcorretionfactor: { type: Number, required: true },
  eveningcorretionfactor: { type: Number, required: true },
});

// CRUD: CREATE / READ / UPDATE / DELETE
const CorrectionFactor =
  mongoose.models.CorrectionFactor ||
  mongoose.model('CorrectionFactor', correctionSchema);

export default CorrectionFactor;
