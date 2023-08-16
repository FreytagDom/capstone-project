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

export default function SavedCorrectionFactor({ correctionfactors }) {
  const { data: session } = useSession();
  const userCorrectionFactor = correctionfactors.filter((correctionfactors) => {
    return correctionfactors.id === session.user.email;
  });

  return (
    <Wrapper>
      <SavedCorrectionFactorTitel>
        Gespeicherter <br /> Korrekturfaktor
      </SavedCorrectionFactorTitel>
      <CardGrid>
        {userCorrectionFactor.map((items) => {
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
