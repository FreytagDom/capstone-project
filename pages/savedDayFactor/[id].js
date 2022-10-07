import { getAllFactors } from '../../services/dayTimeFactorsService';
import { getAllDayFactors } from '../../services/savedDayFactorService';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const daytimeFactors = getAllFactors();
  const daytimeFactor = await getAllDayFactors(id);

  return {
    props: {
      daytimeFactors,
      daytimeFactor,
    },
  };
}
export default function SavedFactor({ daytimeFactors }) {
  const { id, morningfactor, lunchfactor, eveningfactor } = daytimeFactors;
  function updateFactor(updatedFactor) {
    console.log(updatedFactor);
  }
}
