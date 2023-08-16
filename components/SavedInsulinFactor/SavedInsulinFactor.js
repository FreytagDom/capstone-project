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
