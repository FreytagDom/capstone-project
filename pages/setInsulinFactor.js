import FactorEntry from '../components/SetInsulinFactor';
import SavedFactor from '../components/SavedInsulinFactor';
import { getAllDayFactors } from '../services/savedDayFactorService';

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
    });
    const response_ = await response.json();
    console.log(response_);
  }

  return (
    <>
      <FactorEntry onHandleSetFactor={handleSetSubmit} />
      <SavedFactor factors={factors} />
    </>
  );
}
