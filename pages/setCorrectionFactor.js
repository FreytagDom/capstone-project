import CorrectionFactorEntry from '../components/SetCorrectionFactor';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';
import SavedCorrectionFactor from '../components/SavedCorrectionFactor';
import { useRouter } from 'next/router';

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
    }).then(async (res) => {
      if (res.ok) router.reload();
    });
  }
  const router = useRouter();
  return (
    <>
      <CorrectionFactorEntry onHandleSetCorrectionfactor={handleSetSubmit} />
      <SavedCorrectionFactor correctionfactors={correctionfactors} />
    </>
  );
}
