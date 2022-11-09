import dbConnect from '../../../dbConnect';
import DayTimeFactor from '../../../models/DayTimeFactor';
import { getAllFactors } from '../../../services/dayTimeFactorsService';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request, response) {
  const session = await unstable_getServerSession(
    request,
    response,
    authOptions
  );
  switch (request.method) {
    case 'GET':
      const daytimeFactors = await getAllFactors();
      return response.status(200).json({ daytimeFactors });

    case 'POST':
      await dbConnect();
      const data = request.body;
      const logedUserId = session.user.email;
      const result = await DayTimeFactor.findOneAndUpdate(
        { _id: logedUserId },
        data,
        {
          new: true,
          upsert: true,
        }
      );

      return response
        .status(201)
        .json({ message: 'DayTimeFactor was created' });
  }
}
