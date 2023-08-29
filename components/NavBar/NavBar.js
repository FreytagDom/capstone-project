import { NavbarHead, Navigation, Links } from './NavBarStyles';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  return (
    <>
      {session ? (
        <NavbarHead>
          <Navigation>
            <Links href="/" passHref>
              {t('start')}
            </Links>

            <Links href="/setInsulinFactor" passHref>
              {t('insulin')} <br />
              {t('factor')}
            </Links>

            <Links href="/setCorrectionFactor" passHref>
              {t('correction')} <br />
              {t('factor')}
            </Links>

            <Links href="/savedInsulinData" passHref>
              {t('data')}
            </Links>
          </Navigation>
        </NavbarHead>
      ) : null}
    </>
  );
};
