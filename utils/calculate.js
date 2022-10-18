import { useState } from 'react';

import Input from '../components/HomeInput';

export function handleInsulinUnit(bloodsugar, carbohydrates, daytimeFactor) {
  const [value, setValue] = useState();

  const targetValue = 100;
  const correctionValue = 60;

  const calculateUnit = (
    (bloodsugar - targetValue) / correctionValue +
    carbohydrates / daytimeFactor -
    0.1
  ).toFixed(1);

  console.log(value);
  setValue(calculateUnit);
  return calculateUnit;
}

// export default function DandleInsulinUnit(
//   cardData,
//   bloodsugar,
//   carbohydrates,
//   daytimeFactor
// ) {
//   const targetValue = 100;
//   const corretionValue = 60;

//   const calculateUnit = (
//     (bloodsugar - targetValue) / corretionValue +
//     carbohydrates / daytimeFactor -
//     0.1
//   ).toFixed(1);

//   setValue(calculateUnit);

//     cardData(cardData);
// }
// const [value, setValue] = useState(cardData);
// export const calculateUnitValue = value;
