import {
  WrapperSaved,
  SearchData,
  DataInput,
  CardGrid,
  Details,
  Summary,
  Timestampwraper,
  IconWrapper,
  Saved,
  BloodSugar,
  Carbohydrates,
  Insulin,
  Factor,
  InsulinUnits,
} from './SavedDataStyles';
import { RiDeleteBinLine, RiLineHeight } from 'react-icons/ri';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import UserDataToPdf from '../UserDataToPdf/UserDataToPdf';

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

  return (
    <WrapperSaved>
      <SearchData>
        <DataInput type="text" placeholder="Suche" onChange={handleChange} />
      </SearchData>
      <UserDataToPdf cardData={cardData} />
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
