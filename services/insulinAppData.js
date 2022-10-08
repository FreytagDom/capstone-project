import dbConnect from '../dbConnect';
import SavedInsulinData from '../models/InsulinApp';

export async function getAllCategories() {
  await dbConnect();

  const savedInsulinData = await SavedInsulinData.find();

  return savedInsulinData.map(
    ({ id, bloodsugar, carbohydrates, insulin, factor, calculateUnits }) => {
      return {
        id,
        bloodsugar,
        carbohydrates,
        insulin,
        factor,
        calculateUnits,
      };
    }
  );
}

export async function getCategoryById(savedInsulinId) {
  await dbConnect();

  const savedInsulin = await SavedInsulinData.findById(savedInsulinId);

  const { id, bloodsugar, carbohydrates, insulin, factor, calculateUnits } =
    savedInsulin;

  return { id, bloodsugar, carbohydrates, insulin, factor, calculateUnits };
}
