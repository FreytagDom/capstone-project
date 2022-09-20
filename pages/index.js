import Input from '../components/HomeInput';
import styled from 'styled-components';
import { useState } from 'react';

export default function Home() {
  const [data, updateData] = useState([]);
  const addData = (savedData) => {
    updateData([...data, savedData]);
  };

  return (
    <Wrapper>
      <CardGrid>
        {/* {savedData.map((data) => {
          return (
            <savedData
              key={data.id}
              blutzucker={data.bl}
              basalInsulin={data.basal}
              bolusInsulin={data.bolus}
            />
          );
        })} */}
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
  padding: 0;
  overflow-y: auto;
  border-radius: 10px;
`;
