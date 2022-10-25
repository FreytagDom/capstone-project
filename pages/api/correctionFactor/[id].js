import { getCorrectionFactorsById } from '../../../services/correctionFactorsService';
import CorrectionFactor from '../../../models/CorrectionFactor';

export default async function handler(request, response) {
  const { id } = request.query;
  switch (request.method) {
    case 'GET':
      const product = getCorrectionFactorsById(id);
      response.status(200).json(product);
      break;
    case 'PUT': {
      const data = request.body;
      await CorrectionFactor.findByIdAndUpdate(id, data);
      response.status(200).json({ message: 'CorrectionFactor updated' });
      break;
    }
    case 'DELETE': {
      await CorrectionFactor.findByIdAndDelete(id);
      response.status(200).json({ message: 'CorrectionFactor deleted' });
      break;
    }
    default:
      response.status(405).json({ message: 'Message not allowed' });
  }
}
