import CorrectionFactorEntry from '../components/SetCorrectionFactor';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';
import SavedCorrectionFactor from '../components/SavedCorrectionFactor';

export async function getServerSideProps() {
  const correctionfactors = await getAllCorrectionFactors();

  return {
    props: {
      correctionfactors: correctionfactors,
    },
  };
}

export default function CreateCorretionfactor({ correctionfactors }) {
  async function handleSetSubmit(
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor
  ) {
    const response = await fetch('/api/correctionFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningcorrectionfactor,
        lunchcorrectionfactor,
        eveningcorrectionfactor,
        latecorrectionfactor,
      }),
    });
    const response_ = await response.json();
    console.log(response_);
  }

  return (
    <>
      <CorrectionFactorEntry onHandleSetCorrectionfactor={handleSetSubmit} />
      <SavedCorrectionFactor correctionfactors={correctionfactors} />
    </>
  );
}
