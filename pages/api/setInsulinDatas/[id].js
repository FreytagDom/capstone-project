import { getCategoryById } from '../../../services/insulinAppDataService';
import SavedInsulinData from '../../../models/InsulinApp';

export default async function handler(request, response) {
  const { id } = request.query;
  switch (request.method) {
    case 'GET':
      const datas = getCategoryById(id);
      response.status(200).json(datas);
      break;
    case 'PUT': {
      const data = request.body;
      await SavedInsulinData.findByIdAndUpdate(id, data);
      response.status(200).json({ message: 'SavedInsulinData updated' });
      break;
    }
    case 'DELETE': {
      await SavedInsulinData.findByIdAndDelete(id);
      response.status(200).json({ message: 'SavedInsulinData deleted' });
      break;
    }
    default:
      response.status(405).json({ message: 'Message not allowed' });
  }
}
