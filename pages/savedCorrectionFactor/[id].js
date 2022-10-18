import { getCorrectionFactorsById } from '../../services/correctionFactorsService';
import { getAllCorrectionFactors } from '../../services/correctionFactorsService';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const correctionFactors = getAllCorrectionFactors();
  const correctionFactor = await getCorrectionFactorsById(id);

  return {
    props: {
      daytimeFactors,
      correctionFactor,
    },
  };
}
export default function SavedCorrectionFactor({ correctionFactors }) {
  const {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor,
  } = daytimeFactors;
  function updateCorrectionFactor(updatedCorrectionFactor) {
    console.log(updatedCorrectionFactor);
  }
}
