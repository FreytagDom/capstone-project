import { NavbarHead, Navigation, Links } from './NavBarStyles';
import { useSession } from 'next-auth/react';

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <NavbarHead>
          <Navigation>
            <Links href="/" passHref>
              Start
            </Links>

            <Links href="/setInsulinFactor" passHref>
              Insulin <br />
              Faktor
            </Links>

            <Links href="/setCorrectionFactor" passHref>
              Korrektur <br />
              Faktor
            </Links>

            <Links href="/savedInsulinData" passHref>
              Daten
            </Links>
          </Navigation>
        </NavbarHead>
      ) : null}
    </>
  );
};
