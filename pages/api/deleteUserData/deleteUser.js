import dbConnect from '../../../dbConnect';

export default async function handler(req, res, session) {
  const userId = session.user.email;
  if (req.method !== 'DELETE') {
    return res.status(405).end();
  }
  try {
    const { db } = await dbConnect();

    await db('factors').findByIdAndDelete({ userId });
    await db('correctionfactors').findByIdAndDelete({userId});
    await db('insulinData').findByIdAndDelete({userId});

    res.status(200).json({ message: 'User data deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred.' });
  }
}
