import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import LoginButton from '../Button/Button'
import githubSvg from '../../assets/github.svg';
import googleLogoColor from '../../assets/googleLogoColor.svg';
import facebook from '../../assets/facebook.svg';

export default function LoginPage() {
  return (
    <>
      <SingIn>
        Wähle deinen <br /> Login aus.
      </SingIn>
      <LoginButtons>
        <LoginButton
          icon={googleLogoColor}
          providerName="Google"
          bgColor="#AA5437"
          onClick={() => signIn('google')}
        />
       {/* <LoginButton
          icon={facebook}
          providerName="Facebook"
          bgColor="#4050B5"
          onClick={() => signIn('facebook')}
        />   */}
          <LoginButton
          icon={githubSvg}
          providerName="GitHub"
          bgColor="#24292e"
          onClick={() => signIn('github')}
        />
      </LoginButtons>
    </>
  );
}

const SingIn = styled.p`
  justify-content: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 2rem;
  color: aquamarine;
  font-weight: bold;
`;

const LoginButtons = styled.section`
  margin-top: 4rem;
`;
