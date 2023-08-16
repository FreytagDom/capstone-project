import {
  Wrapper,
  CorrectionFactorTitel,
  EntryForm,
  LabelFa,
  DataInputMorning,
  DataInput,
  DataInputLate,
  Button,
} from './SetCorrectionFactorStyles';
import { useState } from 'react';

export default function CorrectionFactorEntry({
  CorrectionFactor,
  onHandleSetCorrectionfactor,
}) {
  const [morningcorrectionfactor, setMorningcorrectionfactor] = useState(
    CorrectionFactor?.morningcorrectionfactor ?? ''
  );
  const [lunchcorrectionfactor, setLunchcorrectionfactor] = useState(
    CorrectionFactor?.lunchcorrectionfactor ?? ''
  );
  const [eveningcorrectionfactor, setEveningcorrectionfactor] = useState(
    CorrectionFactor?.eveningcorrectionfactor ?? ''
  );
  const [latecorrectionfactor, setLatecorrectionfactor] = useState(
    CorrectionFactor?.latecorrectionfactor ?? ''
  );

  function handleSetCorrectionFactor(event) {
    onHandleSetCorrectionfactor(
      morningcorrectionfactor,
      lunchcorrectionfactor,
      eveningcorrectionfactor,
      latecorrectionfactor
    );
    event.preventDefault();
    setMorningcorrectionfactor('');
    setLunchcorrectionfactor('');
    setEveningcorrectionfactor('');
    setLatecorrectionfactor('');
    event.target.reset();
  }

  return (
    <>
      <Wrapper>
        <CorrectionFactorTitel>Korrekturfaktor anlegen</CorrectionFactorTitel>
        <EntryForm
          onSubmit={handleSetCorrectionFactor}
          id="correctionfactor"
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        >
          <LabelFa htmlFor="correctionfactor" id="correctionfactor">
            Welcher Tageszeit <br /> Korrekturaktor
            <DataInputMorning
              type="decimal"
              name="setcorrectionmorningfactor"
              placeholder="Korrekturfaktor morgens"
              id="setcorrectiomorningfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setMorningcorrectionfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="setcorrectiolunchfactor"
              placeholder="Korrekturfaktor mittags"
              id="setcorrectiolunchfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setLunchcorrectionfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="setcorrectioeveningfactor"
              placeholder="Korrekturfaktor abends"
              id="setcorrectioeveningfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setEveningcorrectionfactor(event.target.value);
              }}
            />
            <DataInputLate
              type="decimal"
              name="setlatecorrectiofactor"
              placeholder="Korrekturfaktor spät"
              id="setcorrectiolatefactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setLatecorrectionfactor(event.target.value);
              }}
            />
          </LabelFa>

          <Button type="submit">bestätigen</Button>
        </EntryForm>
      </Wrapper>
    </>
  );
}
