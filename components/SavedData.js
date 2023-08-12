import styled from 'styled-components';
import { RiDeleteBinLine, RiLineHeight } from 'react-icons/ri';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import jsPDF from 'jspdf';

export default function SavedDataInjected({ cardData }) {
  const { data: session } = useSession();
  const userCardData = cardData.filter((cardData) => {
    return cardData.userMail === session.user.email;
  });
  const [newCardData, setNewCardData] = useState(userCardData);

  async function removeCard(id) {
    const response = await fetch('/api/savedInsulinData/' + id, {
      method: 'DELETE',
    });
    setNewCardData(
      newCardData.filter((userCardData) => {
        return userCardData.id !== id;
      })
    );
  }
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = newCardData.filter((item) =>
    item.date.toLowerCase().includes(search.toLowerCase())
  );

  async function exportToPDF() {
    const userCardData = cardData.filter((cardData) => {
      return cardData.userMail === session.user.email;
    });
    const pdf = new jsPDF();
    const date = new Date().toLocaleString();
    pdf.text('Gespeicherte Daten', 10, 10); // Überschrift
    pdf.setFont('Helvetica');
    pdf.setFontSize(10); 
    pdf.text(`Erestellt am: ${date}`, 10, 20);
    
    let yOffset = 30;
    let xOffset = 10; // Startposition für die x-Koordinate
    const dataPerRow = 2;
  userCardData.forEach((item, index) => {
    // Prüfen, ob genügend Platz für die nächsten Daten nebenan ist
    if (xOffset + 100 < pdf.internal.pageSize.width) {
      pdf.rect(xOffset - 5, yOffset - 6, 75, 70, 'S'); // Rechteck mit Rahmen
      pdf.text(`Datum: ${item.date}`, xOffset, yOffset);
      pdf.text(`Blutzuckerwert: ${item.bloodsugar} mg/dl`, xOffset, yOffset + 10);
      pdf.text(`Kohlenhydrate: ${item.carbohydrates} g`, xOffset, yOffset + 20);
      pdf.text(`Verwendetes Insulin: ${item.insulin}`, xOffset, yOffset + 30);
      pdf.text(`Insulin Faktor: ${item.daytimeFactor}`, xOffset, yOffset + 40);
      pdf.text(`Korrektur Faktor: ${item.correctionFactor}`, xOffset, yOffset + 50);
      pdf.text(`Gespritzte Insulin Menge: ${item.calculateUnit}`, xOffset, yOffset + 60);
      xOffset += 100; 
      if ((index + 1) % dataPerRow === 0) {
        xOffset = 10;
        yOffset += 90; 
      }
    } else {
      xOffset = 10;
      yOffset += 90; 
    }
  });
    pdf.save(`gespeicherte_daten_${session.user.name}`); // Speichere PDF-Datei
  }

  return (
    <WrapperSaved>
      <SearchData>
        <DataInput type="text" placeholder="Suche" onChange={handleChange} />
      </SearchData>
      <ExportButton onClick={exportToPDF}>Export als PDF</ExportButton>
      <CardGrid id="pdf-content">
        {filteredData.map((item) => {
          return (
            <Details key={item.id}>
              <Summary>
                <Timestampwraper>{item.date}</Timestampwraper>
                <IconWrapper>
                  <RiLineHeight />
                </IconWrapper>
              </Summary>
              <Saved>
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
              </Saved>
            </Details>
          );
        })}
      </CardGrid>
    </WrapperSaved>
  );
}

const ExportButton = styled.button`
  background-color: #fe4b13;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  height: 1.8rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d63200;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  color: #fe4b13;
  margin-top: -1rem;
`;

const WrapperSaved = styled.section`
  display: grid;
  /* grid-template-rows: min-content auto 48px; */
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

const Summary = styled.summary`
  &::-webkit-details-marker {
    display: none;
  }
  display: grid;
  text-decoration: underline;
  background-color: transparent;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
`;

const Details = styled.details`
  display: grid;
  background-color: beige;
  right: 1rem;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
  margin: 0.5rem;
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

const SearchData = styled.span`
  display: grid;
  margin: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const DataInput = styled.input`
  width: auto;
  text-align: center;
  height: 2.4rem;
  border-radius: 8px;
  background-color: beige;
  color: black;
  border: none;
  opacity: 0.85;
`;