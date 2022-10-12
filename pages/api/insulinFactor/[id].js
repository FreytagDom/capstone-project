import { getFactorById } from '../../../services/dayTimeFactorsService';
import DayTimeFactor from '../../../models/DayTimeFactor';

export default async function handler(request, response) {
  const { id } = request.query;
  switch (request.method) {
    case 'GET':
      const product = getFactorById(id);
      response.status(200).json(product);
      break;
    case 'PUT': {
      const data = request.body;
      await DayTimeFactor.findByIdAndUpdate(id, data);
      response.status(200).json({ message: 'DayTimeFactor updated' });
      break;
    }
    case 'DELETE': {
      await DayTimeFactor.findByIdAndDelete(id);
      response.status(200).json({ message: 'DayTimeFactor deleted' });
      break;
    }
    default:
      response.status(405).json({ message: 'Message not allowed' });
  }
}
