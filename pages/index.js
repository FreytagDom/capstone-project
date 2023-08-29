import styled from 'styled-components';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';
import { useSession, signIn, signOut } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { GoSignOut } from 'react-icons/go';
import Input from '../components/HomeInput/HomeInput';
import LoginPage from '../components/Login/Login';
import DeleteUserDataButton from '../components/DeleteUserData/DeleteUserData';
import InfoButton from '../components/InfoButton/InfoButton';
import LanguageSwitchButton from '../components/LanguageSwitcher/LanguageSwitcherButton';
import i18n from '../components/LanguageSwitcher/i18n';
import { useState } from 'react';

export async function getServerSideProps({ req }) {
  const factors = await getAllDayFactors();
  const correctionfactors = await getAllCorrectionFactors();
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });

  const response = await fetch(
    `http://${req.headers.host}/api/setInsulinDatas/`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    props: {
      factors: factors,
      correctionfactors: correctionfactors,
    },
  };
}

export default function Home({ t, factors, correctionfactors }) {
  const { data: session } = useSession();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Wrapper>
        <InfoButton />
        {/* <LanguageSwitchButton
          currentLanguage={currentLanguage}
          onChangeLanguage={handleChangeLanguage}
        /> */}
        <Sign>
          {session ? (
            <>
              <Login>
                <DeleteUserDataButton />
                Hallo {'  '}
                {session.user.name}
              </Login>{' '}
              {'  '}
              <Atags href="#" onClick={signOut}>
                <GoSignOut />
              </Atags>
              <Input
                session={session}
                factors={factors}
                correctionfactors={correctionfactors}
              />
            </>
          ) : (
            <>
              <LoginPage />
              <TestLogin href="#" onClick={() => signIn('credentials')}>
                Test Anmelden
              </TestLogin>
            </>
          )}
        </Sign>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;

const Login = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  color: orange;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Sign = styled.span`
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  z-index: 2;
`;

const Atags = styled.a`
  display: flex;
  color: sandybrown;
  justify-content: end;
  text-align: center;
  margin: -1.3rem 0.2rem 0.3rem 0.1rem;
  padding: 0.3rem 0.1rem 0rem 0.3rem;
  font-size: 1rem;
`;

const TestLogin = styled.a`
  font-size: 1.3rem;
  color: green;
  justify-content: space-evenly;
`;
