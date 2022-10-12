import SavedDataInjected from '../components/SavedData';
import { getAllCategories } from '../services/insulinAppDataService';

export async function getServerSideProps() {
  const cardData = await getAllCategories();

  return {
    props: {
      cardData: cardData,
    },
  };
}

export default function CreateData() {
  async function handleSetSubmit(cardData) {
    const response = await fetch('/api/setInsulinDatas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(cardData),
    });
    const json = response.json();
  }

  return (
    <>
      <SavedDataInjected cardData={handleSetSubmit} />
    </>
  );
}
