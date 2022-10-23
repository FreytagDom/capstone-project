import dbConnect from '../../../dbConnect';
import CorrectionFactor from '../../../models/CorrectionFactor';
import { getAllCorrectionFactors } from '../../../services/correctionFactorsService';

export default async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const correctionFactors = await getAllCorrectionFactors();
      return response.status(200).json({ correctionFactors });

    case 'POST':
      await dbConnect();

      const data = request.body;

      const result = await CorrectionFactor.findOneAndUpdate({ _id: 1 }, data, {
        new: true,
        upsert: true,
      });
      return response
        .status(201)
        .json({ message: 'CorrectionFactor was created' });
  }
}
