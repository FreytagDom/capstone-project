export default function handleInsulinUnit(
  bloodsugar,
  carbohydrates,
  daytimeFactor,
  correctionFactor
) {
  const targetValue = 100;

  const calculateUnit = (
    (bloodsugar - targetValue) / correctionFactor +
    carbohydrates / daytimeFactor
  ).toFixed(1);
  

  return calculateUnit;
}
