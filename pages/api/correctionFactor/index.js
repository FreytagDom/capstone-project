import dbConnect from '../../../dbConnect';
import CorrectionFactor from '../../../models/CorrectionFactor';
import { getAllCorrectionFactors } from '../../../services/correctionFactorsService';
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
      const correctionFactors = await getAllCorrectionFactors();
      return response.status(200).json({ correctionFactors });

    case 'POST':
      await dbConnect();
      const data = request.body;
      const logedUserId = session.user.email;
      const result = await CorrectionFactor.findOneAndUpdate(
        { _id: logedUserId },
        data,
        {
          new: true,
          upsert: true,
        }
      );

      return response
        .status(201)
        .json({ message: 'CorrectionFactor was created' });
  }
}
