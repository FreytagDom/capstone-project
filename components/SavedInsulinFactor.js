import styled, { keyframes } from 'styled-components';
import { useSession } from 'next-auth/react';

export default function SavedFactor({ factors }) {
  const { data: session } = useSession();
  const userFactor = factors.filter((factors) => {
    return factors.id === session.user.email;
  });

  return (
    <Wrapper>
      <SavedFactorTitel>
        Gespeicherter <br /> Insulinfaktor
      </SavedFactorTitel>
      <CardGrid>
        {userFactor.map((items) => {
          return (
            <Saved key={items.id}>
              <MorningFactor>
                Faktor morgens: <br /> {items.morningfactor}
              </MorningFactor>
              <br />
              <LunchFactor>
                Faktor mittags: <br /> {items.lunchfactor}
              </LunchFactor>
              <br />
              <EveningFactor>
                Faktor abends: <br /> {items.eveningfactor}
              </EveningFactor>
              <br />
              <LateFactor>
                Faktor spät: <br /> {items.latefactor}
              </LateFactor>
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
  margin-top: -1.5rem;
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
  margin-top: -1rem;
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

const MorningFactor = styled.span`
  color: #c92a2a;
`;

const LunchFactor = styled.span`
  color: #2b8a3e;
`;

const EveningFactor = styled.span`
  color: #e67700;
`;

const LateFactor = styled.span`
  color: #355fc8;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;
const SavedFactorTitel = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  width: 100%;
`;
