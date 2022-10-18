import dbConnect from '../dbConnect';
import DayTimeFactor from '../models/DayTimeFactor';

export async function getAllFactors() {
  await dbConnect();

  const daytimeFactors = await DayTimeFactor.find();

  return daytimeFactors.map(
    ({ id, morningfactor, lunchfactor, eveningfactor, latefactor }) => {
      return {
        id,
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      };
    }
  );
}

export async function getFactorById(dayTimeFactorId) {
  await dbConnect();

  const dayTimeFactor = await DayTimeFactor.findById(dayTimeFactorId);

  const { id, morningfactor, lunchfactor, eveningfactor, latefactor } =
    dayTimeFactor;

  return { id, morningfactor, lunchfactor, eveningfactor, latefactor };
}
