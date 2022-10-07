import dbConnect from '../../../dbConnect';
import DayTimeFactor from '../../../models/DayTimeFactor';
import { getAllFactors } from '../../../services/dayTimeFactorsService';

export default async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const daytimeFactors = await getAllFactors();
      return response.status(200).json({ daytimeFactors });

    case 'POST':
      await dbConnect();

      const data = request.body;

      await DayTimeFactor.updateMany(data);

      return response
        .status(201)
        .json({ message: 'DayTimeFactor was created' });
  }
}
