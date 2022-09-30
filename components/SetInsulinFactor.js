import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Fragment } from 'react';

export default function FactorEntry({ onAddFactor }) {
  const [factor, setFactor] = useLocalStorage('_cart', []);
  function addFactor(cardFactor) {
    setFactor([cardFactor, ...factor]);
  }

  function handleSetFactor(event) {
    event.preventDefault();
    const form = event.target;
    const setinsulin = form.setinsulinSelect.value;
    const setmorningfactor = form.setmorningfactor.value;
    const setlunchfactor = form.setlunchfactor.value;
    const seteveningfactor = form.seteveningfactor.value;
    const cardFactor = {
      id: setinsulin,
      setinsulin: setinsulin,
      setmorningfactor: setmorningfactor,
      setlunchfactor: setlunchfactor,
      seteveningfactor: seteveningfactor,
    };

    onAddFactor(cardFactor);

    form.reset();
  }
  useEffect(() => {
    localStorage.setItem('key', JSON.stringify());
  });

  const options = [
    { value: 'Basal', label: 'Basal' },
    { value: 'Bolus', label: 'Bolus' },
    { value: 'Fiasp', label: 'Fiasp' },
  ];

  return (
    <>
      <Wrapper>
        <InsulinFactor>Faktor anlegen</InsulinFactor>
        <EntryForm onSubmit={handleSetFactor}>
          <Fragment>
            <LabelIu> Welches Insulin </LabelIu>

            <InsulinSelect
              htmlFor="setinsulin"
              name="setinsulinSelect"
              id={InsulinOption.id}
            >
              {options.map((option) => (
                <InsulinOption key={option.value} value={option.value}>
                  {option.label}
                </InsulinOption>
              ))}
            </InsulinSelect>
          </Fragment>
          <LabelFa htmlFor="factor">
            Welcher Tageszeit <br /> Faktor
            <DataInput
              type="decimal"
              name="setmorningfactor"
              placeholder="Faktor morgens"
              id="setmorningfactor"
              maxLength={'3'}
              min="0"
            />
            <DataInput
              type="decimal"
              name="setlunchfactor"
              placeholder="Faktor mittags"
              id="setlunchfactor"
              maxLength={'3'}
              min="0"
            />
            <DataInput
              type="decimal"
              name="seteveningfactor"
              placeholder="Faktor abends"
              id="seteveningfactor"
              maxLength={'3'}
              min="0"
            />
          </LabelFa>

          <Button type="submit" onSubmit={handleSetFactor}>
            bestätigen
          </Button>
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
`;

const LabelIu = styled(Label)`
  color: #5c940d;
  height: 1.5rem;
`;

const LabelFa = styled(Label)`
  color: #364fc7;
`;
const InsulinSelect = styled.select`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 4rem;
  color: #364fc9;
`;

const InsulinOption = styled.option`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
const DataInput = styled.input`
  border-radius: 8px;
  text-align: center;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  height: 20px;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  display: grid;
  gap: auto;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  justify-content: center;
`;

const InsulinFactor = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
`;
