import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function Input({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;

    const newCard = {
      id: nanoid(),
      text: text,
      name: name,
    };
    onAddCard(newCard);

    console.log(newCard);
    form.reset();
  }

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <Label htmlFor="Blutzuckerwert">Blutzuckerwert</Label>
        <DataInput
          placeholder={`letzter Blutzuckerwert `}
          name="name"
          id="name"
        />

        <Label htmlFor="Basal Insulin">Basal Insulin</Label>
        <DataInput placeholder={`letzte Einheitmenge `} name="text" id="name" />

        <Label htmlFor="Bolus Insulin">Bolus Insulin</Label>
        <DataInput placeholder={`letzte Einheitmenge `} name="text" id="name" />

        <Button>bestätigen</Button>
      </EntryForm>
    </>
  );
}

const Label = styled.label`
  color: red;
  background-color: beige;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  display: grid;
  text-align: center;
  height: 35px;
`;
const DataInput = styled.input`
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: center;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  border-radius: 15px;
  height: 20px;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  width: 70px;
  height: 40px;
`;
