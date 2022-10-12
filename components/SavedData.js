import styled from 'styled-components';

export default function SavedDataInjected({ cardData }) {
  const data = cardData;

  return (
    <WrapperSaved>
      <CardGrid>
        {data.map((item) => {
          return (
            <Saved key={item.id}>
              <BloodSugar>
                Blutzuckerwert: <br /> {item.bloodsugar} mg/dl
              </BloodSugar>
              <br />
              <Carbohydrates>
                Kohlenhydrate: <br /> {item.carbohydrates} g (Gramm)
              </Carbohydrates>
              <br />
              <Insulin>
                Verwendetes Insulin: <br /> {item.insulin}
              </Insulin>
              <br />
              <Factor>
                Insulin Faktor: <br /> {item.daytimeFactor}
              </Factor>
              <InsulinUnits>
                gepritzte Insulin <br /> Menge: {item.calculateUnit}
              </InsulinUnits>
            </Saved>
          );
        })}
      </CardGrid>
    </WrapperSaved>
  );
}

const WrapperSaved = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  z-index: 1;
  opacity: 0.75;
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
