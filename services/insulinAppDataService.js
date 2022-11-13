import dbConnect from '../dbConnect';
import SavedInsulinData from '../models/InsulinApp';

export async function getAllCategories() {
  await dbConnect();

  const savedInsulinData = await SavedInsulinData.find().sort({ date: -1 });

  return savedInsulinData.map(
    ({
      id,
      userMail,
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
        userMail,
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
    userMail,
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
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date,
  };
}
