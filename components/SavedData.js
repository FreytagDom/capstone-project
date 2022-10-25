import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useState } from 'react';

export default function SavedDataInjected({ cardData }) {
  const [newCardData, setNewCardData] = useState(cardData);

  async function removeCard(id) {
    const response = await fetch('/api/savedInsulinData/' + id, {
      method: 'DELETE',
    });

    setNewCardData(
      newCardData.filter((cardData) => {
        return cardData.id !== id;
      })
    );
  }
  return (
    <WrapperSaved>
      <CardGrid>
        {newCardData.map((item) => {
          return (
            <Saved key={item.id}>
              <IconWrapper>
                <RiDeleteBinLine onClick={() => removeCard(item.id)} />
              </IconWrapper>
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
              <Factor>
                Korrektur Faktor: <br />
                {item.correctionFactor}
              </Factor>
              <InsulinUnits>
                gespritzte Insulin <br /> Menge: {item.calculateUnit}
              </InsulinUnits>
              <Timestampwraper>{item.date}</Timestampwraper>
            </Saved>
          );
        })}
      </CardGrid>
    </WrapperSaved>
  );
}

const IconWrapper = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  color: #fe4b13;
`;

const WrapperSaved = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  z-index: 1;
  opacity: 0.75;
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

const Timestampwraper = styled.span`
  color: #008080;
  font-size: 0.8rem;
  display: grid;
  margin-top: 0.3rem;
`;
