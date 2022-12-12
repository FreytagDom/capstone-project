import styled from 'styled-components';
import { getAllCategories } from '../services/insulinAppDataService';
import SavedDataInjected from '../components/SavedData';
import { keyframes } from 'styled-components';
import LoginPage from '../components/Login';
import { useSession } from 'next-auth/react';

export async function getServerSideProps() {
  const cardData = await getAllCategories();

  return {
    props: {
      cardData: cardData,
    },
  };
}

export default function DataInjected({ cardData }) {
  const { data: session } = useSession();
  return (
    <WrapperSaved>
      <Sign>
        {session ? (
          <>
            <SavedData>Gespeicherte Werte</SavedData>
            <SavedDataInjected cardData={cardData} />
          </>
        ) : (
          <LoginPage />
        )}
      </Sign>
    </WrapperSaved>
  );
}

const WrapperSaved = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;

const Sign = styled.span`
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  z-index: 2;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;

const SavedData = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  z-index: 1;
`;
