import Input from '../components/HomeInput';
import styled from 'styled-components';
import { getAllDayFactors } from '../services/savedDayFactorService';

export async function getServerSideProps() {
  const factors = await getAllDayFactors();

  return {
    props: {
      factors: factors,
    },
  };
}

export default function Home({ factors }) {
  return (
    <Wrapper>
      <Input factors={factors} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;
