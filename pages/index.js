import Input from '../components/HomeInput';
import styled from 'styled-components';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';

export async function getServerSideProps() {
  const factors = await getAllDayFactors();
  const correctionfactors = await getAllCorrectionFactors();

  return {
    props: {
      factors: factors,
      correctionfactors: correctionfactors,
    },
  };
}

export default function Home({ factors, correctionfactors }) {
  return (
    <Wrapper>
      <Input factors={factors} correctionfactors={correctionfactors} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;
