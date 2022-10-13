import styled from 'styled-components';
import { useState } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import leereSpritze from '../public/leereSpritze.png';
import volleSpritze from '../public/volleSpritze.png';
import blood from '../public/blood.PNG';
import blooddrop from '../public/blooddrop.PNG';
import carbohydrates from '../public/carbohydrates.png';
import donut from '../public/donut.png';

export default function Input({ factors }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const daytimeFactor = form.dayfactorSelect.value;
    const calculateUnits = handleInsulinUnit(
      bloodsugar,
      carbohydrates,
      daytimeFactor
    );

    const cardData = {
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      daytimeFactor: daytimeFactor,
      calculateUnit: calculateUnits,
    };

    const response = await fetch('/api/setInsulinDatas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(cardData),
    });
    const json = response.json();

    form.reset();
  }

  const [value, setValue] = useState();

  function handleInsulinUnit(bloodsugar, carbohydrates, daytimeFactor) {
    const targetValue = 100;
    const correctionValue = 60;

    const calculateUnit = (
      (bloodsugar - targetValue) / correctionValue +
      carbohydrates / daytimeFactor -
      0.1
    ).toFixed(1);

    setValue(calculateUnit);
    return calculateUnit;
  }

  const options = [
    { value: 'Basal', label: 'Basal' },
    { value: 'Bolus', label: 'Bolus' },
    { value: 'Fiasp', label: 'Fiasp' },
    { value: 'Hum Normal', label: 'Hum Normal' },
  ];

  return (
    <>
      <EntryForm
        onSubmit={handleSubmit}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        <LabelBz htmlFor="bloodsugar">
          <BloodDrop>
            <Image src={blooddrop} alt="blooddrop" />
          </BloodDrop>
          Blutzuckerwert <br />
          mg/dl
          <Blood>
            <Image src={blood} alt="blood" />
          </Blood>
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
          <Carbohydrates>
            <Image src={carbohydrates} alt="carbohydrates" />
          </Carbohydrates>
          Kohlenhydrate (Khd) <br /> g (Gramm)
          <Donut>
            <Image src={donut} alt="donut" />
          </Donut>
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
              <InsulinOption placeholder="Insulin wählen" disabled>
                Insulin wählen
              </InsulinOption>
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
        <Fragment>
          <LabelFa htmlFor="factor">
            Welcher Tageszeit <br /> Faktor
            {factors.map((factor, index) => (
              <DayFactorSelect
                htmlFor="setdayfactor"
                name="dayfactorSelect"
                id={DayFactorOption.name}
                value={DayFactorOption.value}
                key={index}
                options
              >
                <DayFactorOption disabled>Faktor wählen</DayFactorOption>
                <DayFactorOption value={factor.morningfactor}>
                  morgens / {factor.morningfactor}
                </DayFactorOption>
                <DayFactorOption value={factor.lunchfactor}>
                  mittags / {factor.lunchfactor}
                </DayFactorOption>
                <DayFactorOption
                  value={factor.eveningfactor}
                  key="eveningfactor"
                >
                  abends / {factor.eveningfactor}
                </DayFactorOption>
              </DayFactorSelect>
            ))}
          </LabelFa>
        </Fragment>
        <Button type="submit">bestätigen</Button>
        <InsulinUnits
          htmlFor="insulinunits"
          id="calculateUnits"
          key="calculateUnits"
          name="calculateUnits"
        >
          {value} / Einheiten <br /> Insulin spritzen
          <FullInject>
            <Image src={volleSpritze} alt="" />
          </FullInject>
          <EmptyInject>
            <Image src={leereSpritze} alt="" />
          </EmptyInject>
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
  padding-top: 3vh;
  margin-top: 0.5vh;
  position: sticky;
  opacity: 0.8;
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
  border-style: groove;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  height: 20px;
  z-index: 1;
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
  z-index: 1;
  opacity: 0.75;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
`;

const EmptyInject = styled.span`
  margin-left: 12rem;
  margin-top: -1.2rem;
`;

const FullInject = styled.span`
  margin-left: -12rem;
  margin-top: -3rem;
`;

const BloodDrop = styled.span`
  margin-left: 1rem;
  margin-top: -2rem;
  padding-top: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

const Blood = styled.span`
  margin-left: 11rem;
  margin-top: -2.2rem;
  padding-right: 0.5rem;
  height: 2rem;
  width: 3rem;
`;

const Carbohydrates = styled.span`
  margin-left: 1rem;
  margin-top: -1.6rem;
  padding-top: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

const Donut = styled.span`
  margin-left: 12rem;
  margin-top: -2rem;
  height: 2rem;
  width: 2rem;
`;
