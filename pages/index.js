import Input from '../components/HomeInput';
import styled from 'styled-components';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  function addData(savedData) {
    setData([savedData, ...data]);
  }

  return (
    <Wrapper>
      <Input onAddData={addData} />
      <CardGrid>
        {data.map((item) => {
          return (
            <Saved key={item.id}>
              <BloodSugar> Blutzuckerwert: {item.bl} mg/dl </BloodSugar>
              <br />
              <Insulin> Basal Insulin: {item.basal} Einheiten </Insulin>
              <br />
              <Insulin> Bolus Insulin: {item.bolus} Einheiten </Insulin>
            </Saved>
          );
        })}
      </CardGrid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  border-radius: 10px;
`;
const Saved = styled.li`
  display: grid;
  background-color: beige;
  border-radius: 8px;
  text-align: center;
  height: 100px;
  align-items: center;
  margin: 20px;
`;

const BloodSugar = styled.span`
  color: #c92a2a;
  margin: 0;
  padding: 0;
`;

const Insulin = styled.span`
  color: #5c940d;
  margin: 0;
  padding: 0;
`;
