import styled from 'styled-components';
import { getAllCategories } from '../services/insulinAppDataService';
import SavedDataInjected from '../components/SavedData/SavedData';

export async function getServerSideProps() {
  const cardData = await getAllCategories();

  return {
    props: {
      cardData: cardData,
    },
  };
}

export default function DataInjected({ cardData }) {
  return (
    <WrapperSaved>
      <SavedDataInjected cardData={cardData} />
    </WrapperSaved>
  );
}

const WrapperSaved = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;
