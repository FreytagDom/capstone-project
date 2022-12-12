import styled from 'styled-components';
import { keyframes } from 'styled-components';
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

  return <>
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
  </>;
}

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  margin-top: -0.5rem;
  z-index: 1;
`;

const Label = styled.label`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 5rem;
  z-index: 1;
  opacity: 0.8;
`;

const LabelFa = styled(Label)`
  color: #364fc7;
`;

const DataInput = styled.input`
  text-align: center;
  z-index: 1;
  border-style: groove;
`;

const DataInputMorning = styled(DataInput)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const DataInputLate = styled(DataInput)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  height: 20px;
  z-index: 1;
  opacity: 0.9;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  gap: auto;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  justify-content: center;
  z-index: 1;
`;

const InsulinFactor = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  z-index: 1;
`;
