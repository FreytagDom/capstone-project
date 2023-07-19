import CorrectionFactorEntry from '../components/SetCorrectionFactor';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';
import SavedCorrectionFactor from '../components/SavedCorrectionFactor';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Loading from '../components/PageLoader';

export async function getServerSideProps() {
  const correctionfactors = await getAllCorrectionFactors();
  return {
    props: {
      correctionfactors: correctionfactors,
    },
  };
}

 export default function CreateCorretionfactor({ correctionfactors }) {
  async function handleSetSubmit(
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor
  ) {
    const response = await fetch('/api/correctionFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningcorrectionfactor,
        lunchcorrectionfactor,
        eveningcorrectionfactor,
        latecorrectionfactor,
      }),
    }).then(async (res) => {
      if (res.ok) router.replace(SavedCorrectionFactor);
    });
  }
  const router = useRouter();
  
  return (
    <Wrapper>
      <Sign>
        <>
              <CorrectionFactorEntry
                onHandleSetCorrectionfactor={handleSetSubmit}
              />
              <SavedCorrectionFactor correctionfactors={correctionfactors} />
        </>
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
