import { getCategoryById } from '../../../services/insulinAppDataService';
import SavedInsulinData from '../../../models/InsulinApp';

export default async function handler(request, response) {
  const { id } = request.query;
  switch (request.method) {
    case 'GET':
      const cardData = getCategoryById(user);
      response.status(200).json(cardData);
      break;

    case 'DELETE': {
      await SavedInsulinData.findByIdAndDelete(id);
      response.status(200).json({ message: 'SavedInsulinData deleted' });
      break;
    }
    default:
      response.status(405).json({ message: 'Message not allowed' });
  }
}
