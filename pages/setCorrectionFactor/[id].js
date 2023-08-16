import CorrectionFactorEntry from '../../components/SetCorrectionFactor/SetCorrectionFactor';
import { getCorrectionFactorsById } from '../../services/correctionFactorsService';

export async function getServerSideProps(context) {
  const { id } = context.params;

  const correctionFactor = await getCorrectionFactorsById(id);
  return {
    props: {
      correctionFactor,
    },
  };
}
export default function DayTimeFactor({ correctionFactor }) {
  const fetchApi = fetch();
  async function updateCorrectionFactor(updatedCorrectionFactor) {
    await fetchApi(`/api/setCorrectionFactor/${correctionFactor.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCorrectionFactor),
    });

    console.log('updated!');
  }

  return (
    <>
      <CorrectionFactorEntry
        onHandleSetCorrectionfactor={updateCorrectionFactor}
      />
    </>
  );
}
