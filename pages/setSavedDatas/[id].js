import Input from '../../components/HomeInput';
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
export default function SavedInsulinData({ savedInsulinData }) {
  const fetchApi = fetch();
  async function updateSavedInsulinData(updatedSavedInsulinData) {
    await fetchApi(`/api/setSavedDatas/${savedInsulinData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(updatedSavedInsulinData),
    });
  }

  return (
    <>
      <Input onHandleSetData={updateSavedInsulinData} />
    </>
  );
}
