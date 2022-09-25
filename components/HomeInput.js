import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function Input({ onAddData }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.insulin.value;
    const morningfactor = form.morningfactor.value;
    const lunchfactor = form.lunchfactor.value;
    const eveningfactor = form.eveningfactor.value;
    InsulinUnit(
      bloodsugar,
      carbohydrates,
      morningfactor,
      lunchfactor,
      eveningfactor
    );

    const cardData = {
      id: nanoid(),
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      morningfactor: morningfactor,
      lunchfactor: lunchfactor,
      eveningfactor: eveningfactor,
      calculateUnit: value,
    };

    console.log(cardData);
    onAddData(cardData);
    form.reset();
  }
  const [value, setValue] = useState();
  function InsulinUnit(
    bloodsugar,
    carbohydrates,
    morningfactor,
    lunchfactor,
    eveningfactor
  ) {
    const targetValue = 100;
    const corretionValue = 60;
    const calculateUnit =
      (bloodsugar - targetValue) / corretionValue +
      carbohydrates / (morningfactor || lunchfactor || eveningfactor) -
      0.1;
    function calculate() {
      return Number(calculateUnit).toFixed(1);
    }
    setValue(calculate);
  }

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <LabelBz htmlFor="bloodsugar">
          Blutzuckerwert <br />
          mg/dl
          <DataInput
            type="decimal"
            name="bloodsugar"
            placeholder="letzter Blutzuckerwert"
            id="bloodsugar"
            min="0"
            required
          />
        </LabelBz>

        <LabelCa htmlFor="carbohydrates">
          Kohlenhydrate (Khd) <br /> g (Gramm)
          <DataInput
            type="decimal"
            name="carbohydrates"
            placeholder="wieviele Khd 65g"
            id="carbohydrates"
            maxLength={'3'}
            min="0"
          />
        </LabelCa>

        <LabelIu htmlFor="insulin">
          Welches Insulin <br /> wird genommen
          <DataInput
            type="text"
            name="insulin"
            placeholder="Basal / Bolus"
            id="insulin"
            maxLength={8}
          />
        </LabelIu>

        <LabelFa htmlFor="factor">
          Welcher Tageszeit <br /> Faktor
          <DataInput
            type="decimal"
            name="morningfactor"
            placeholder="Faktor morgens"
            id="morningfactor"
            maxLength={'3'}
            min="0"
          />
          <DataInput
            type="decimal"
            name="lunchfactor"
            placeholder="Faktor mittags"
            id="lunchfactor"
            maxLength={'3'}
            min="0"
          />
          <DataInput
            type="decimal"
            name="eveningfactor"
            placeholder="Faktor abends"
            id="eveningfactor"
            maxLength={'3'}
            min="0"
          />
        </LabelFa>

        <Button type="submit">bestätigen</Button>

        <InsulinUnits htmlFor="insulinunits">
          {value} / Einheiten <br /> Insulin spritzen
        </InsulinUnits>
      </EntryForm>
    </>
  );
}

const Label = styled.label`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 4rem;
`;
const LabelBz = styled(Label)`
  color: #c92a2a;
`;
const LabelIu = styled(Label)`
  color: #5c940d;
`;
const LabelCa = styled(Label)`
  color: #e67700;
`;

const LabelFa = styled(Label)`
  color: #2b8a3e;
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

const InsulinUnits = styled.li`
  color: #364fc7;
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 4rem;
  position: inherit;
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
