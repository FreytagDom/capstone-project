import dbConnect from '../../../dbConnect';
import SavedInsulinData from '../../../models/InsulinApp';
import { getAllCategories } from '../../../services/insulinAppDataService';

export default async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const savedInsulinData = await getAllCategories();
      return response.status(200).json({ savedInsulinData });

    case 'DELETE':
      await dbConnect();

      const data = request.body;

      await SavedInsulinData.findOneAndDelete();

      return response
        .status(201)
        .json({ message: 'SavedInsulinData was created' });
  }
}
