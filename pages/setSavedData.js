import Input from '../components/HomeInput';

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
    // console.log(response_);
  }

  return (
    <>
      <Input onHandleSetData={handleSetSubmit} />
    </>
  );
}
