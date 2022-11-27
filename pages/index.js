import Input from '../components/HomeInput';
import styled from 'styled-components';
import { getAllDayFactors } from '../services/savedDayFactorService';
import { getAllCorrectionFactors } from '../services/correctionFactorsService';
import { useSession, signIn, signOut } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import LoginPage from '../components/Login';
import { GoSignOut } from 'react-icons/go';

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

export default function Home({ factors, correctionfactors }) {
  // const isPreview = process.env.VERCEL_ENV === 'preview';
  const { data: session } = useSession();

  return (
    <Wrapper>
      <Sign>
        {session ? (
          <>
            <Login>
              Hallo {'  '}
              <Login> {session.user.name}</Login>
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
            {/* <a
              href="#"
              onClick={() => signIn(isPreview ? 'credentials' : 'github')}
            >
              Anmelden
            </a> */}
          </>
        )}
      </Sign>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;

const Login = styled.span`
  justify-content: center;
  color: white;
  text-decoration: none;
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
  margin-top: -1rem;
  font-size: 1rem;
`;
