import dbConnect from '../dbConnect';
import SavedInsulinData from '../models/InsulinApp';

export async function getAllCategories() {
  await dbConnect();

  const savedInsulinData = await SavedInsulinData.find().sort({ date: -1 });

  return savedInsulinData.map(
    ({
      id,
      user,
      bloodsugar,
      carbohydrates,
      insulin,
      daytimeFactor,
      correctionFactor,
      calculateUnit,
      date,
    }) => {
      return {
        id,
        user,
        bloodsugar,
        carbohydrates,
        insulin,
        daytimeFactor,
        correctionFactor,
        calculateUnit,
        date,
      };
    }
  );
}

export async function getCategoryById(savedInsulinId) {
  await dbConnect();

  const savedInsulin = await SavedInsulinData.findById(savedInsulinId);

  const {
    id,
    user,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date,
  } = savedInsulin;

  return {
    id,
    user,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date,
  };
}
