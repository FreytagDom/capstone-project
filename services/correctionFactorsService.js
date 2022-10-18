import dbConnect from '../dbConnect';
import CorrectionFactor from '../models/CorrectionFactor';

export async function getAllCorrectionFactors() {
  await dbConnect();

  const correctionFactors = await CorrectionFactor.find();

  const correctionFactorArray = correctionFactors.map(
    ({
      id,
      morningcorrectionfactor,
      lunchcorrectionfactor,
      eveningcorrectionfactor,
      latecorrectionfactor,
    }) => {
      return {
        id,
        morningcorrectionfactor,
        lunchcorrectionfactor,
        eveningcorrectionfactor,
        latecorrectionfactor,
      };
    }
  );

  return correctionFactorArray;
}

export async function getCorrectionFactorsById(correctionFactorId) {
  await dbConnect();

  const correctionFactor = await CorrectionFactor.findById(correctionFactorId);

  const {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor,
  } = correctionFactor;

  return {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor,
  };
}
