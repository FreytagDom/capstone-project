import {
  Wrapper,
  SavedCorrectionFactorTitel,
  CardGrid,
  Saved,
  MorningCorrectionFactor,
  LunchCorrectionFactor,
  EveningCorrectionFactor,
  LateCorrectionFactor,
} from './SavedCorrectionFactorStyles';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

export default function SavedCorrectionFactor({ correctionfactors }) {
  const { data: session } = useSession();
  const userCorrectionFactor = correctionfactors.filter((correctionfactors) => {
    return correctionfactors.id === session.user.email;
  });
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SavedCorrectionFactorTitel>
        {t('saved')} <br /> {t('correctionfactor')}
      </SavedCorrectionFactorTitel>
      <CardGrid>
        {userCorrectionFactor.map((items) => {
          return (
            <Saved key={items.id}>
              <MorningCorrectionFactor>
                {t('correctionfactormorning')}: <br />{' '}
                {items.morningcorrectionfactor}
              </MorningCorrectionFactor>
              <br />
              <LunchCorrectionFactor>
                {t('correctionfactornoon')}: <br />{' '}
                {items.lunchcorrectionfactor}
              </LunchCorrectionFactor>
              <br />
              <EveningCorrectionFactor>
                {t('correctionfactorevening')}: <br />{' '}
                {items.eveningcorrectionfactor}
              </EveningCorrectionFactor>
              <br />
              <LateCorrectionFactor>
                {t('correctionfactorlate')}: <br /> {items.latecorrectionfactor}
              </LateCorrectionFactor>
            </Saved>
          );
        })}
      </CardGrid>
    </Wrapper>
  );
}
