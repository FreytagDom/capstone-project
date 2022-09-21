import styled from 'styled-components';
import { nanoid } from 'nanoid';
// import { useState } from 'react';

export default function Input({ onAddData }) {
  // brauchen wir nicht const [savedData, setSavedData] = useState([]);
  // console.log(useState);

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
  // const [data, updateData] = useState([]);
  // const addData = (savedData) => {
  //   updateData([savedData, ...data]);
  //   console.log(addData);
  // };

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <LabelBz htmlFor="bl">
          Blutzuckerwert <br />
          mg/dl
          <DataInput
            // key="id" ??
            type="number"
            name="bl"
            // text="text" ??
            placeholder={`letzter Blutzuckerwert `}
            id="bl"
            // value={savedData.bl}
            required
          />
        </LabelBz>

        <LabelIu htmlFor="basal">
          Basal Insulin <br /> Einheiten
          <DataInput
            // key="id" ??
            type="decimal"
            name="basal"
            // text="text" ??
            placeholder={`letzte Einheitmenge `}
            id="basal"
            // value={DataInput.name}
          />
        </LabelIu>

        <LabelIu htmlFor="bolus">
          Bolus Insulin <br /> Einheiten
          <DataInput
            // key="id" ??
            type="decimal"
            name="bolus"
            // text="text" ?
            placeholder={`letzte Einheitmenge`}
            id="bolus"
            // value={savedData.name}
          />
        </LabelIu>

        <Button type="submit">bestätigen</Button>
      </EntryForm>
      {/* <DataForm htmlFor="Letzten Werte" onChange={handleSubmit}>
        {savedData}
      </DataForm> */}
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

const DataForm = styled.li`
  display: grid;
  justify-content: center;
  color: black;
`;
