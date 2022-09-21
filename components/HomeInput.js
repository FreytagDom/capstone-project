import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function Input({ onAddData }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const bl = form.bl.value;
    const basal = form.basal.value;
    const bolus = form.bolus.value;

    const cardData = {
      id: nanoid(),
      bl: bl,
      basal: basal,
      bolus: bolus,
    };

    onAddData(cardData);

    form.reset();
  }

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <LabelBz htmlFor="bl">
          Blutzuckerwert <br />
          mg/dl
          <DataInput
            type="number"
            name="bl"
            placeholder={`letzter Blutzuckerwert `}
            id="bl"
            required
          />
        </LabelBz>

        <LabelIu htmlFor="basal">
          Basal Insulin <br /> Einheiten
          <DataInput
            type="decimal"
            name="basal"
            placeholder={`letzte Einheit 2,5 `}
            id="basal"
          />
        </LabelIu>

        <LabelIu htmlFor="bolus">
          Bolus Insulin <br /> Einheiten
          <DataInput
            type="decimal"
            name="bolus"
            placeholder={`letzte Einheit 2,5`}
            id="bolus"
          />
        </LabelIu>

        <Button type="submit">bestätigen</Button>
      </EntryForm>
    </>
  );
}

const LabelBz = styled.label`
  color: #c92a2a;
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 60px;
`;

const LabelIu = styled.label`
  color: #5c940d;
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 60px;
`;

const DataInput = styled.input`
  border-radius: 8px;
  text-align: center;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 5px;
  border-radius: 15px;
  height: 20px;
`;

const EntryForm = styled.form`
  display: grid;
  justify-content: center;
`;
