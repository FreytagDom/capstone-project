
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


export default function Input({ session, factors, correctionfactors, index }) {
  const [value, setValue] = useState();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const daytimeFactor = userFactorToDisplay[0].props.value;
    const correctionFactor = handelCorretion(bloodsugar, userCorrectionFactorToDisplay);
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
  const userFactor = factors.filter((factors) => {
    return factors.id === session?.user.email;  
  });
  const userCorrectionFactor = correctionfactors.filter((correctionfactors) => {
    return correctionfactors.id === session.user.email; 
  });
  const currentTime = new Date().getHours();

  let userFactorToDisplay;
  let userCorrectionFactorToDisplay  ;  
  
  if (currentTime >= 6 && currentTime < 11) {
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="morningfactor"
        id={factor.id}
        value={factor.morningfactor}
        key={index}
      >
        <FactorOption name="morningfactor" value={factor.morningfactor}>
         {factor.morningfactor}
        </FactorOption> 
     
      </SetDayFactorOption>
    ));

    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="morningcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.morningcorrectionfactor}
          key={index}  
        >
          <CorrectionFactorOption>
             {correctionfactor.morningcorrectionfactor}
            </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  } 
  else if (currentTime >= 11 && currentTime < 17){
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="lunchfactor"
        id={factor.name}
        value={factor.lunchfactor}
        key={index} 
      >
        <FactorOption name="lunchfactor" value={factor.lunchfactor}>
           {factor.lunchfactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="lunchcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.lunchcorrectionfactor}
          key={index}
        >
          <CorrectionFactorOption
            name="lunchcorrectionfactor"
            value={correctionfactor.lunchcorrectionfactor}
          >
             {correctionfactor.lunchcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  }
  else if (currentTime >= 17 && currentTime < 20){
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="eveningfactor"
        id={factor.name}
        value={factor.eveningfactor}
        key={index} 
      >
        <FactorOption name="eveningfactor" value={factor.eveningfactor}>
           {factor.eveningfactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="eveningcorrectionfactor"
          id={correctionfactor.name}
          value={correctionfactor.eveningcorrectionfactor}
          key={index}
        >
          <CorrectionFactorOption
            name="eveningcorrectionfactor"
            value={correctionfactor.eveningcorrectionfactor}
          >
             {correctionfactor.eveningcorrectionfactor}
          </CorrectionFactorOption>
        </SetCorrectionFactorOption>
      )
    );
  }
  else  {
    userFactorToDisplay = userFactor.map((factor, index) => (
      <SetDayFactorOption
        htmlFor="setdayfactor"
        name="latefactor"
        id={factor.name}
        value={factor.latefactor}
        key={index}
      >
        <FactorOption name="latefactor" value={factor.latefactor}>
          {factor.latefactor}
        </FactorOption>
      </SetDayFactorOption>
    ));
    userCorrectionFactorToDisplay = userCorrectionFactor.map(
      (correctionfactor, index) => (
        <SetCorrectionFactorOption
          htmlFor="setcorrectionfactor"
          name="latecorrectionfactor"
          id="latecorrectionfactor"
          value={correctionfactor.latecorrectionfactor}
          key={index}
          
        >
          <CorrectionFactorOption       name="latecorrectionfactor"
          id="latecorrectionfactor"
          value={correctionfactor.latecorrectionfactor} >
            {correctionfactor.latecorrectionfactor}</CorrectionFactorOption>
          </SetCorrectionFactorOption>
        
      )
    );
  }

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
          <Carbohydrates>
            <Image src={carbohydrates} alt="carbohydrates" />
          </Carbohydrates>
          Kohlenhydrate (Khd) <br /> g (Gramm)
          <Donut>
            <Image src={donut} alt="donut" />
          </Donut>
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
                id={userFactorToDisplay[0].props.name}
                value={userFactorToDisplay[0].props.value}
                key={index}
                options
              >
                <FactorOption name={userFactorToDisplay[0].props.name}
                id={userFactorToDisplay}
                value={userFactorToDisplay[0].props.value}>
               Insulinfakror {userFactorToDisplay[0].props.value}
                </FactorOption>
              </FactorSelect>
            
            
              <FactorSelect
                htmlFor="setcorrectionfactor"
                name='correctionfactorSelect'
                id={userCorrectionFactorToDisplay[0].props.name}
                value={userCorrectionFactorToDisplay[0].props.value}
                key={index}
                options
              >
              <FactorOption name={userCorrectionFactorToDisplay[0].props.name}
                id={userCorrectionFactorToDisplay}
                value={userCorrectionFactorToDisplay[0].props.value}>
                 Korrektur {userCorrectionFactorToDisplay[0].props.value}
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
`;

const DataInput = styled.input`
  border-radius: 8px;
  text-align: center;
  border-style: groove;
  -webkit-outer-spin-button: none;
  -webkit-inner-spin-button: none;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;
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

const CorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
const FactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  padding-top: 0.4rem;
  color: #5c940d;
  background: transparent;
`;

const SetCorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
const SetDayFactorOption = styled.div`
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

