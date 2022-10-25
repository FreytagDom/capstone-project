import styled from 'styled-components';
import { keyframes } from 'styled-components';
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

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  z-index: 1;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
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

const CorrectionFactorTitel = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  z-index: 1;
`;
