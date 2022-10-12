import dbConnect from '../dbConnect';
import CorrectionFactor from '../models/CorrectionFactor';

export async function getAllProducts() {
  await dbConnect();

  const corretionFactors = await CorrectionFactor.find();

  const correctionFactorArray = corretionFactors.map(
    ({
      id,
      morningcorretionfactor,
      lunchcorretionfactor,
      eveningcorretionfactor,
    }) => {
      return {
        id,
        morningcorretionfactor,
        lunchcorretionfactor,
        eveningcorretionfactor,
      };
    }
  );

  return correctionFactorArray;
}

export async function getProductById(corretionFactorId) {
  await dbConnect();

  const corretionFactor = await CorrectionFactor.findById(corretionFactorId);

  const {
    id,
    morningcorretionfactor,
    lunchcorretionfactor,
    eveningcorretionfactor,
  } = corretionFactor;

  return {
    id,
    morningcorretionfactor,
    lunchcorretionfactor,
    eveningcorretionfactor,
  };
}
