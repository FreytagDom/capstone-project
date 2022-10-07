import FactorEntry from '../components/SetInsulinFactor';

export default function CreateFactor() {
  async function handleSetSubmit(morningfactor, lunchfactor, eveningfactor) {
    const response = await fetch('/api/insulinFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ morningfactor, lunchfactor, eveningfactor }),
    });
    const response_ = await response.json();
    console.log(response_);
  }

  return (
    <>
      <FactorEntry onHandleSetFactor={handleSetSubmit} />
    </>
  );
}
