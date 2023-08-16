import {
  Wrapper,
  InsulinFactor,
  EntryForm,
  LabelFa,
  DataInputMorning,
  DataInput,
  DataInputLate,
  Button,
} from './SetInsulinFactorStyles';
import { useState } from 'react';

export default function FactorEntry({ DayTimeFactor, onHandleSetFactor }) {
  const [morningfactor, setMorningfactor] = useState(
    DayTimeFactor?.morningfactor ?? ''
  );
  const [lunchfactor, setLunchfactor] = useState(
    DayTimeFactor?.lunchfactor ?? ''
  );
  const [eveningfactor, setEveningfactor] = useState(
    DayTimeFactor?.eveningfactor ?? ''
  );
  const [latefactor, setLatefactor] = useState(DayTimeFactor?.latefactor ?? '');

  function handleSetFactor(event) {
    onHandleSetFactor(morningfactor, lunchfactor, eveningfactor, latefactor);
    event.preventDefault();
    setMorningfactor('');
    setLunchfactor('');
    setEveningfactor('');
    setLatefactor('');
    event.target.reset();
  }

  return (
    <>
      <Wrapper>
        <InsulinFactor>Insulinfaktor anlegen</InsulinFactor>
        <EntryForm
          onSubmit={handleSetFactor}
          id="insulinfactor"
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        >
          <LabelFa htmlFor="factor" id="insulinfactor">
            Welcher Tageszeit <br /> Faktor
            <DataInputMorning
              type="decimal"
              name="setedmorningfactor"
              placeholder="Faktor morgens"
              id="setedmorningfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setMorningfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="setedlunchfactor"
              placeholder="Faktor mittags"
              id="setedlunchfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setLunchfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="seteveningfactor"
              placeholder="Faktor abends"
              id="seteveningfactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setEveningfactor(event.target.value);
              }}
            />
            <DataInputLate
              type="decimal"
              name="latefactor"
              placeholder="Faktor spät"
              id="latefactor"
              maxLength={'3'}
              min="0"
              required
              onChange={(event) => {
                setLatefactor(event.target.value);
              }}
            />
          </LabelFa>

          <Button type="submit">bestätigen</Button>
        </EntryForm>
      </Wrapper>
    </>
  );
}
