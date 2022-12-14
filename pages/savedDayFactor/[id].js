import { getFactorById } from '../../services/dayTimeFactorsService';
import { getAllDayFactors } from '../../services/savedDayFactorService';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const daytimeFactors = getAllDayFactors();
  const daytimeFactor = await getFactorById(id);

  return {
    props: {
      daytimeFactors,
      daytimeFactor,
    },
  };
}
export default function SavedFactor({ daytimeFactors }) {
  const { id, morningfactor, lunchfactor, eveningfactor, latefactor } =
    daytimeFactors;
  function updateFactor(updatedFactor) {
    console.log(updatedFactor);
  }
}
