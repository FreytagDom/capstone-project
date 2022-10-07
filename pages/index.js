import Input from '../components/HomeInput';
import styled from 'styled-components';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { getAllCategories } from '../services/insulinAppData';

export async function getServerSideProps() {
  const factors = await getAllDayFactors();
  const cardData = await getAllCategories();

  return {
    props: {
      factors: factors,
      cardData: cardData,
    },
  };
}

export default function Home({ factors, cardData }) {
  return (
    <Wrapper>
      <Input factors={factors} cardData={cardData} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: auto;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  border-radius: 10px;
  justify-content: center;
`;
const Saved = styled.li`
  display: grid;
  background-color: beige;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
`;

const BloodSugar = styled.span`
  color: #c92a2a;
`;

const Insulin = styled.span`
  color: #5c940d;
`;

const Carbohydrates = styled.span`
  color: #e67700;
`;

const Factor = styled.span`
  color: #2b8a3e;
`;

const InsulinUnits = styled.span`
  color: #364fc7;
`;
