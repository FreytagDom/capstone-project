import FactorEntry from '../components/SetInsulinFactor';
import SavedFactor from '../components/SavedInsulinFactor';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const factors = await getAllDayFactors();

  return {
    props: {
      factors: factors,
    },
  };
}
export default function CreateFactor({ factors }) {
  async function handleSetSubmit(
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  ) {
    const response = await fetch('/api/insulinFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      }),
    }).then((res) => {
      if (res.ok) router.reload();
    });
  }
  const router = useRouter();
  return (
    <>
      <FactorEntry onHandleSetFactor={handleSetSubmit} />
      <SavedFactor factors={factors} />
    </>
  );
}
