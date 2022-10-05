import FactorEntry from '../../components/SetInsulinFactor';

import { getFactorById } from '../../services/dayTimeFactorsService';
export async function getServerSideProps(context) {
  const { id } = context.params;

  const dayTimeFactor = await getFactorById(id);
  return {
    props: {
      dayTimeFactor,
    },
  };
}
export default function DayTimeFactor({ dayTimeFactor }) {
  const fetchApi = fetch();
  async function updateDayTimeFactor(updatedDayTimeFactor) {
    await fetchApi(`/api/setInsulinFactor/${dayTimeFactor.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDayTimeFactor),
    });

    console.log('updated!');
  }

  return (
    <>
      <FactorEntry onHandleSetFactor={updateDayTimeFactor} />
    </>
  );
}
