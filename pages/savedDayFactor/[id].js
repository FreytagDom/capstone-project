import Head from 'next/head';

import { getFactorById } from '../../../services/dayTimeFactorsService';
import { getAllDayFactors } from '../../../services/savedDayFactorService';

export async function getServerSideProps(context) {
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
export default function SavedFactor({ daytimeFactors }) {
  const { id, morningfactor, lunchfactor, eveningfactor } = daytimeFactors;
  function updateFactor(updatedFactor) {
    console.log(updatedFactor);
  }
}
