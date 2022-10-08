import { getFactorById } from '../../../services/dayTimeFactorsService';
import { getAllDayFactors } from '../../../services/savedDayFactorService';

export default async function getServerSideProps(context) {
  const { id } = context.params;
  const daytimeFactors = getAllDayFactors();
  const daytimeFactor = await getFactorById(id);

  return {
    porps: {
      daytimeFactors,
      daytimeFactor,
    },
  };
}
