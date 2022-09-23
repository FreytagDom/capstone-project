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
    const factor = form.factor.value;
    InsulinUnit(bloodsugar, carbohydrates, factor);
    const calculateUnit = InsulinUnit;
    const cardData = {
      id: nanoid(),
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      factor: factor,
      calculateUnit: calculateUnit,
    };

    onAddData(cardData);
    form.reset();
  }
  let [value, setValue] = useState();
  function InsulinUnit(bloodsugar, carbohydrates, factor) {
    const targetValue = 100;
    const corretionValue = 60;

    const calculateUnit =
      (bloodsugar - targetValue) / corretionValue + carbohydrates / factor;
    setValue(calculateUnit);
  }
  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <LabelBz htmlFor="bloodsugar">
          Blutzuckerwert <br />
          mg/dl
          <DataInput
            type="number"
            name="bloodsugar"
            placeholder="letzter Blutzuckerwert"
            id="bloodsugar"
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
          />
        </LabelCa>

        <LabelIu htmlFor="insulin">
          Welches Insulin <br /> wird genommen
          <DataInput
            type="text"
            name="insulin"
            placeholder="Basal / Bolus"
            id="insulin"
          />
        </LabelIu>

        <LabelFa htmlFor="factor">
          Welcher Tageszeit <br /> Faktor
          <DataInput
            type="decimal"
            name="factor"
            placeholder="Tagezeit Faktor"
            id="factor"
          />
        </LabelFa>

        <Button type="submit">bestätigen</Button>
        <p>
          {value} Einheiten <br /> Insulin spritzen
        </p>
      </EntryForm>
    </>
  );
}

const Label = styled.label`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 4rem;
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
  border-radius: 15px;
  height: 20px;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
`;
