import FactorEntry from '../components/SetInsulinFactor';
import SavedFactor from '../components/SavedInsulinFactor';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import LoginPage from '../components/Login';
import styled from 'styled-components';

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
  const { data: session } = useSession();
  return (
    <Wrapper>
      <Sign>
        {session ? (
          <>
            <FactorEntry onHandleSetFactor={handleSetSubmit} />
            <SavedFactor factors={factors} />
          </>
        ) : (
          <>
            <LoginPage />
          </>
        )}
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
