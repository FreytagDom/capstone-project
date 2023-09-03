import {
  Wrapper,
  SavedFactorTitel,
  CardGrid,
  Saved,
  MorningFactor,
  LunchFactor,
  EveningFactor,
  LateFactor,
} from './SavedInsulinFactorStyels';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

export default function SavedFactor({ factors }) {
  const { data: session } = useSession();
  const userFactor = factors.filter((factors) => {
    return factors.id === session.user.email;
  });
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SavedFactorTitel>
        {t('saved')} <br /> {t('insulinfactor')}
      </SavedFactorTitel>
      <CardGrid>
        {userFactor.map((items) => {
          return (
            <Saved key={items.id}>
              <MorningFactor>
                {t('factormorning')}: <br /> {items.morningfactor}
              </MorningFactor>
              <br />
              <LunchFactor>
                {t('factornoon')}: <br /> {items.lunchfactor}
              </LunchFactor>
              <br />
              <EveningFactor>
                {t('factorevening')}: <br /> {items.eveningfactor}
              </EveningFactor>
              <br />
              <LateFactor>
                {t('factorlate')}: <br /> {items.latefactor}
              </LateFactor>
            </Saved>
          );
        })}
      </CardGrid>
    </Wrapper>
  );
}
