import { useRouter } from 'next/router';
import styled from 'styled-components';
import FactorEntry from '../components/SetInsulinFactor/SetInsulinFactor';
import SavedFactor from '../components/SavedInsulinFactor/SavedInsulinFactor';
import { getAllDayFactors } from '../services/savedDayFactorService';

export async function getServerSideProps() {
  const factors = await getAllDayFactors();
  return {
    props: {
      factors: factors,
    },
  };
}

export default function CreateFactor({ factors }) {
  async function handleSetSubmit(
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  ) {
    const response = await fetch('/api/insulinFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      }),
    }).then((res) => {
      if (res.ok) router.replace(SavedFactor);
    });
  }
  const router = useRouter();
 
  return (
    <Wrapper>
      <Sign>
            <FactorEntry onHandleSetFactor={handleSetSubmit} />
            <SavedFactor factors={factors} />
      </Sign>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
