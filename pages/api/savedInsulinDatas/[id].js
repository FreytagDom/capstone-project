import SavedInsulinData from '../../../models/InsulinApp';

  export default async function handler(request, response) {
    const { method, query } = request;
    switch (method) {
      case 'DELETE':
        try {
          const { userMail } = query;
          await SavedInsulinData.deleteMany({ userMail: userMail });
          response.status(200).json({ message: 'SavedInsulinData deleted' });
        } catch (error) {
          console.error(error);
          response.status(500).json({ message: 'Error deleting SavedInsulinData' });
        }
        break;
      default:
        response.status(405).json({ message: 'Method not allowed' });
    }
  }
