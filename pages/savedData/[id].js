import Input from '../../components/HomeInput/HomeInput';
import { getCategoryById } from '../../services/insulinAppDataService';

export async function getServerSideProps(context) {
  const { id } = context.params;

  const savedInsulinData = await getCategoryById(id);
  return {
    props: {
      savedInsulinData,
    },
  };
}
export default function UsedData({ savedInsulinData }) {
  const fetchApi = fetch();
  async function updateUsedData(updatedUsedData) {
    await fetchApi(`/api/setSavedDatas/${savedInsulinData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUsedData),
    });

    console.log('updated!');
  }

  return (
    <>
      <Input onHandleSetData={updateUsedData} />
    </>
  );
}
