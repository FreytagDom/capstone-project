import dbConnect from '../../../dbConnect';
import DayTimeFactor from '../../../models/DayTimeFactor';
import { getAllDayFactors } from '../../../services/savedDayFactorService';

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case 'GET':
      const daytimeFactors = await getAllDayFactors();
      return response.status(200).json({ daytimeFactors });

    case 'POST':
      await dbConnect();

      const data = request.body;

      await DayTimeFactor.create(data);

      return response.status(201).json({ message: '' });
  }
}
