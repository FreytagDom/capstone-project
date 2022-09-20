import styled from 'styled-components';

import { useState } from 'react';

export default function Input() {
  const [savedData, setSavedData] = useState({
    bl: '',
    basal: '',
    bolus: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // addData(savedData);
    setSavedData({
      [event.target.name]: event.target.value,
      bl: '',
      basal: '',
      bolus: '',
    });
    console.log(savedData);
  };
  const [data, updateData] = useState([]);
  const addData = (savedData) => {
    updateData([savedData, ...data]);
    console.log(addData);
  };

  return (
    <>
      <EntryForm onSubmit={handleSubmit}>
        <LabelBz htmlFor="Blutzuckerwert">
          Blutzuckerwert <br />
          mg/dl
          <DataInput
            type="number"
            name="bl"
            placeholder={`letzter Blutzuckerwert `}
            text="text"
            id="name"
            value={savedData.name}
            required
          />
        </LabelBz>

        <LabelIu htmlFor="Basal Insulin">
          Basal Insulin <br /> Einheiten
          <DataInput
            type="number"
            name="basal"
            text="text"
            placeholder={`letzte Einheitmenge `}
            id="name"
            value={savedData.name}
          />
        </LabelIu>

        <LabelIu htmlFor="Bolus Insulin">
          Bolus Insulin <br /> Einheiten
          <DataInput
            type="number"
            text="text"
            name="bolus"
            placeholder={`letzte Einheitmenge `}
            id="name"
            value={savedData.name}
          />
        </LabelIu>

        <Button type="submit">bestätigen</Button>
      </EntryForm>
      <DataForm addData="{addData}" />
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

const DataForm = styled.form`
  display: grid;
  justify-content: center;
  color: black;
`;
