import dbConnect from '../dbConnect';
import SavedInsulinData from '../models/InsulinApp';

export async function getAllCategories() {
  await dbConnect();

  const savedInsulinData = await SavedInsulinData.find();

  return savedInsulinData.map(
    ({
      id,
      bloodsugar,
      carbohydrates,
      insulin,
      daytimeFactor,
      calculateUnit,
      date,
    }) => {
      return {
        id,
        bloodsugar,
        carbohydrates,
        insulin,
        daytimeFactor,
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
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    calculateUnits,
    date,
  } = savedInsulin;

  return {
    id,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    calculateUnits,
    date,
  };
}
