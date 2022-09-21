import Input from '../components/HomeInput';
import styled from 'styled-components';
import { useState } from 'react';

export default function Home() {
  // const [data, updateData] = useState([]);
  // function addData(savedData) {
  //   updateData([savedData, ...data]);
  // }

  return (
    <Wrapper>
      <Input />
      <CardGrid>
        {/* {data.map((data) => {
          return (
            <li key={data.id}> {data.value} </li>

            key={data.id}
            id={data.id}
            value={data.value}
            bl={data.bl}
            basal={data.basal}
            bolus={data.bolus}
          );
        })} */}
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
