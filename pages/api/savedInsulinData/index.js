import dbConnect from '../../../dbConnect';
import SavedInsulinData from '../../../models/InsulinApp';
import { getAllCategories } from '../../../services/insulinAppDataService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const savedInsulinData = await getAllCategories();
    response.status(200).json({ savedInsulinData });
  } else {
    response.status(405).json({ message: 'Method not allowed' });
  }
}
