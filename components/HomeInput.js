import styled from 'styled-components';
import { useState, Fragment } from 'react';
import Image from 'next/image';
import leereSpritze from '../public/leereSpritze.png';
import volleSpritze from '../public/volleSpritze.png';
import blood from '../public/blood.PNG';
import blooddrop from '../public/blooddrop.PNG';
import carbohydrates from '../public/carbohydrates.png';
import donut from '../public/donut.png';
import handleInsulinUnit from '../utils/calculate';
import React from 'react'
import handelCorretion from '../utils/handleCorrectionFactor';
import handleUserCorrectionFactor from '../handler/getCorrectionFactor';
import handleUserDayFactor from '../handler/getDayFactor';
import DeleteUserDataButton from './DeleteUserData';

export default function Input({ session, factors, correctionfactors, index }) {
  const [value, setValue] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const daytimeFactor = handleUserDayFactor(session, factors).props.value;
    const correctionFactor = handelCorretion(bloodsugar, handleUserCorrectionFactor(session, correctionfactors));
    const calculateUnits = handleInsulinUnit(
      bloodsugar,
      carbohydrates,
      daytimeFactor,
      correctionFactor
    );
    const userMail = session.user.email;
    setValue(calculateUnits);
    
    const date = new Date().toLocaleString();
    
    const cardData = {
      userMail: userMail,
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      daytimeFactor: daytimeFactor,
      correctionFactor: correctionFactor,
      calculateUnit: calculateUnits,
      date: date,
    };
    
    const response = await fetch('/api/setInsulinDatas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cardData),
    });  
    form.reset();
  }
  
  const options = [
    { value: 'Fiasp', label: 'Fiasp' },
    { value: 'Hum Normal', label: 'Hum Normal' },
  ];

  return (
    <>
    {/* <DeleteUserDataButton /> */}
      <EntryForm
        onSubmit={handleSubmit}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        <LabelBz htmlFor="bloodsugar">
          Blutzuckerwert <br />
          mg/dl
          <BloodDrop src={blooddrop} alt="blooddrop" />
          <Blood src={blood} alt="blood" />
          <DataInput
            type="number"
            name="bloodsugar"
            placeholder="aktueller Blutzuckerwert"
            id="bloodsugar"
            min="0"
            key="bloodsugar"
            maxLength={3}
            required
          />
        </LabelBz>
        <LabelCa htmlFor="carbohydrates">
          Kohlenhydrate (Khd) <br /> g (Gramm)
          <Carbohydrates src={carbohydrates} alt="carbohydrates" />
          <Donut src={donut} alt="donut" />
          <DataInput
            type="number"
            name="carbohydrates"
            placeholder="wieviele Khd 65g"
            id="carbohydrates"
            maxLength={'3'}
            key="carbohydrates"
            min="0"
            required
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
              <InsulinOption placeholder="Insulin wählen">
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
            Tageszeit  Faktor
              <FactorSelect
                htmlFor="setdayfactor"
                name='dayfactorSelect'
                id={handleUserDayFactor(session, factors).props.name}
                value={handleUserDayFactor(session, factors).props.value}
                key={index}
                options
              >
                <FactorOption name={handleUserDayFactor(session, factors).props.name}
                id={handleUserDayFactor(session, factors)}
                value={handleUserDayFactor(session, factors).props.value}>
               Insulinfakror {handleUserDayFactor(session, factors).props.value}
                </FactorOption>
              </FactorSelect>
              <FactorSelect
                htmlFor="setcorrectionfactor"
                name='correctionfactorSelect'
                id={handleUserCorrectionFactor(session, correctionfactors).props.name}
                value={handleUserCorrectionFactor(session, correctionfactors).props.value}
                key={index}
                options
              >
              <FactorOption name={handleUserCorrectionFactor(session, correctionfactors).props.name}
                id={handleUserCorrectionFactor(session, correctionfactors).props}
                value={handleUserCorrectionFactor(session, correctionfactors).props.value}>
                 Korrektur {handleUserCorrectionFactor(session, correctionfactors).props.value}
                  </FactorOption>
              </FactorSelect>
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
          <FullInject src={volleSpritze} alt="" />
          <EmptyInject src={leereSpritze} alt="" />
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
  height: min-content 14vh;
  padding-top: 3vh;
  margin-top: 0.3vh;
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
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;

const DataInput = styled.input`
  border-radius: 8px;
  text-align: center;
  border-style: groove;
  appearance: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
&::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  border-radius: 15px;
  height: 20px;
  z-index: 1;
`;

const InsulinSelect = styled.select`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 1.8rem;
  margin-top: 0.7rem;
  color: #364fc9;
`;

const InsulinOption = styled.option`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;

const FactorSelect = styled.div`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 1.7rem;
  color: #364fc9;
`;

const FactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  padding-top: 0.4rem;
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

const EmptyInject = styled(Image)`
  margin-left: 12rem;
  margin-top: -1.2rem;
`;  

const FullInject = styled(Image)`
  margin-left: 1rem;
  margin-top: -3rem;
`;

const BloodDrop = styled(Image)`
  margin-left: 1rem;
  margin-top: -3rem;
  height: 1.8rem;
  width: 1.5rem;
`;

const Blood = styled(Image)`
  margin-left: 11rem;
  margin-top: -2.2rem;
  padding-right: 0.5rem;
  height: 2rem;
  width: 3rem;
`;

const Carbohydrates = styled(Image)`
  margin-left: 0.5rem;
  margin-top: -3rem;
  height: 1.5rem;
  width: 1.5rem;
`;

const Donut = styled(Image)`
  margin-left: 11.5rem;
  margin-top: -1rem;
  height: 2rem;
  width: 2rem;
`;

