import useLocalStorage from '../hooks/useLocalStorage';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export default function SavedFactor() {
  const [value, setValue] = useLocalStorage('_cart', []);
  function addFactor(savedData) {
    setValue([savedData, ...value]);
  }
  return (
    <Wrapper>
      <SavedFactorTitel>Gespeicherter Faktor</SavedFactorTitel>
      <CardGrid>
        {value.map((items) => {
          return (
            <Saved key={items.id}>
              <Insulin>
                welches Insulin: <br /> {items.setinsulin}
              </Insulin>
              <br />
              <MorningFactor>
                Faktor morgens: <br /> {items.setmorningfactor}
              </MorningFactor>
              <br />
              <LunchFactor>
                Faktor mittags: <br /> {items.setlunchfactor}
              </LunchFactor>
              <br />
              <EveningFactor>
                Fakror abends: <br /> {items.seteveningfactor}
              </EveningFactor>
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

const MorningFactor = styled.span`
  color: #c92a2a;
`;

const Insulin = styled.span`
  color: #5c940d;
`;

const EveningFactor = styled.span`
  color: #e67700;
`;

const LunchFactor = styled.span`
  color: #2b8a3e;
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
`;
