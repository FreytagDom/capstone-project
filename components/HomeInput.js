import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Fragment } from 'react';

export default function Input({ factors, onHandleSetData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const setmorningfactor = form.dayfactorSelect.value;
    const setlunchfactor = form.dayfactorSelect.value;
    const seteveningfactor = form.dayfactorSelect.value;
    const calculateUnits = value;
    handleInsulinUnit(
      bloodsugar,
      carbohydrates,
      setmorningfactor,
      setlunchfactor,
      seteveningfactor
    );

    const cardData = {
      id: nanoid(),
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      morningfactor: setmorningfactor,
      lunchfactor: setlunchfactor,
      eveningfactor: seteveningfactor,
      calculateUnit: calculateUnits,
    };
    form.reset();
    console.log(cardData);
  }

  const [value, setValue] = useState();

  function handleInsulinUnit(
    bloodsugar,
    carbohydrates,
    morningfactor,
    lunchfactor,
    eveningfactor
  ) {
    const targetValue = 100;
    const corretionValue = 60;

    const calculateUnit = (
      (bloodsugar - targetValue) / corretionValue +
      carbohydrates / (morningfactor || lunchfactor || eveningfactor) -
      0.1
    ).toFixed(1);

    setValue(calculateUnit);

    // onHandleSetData(handleInsulinUnit);
  }

  const options = [
    { value: 'Basal', label: 'Basal' },
    { value: 'Bolus', label: 'Bolus' },
    { value: 'Fiasp', label: 'Fiasp' },
    { value: 'Humas', label: 'Humas' },
  ];

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
            key="bloodsugar"
            maxLength={3}
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
            key="carbohydrates"
            min="0"
          />
        </LabelCa>

        <Fragment>
          <LabelIu htmlFor="insulin">
            Welches Insulin <br /> wird genommen
            <InsulinSelect
              htmlFor="setinsulin"
              name="setinsulinSelect"
              id={InsulinOption.id}
            >
              {options.map((option) => (
                <InsulinOption
                  name="insulinOption"
                  key={option.label}
                  value={option.value}
                >
                  {option.label}
                </InsulinOption>
              ))}
            </InsulinSelect>
          </LabelIu>
        </Fragment>
        <LabelFa htmlFor="factor">
          Welcher Tageszeit <br /> Faktor
          {factors.map((factor) => (
            <Fragment>
              <DayFactorSelect
                htmlFor="setdayfactor"
                name="dayfactorSelect"
                id={DayFactorOption.name}
                value={DayFactorOption.value}
              >
                <DayFactorOption value={factor.morningfactor}>
                  morgens / {factor.morningfactor}
                </DayFactorOption>
                <DayFactorOption value={factor.lunchfactor}>
                  mittags / {factor.lunchfactor}
                </DayFactorOption>
                <DayFactorOption value={factor.eveningfactor}>
                  abends / {factor.eveningfactor}
                </DayFactorOption>
              </DayFactorSelect>
            </Fragment>
          ))}
        </LabelFa>
        <Button type="submit">bestätigen</Button>
        <InsulinUnits
          htmlFor="insulinunits"
          id="calculateUnits"
          key="calculateUnits"
          name="calculateUnits"
        >
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
  height: 14vh;
  padding-top: 2vh;
  margin-top: 0.5vh;
  position: sticky;
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

const DayFactorSelect = styled.select`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 4rem;
  color: #364fc9;
`;

const DayFactorOption = styled.option`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;

const InsulinUnits = styled.li`
  color: #364fc7;
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  padding-top: 2vh;
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
  justify-content: center;
`;
