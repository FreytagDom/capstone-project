export default function handleInsulinUnit(
  bloodsugar,
  carbohydrates,
  daytimeFactor,
  correctionFactor
) {
 
  let calculateUnit;
  if (bloodsugar < 100) { calculateUnit  =  (carbohydrates / daytimeFactor ).toFixed(1); }
  else { calculateUnit =  ( (bloodsugar - 100) / correctionFactor +
  carbohydrates / daytimeFactor
).toFixed(1); }
 
  return calculateUnit;

}
