import styled from 'styled-components';
import { keyframes } from 'styled-components';

import { getAllCorrectionFactors } from '../services/correctionFactorsService';

export async function getServerSideProps() {
  const factors = await getAllCorrectionFactors();

  return {
    props: {
      factors: factors,
    },
  };
}

export default function SavedCorrectionFactor({ factors }) {
  return (
    <Wrapper>
      <SavedCorrectionFactorTitel>
        Gespeicherter Korrekturfaktor
      </SavedCorrectionFactorTitel>
      <CardGrid>
        {factors.map((items) => {
          return (
            <Saved key={items.id}>
              <MorningCorrectionFactor>
                Korrekturfaktor morgens: <br /> {items.morningcorrectionfactor}
              </MorningCorrectionFactor>
              <br />
              <LunchCorrectionFactor>
                Korrekturfaktor mittags: <br /> {items.lunchcorrectionfactor}
              </LunchCorrectionFactor>
              <br />
              <EveningCorrectionFactor>
                Korrekturfakror abends: <br /> {items.eveningcorrectionfactor}
              </EveningCorrectionFactor>
              <br />
              <LateCorrectionFactor>
                Korrekturfakror spät: <br /> {items.latecorrectionfactor}
              </LateCorrectionFactor>
            </Saved>
          );
        })}
      </CardGrid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  z-index: 1;
  background-attachment: scroll;
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
  z-index: 1;
  background-attachment: scroll;
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
  opacity: 0.75;
  background-attachment: scroll;
`;

const MorningCorrectionFactor = styled.span`
  color: #c92f2a;
`;

const LunchCorrectionFactor = styled.span`
  color: #2b8c3e;
`;

const EveningCorrectionFactor = styled.span`
  color: #e67700;
`;

const LateCorrectionFactor = styled.span`
  color: #bc11cf;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;
const SavedCorrectionFactorTitel = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  width: 100%;
`;
