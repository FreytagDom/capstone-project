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
  SavedData,
} from './SavedDataStyles';
import { RiDeleteBinLine, RiLineHeight } from 'react-icons/ri';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import UserDataToPdf from '../UserDataToPdf/UserDataToPdf';
import { useTranslation } from 'react-i18next';

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

  const sortedData = filteredData
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse();

  const { t } = useTranslation();

  return (
    <WrapperSaved>
      <SavedData> {t('storedvalues')}</SavedData>
      <SearchData>
        <DataInput
          type="text"
          placeholder={t('search')}
          onChange={handleChange}
        />
      </SearchData>
      <UserDataToPdf cardData={cardData} />
      <CardGrid id="pdf-content">
        {sortedData.map((item) => {
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
                  {t('bloodsugarlevel')}: <br /> {item.bloodsugar} mg/dl
                </BloodSugar>
                <br />
                <Carbohydrates>
                  {t('carbohydrates')}: <br /> {item.carbohydrates} g (Gramm)
                </Carbohydrates>
                <br />
                <Insulin>
                  {t('usedinsulin')}: <br /> {item.insulin}
                </Insulin>
                <br />
                <Factor>
                  {t('insulinfactor')}: <br /> {item.daytimeFactor}
                </Factor>
                <Factor>
                  {t('correctionfactor')}: <br />
                  {item.correctionFactor}
                </Factor>
                <InsulinUnits>
                  {t('injectedinsulin')}
                  <br /> {t('quantity')}: {item.calculateUnit}
                </InsulinUnits>
              </Saved>
            </Details>
          );
        })}
      </CardGrid>
    </WrapperSaved>
  );
}
