import CorrectionFactorEntry from '../components/SetCorrectionFactor';

export default function CreateCorretionfactor() {
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
    </>
  );
}
