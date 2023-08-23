import { useState, Fragment } from 'react';
import React from 'react';
import {
  EntryForm,
  LabelBz,
  BloodDrop,
  Blood,
  DataInput,
  LabelCa,
  Carbohydrates,
  Donut,
  LabelIu,
  InsulinSelect,
  InsulinOption,
  LabelFa,
  FactorSelect,
  FactorOption,
  Button,
  InsulinUnits,
  FullInject,
  EmptyInject,
} from './HomeInputStyles';
import leereSpritze from '../../public/leereSpritze.png';
import volleSpritze from '../../public/volleSpritze.png';
import blood from '../../public/blood.PNG';
import blooddrop from '../../public/blooddrop.PNG';
import carbohydrates from '../../public/carbohydrates.png';
import donut from '../../public/donut.png';
import handleInsulinUnit from '../../utils/calculate';
import handelCorretion from '../../utils/handleCorrectionFactor';
import handleUserCorrectionFactor from '../../handler/getCorrectionFactor';
import handleUserDayFactor from '../../handler/getDayFactor';

export default function Input({ session, factors, correctionfactors, index }) {
  const [value, setValue] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const daytimeFactor = handleUserDayFactor(session, factors).props.value;
    const correctionFactor = handelCorretion(
      bloodsugar,
      handleUserCorrectionFactor(session, correctionfactors)
    );
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
        <Fragment>
          <LabelFa htmlFor="factor">
            Tageszeit Faktor
            <FactorSelect
              htmlFor="setdayfactor"
              name="dayfactorSelect"
              id={handleUserDayFactor(session, factors).props.name}
              value={handleUserDayFactor(session, factors).props.value}
              key={index}
              options
            >
              <FactorOption
                name={handleUserDayFactor(session, factors).props.name}
                id={handleUserDayFactor(session, factors)}
                value={handleUserDayFactor(session, factors).props.value}
              >
                Insulinfakror{' '}
                {handleUserDayFactor(session, factors).props.value}
              </FactorOption>
            </FactorSelect>
            <FactorSelect
              htmlFor="setcorrectionfactor"
              name="correctionfactorSelect"
              id={
                handleUserCorrectionFactor(session, correctionfactors).props
                  .name
              }
              value={
                handleUserCorrectionFactor(session, correctionfactors).props
                  .value
              }
              key={index}
              options
            >
              <FactorOption
                name={
                  handleUserCorrectionFactor(session, correctionfactors).props
                    .name
                }
                id={
                  handleUserCorrectionFactor(session, correctionfactors).props
                }
                value={
                  handleUserCorrectionFactor(session, correctionfactors).props
                    .value
                }
              >
                Korrektur{' '}
                {
                  handleUserCorrectionFactor(session, correctionfactors).props
                    .value
                }
              </FactorOption>
            </FactorSelect>
          </LabelFa>
        </Fragment>
      </EntryForm>
    </>
  );
}
