export default function handleInsulinUnit(
  bloodsugar,
  carbohydrates,
  daytimeFactor,
  correctionFactor
) {
  const targetValue = 100;

  const calculateUnit = (
    (bloodsugar - targetValue) / correctionFactor +
    carbohydrates / daytimeFactor -
    0.1
  ).toFixed(1);
  console.log(calculateUnit);

  return calculateUnit;
}
