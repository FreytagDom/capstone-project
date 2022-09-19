import { useState } from 'react';
import Input from '../components/HomeInput';
import styled from 'styled-components';

export default function Home() {
  const [savedData, setSavedData] = useState([addData]);

  function addData(newData) {
    setSavedData([newData, ...savedData]);
  }

  return (
    <Wrapper>
      <CardGrid>
        {savedData.map((data) => {
          return (
            <savedData
              key={data.id}
              blutzucker={data.blutzucker}
              basalInsulin={data.basalInsulin}
              bolusInsulin={data.bolusInsulin}
            />
          );
        })}
      </CardGrid>
      <Input onAddCard={addData} />
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
  padding: 20px;
  overflow-y: auto;
  border-radius: 10px;
`;
