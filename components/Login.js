import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import LoginButton from '../components/Button';
import githubSvg from '../assets/github.svg';
import googleSvg from '../assets/google.svg';

export default function LoginPage() {
  return (
    <>
      <SingIn>
        Wähle deinen <br /> Login aus.
      </SingIn>
      <LoginButtons>
        <LoginButton
          icon={githubSvg}
          providerName="GitHub"
          bgColor="#24292e"
          onClick={() => signIn('github')}
        />
        <LoginButton
          icon={googleSvg}
          providerName="Google"
          bgColor="#DB4437"
          onClick={() => signIn('google')}
        />
      </LoginButtons>
    </>
  );
}

const SingIn = styled.p`
  justify-content: center;
  font-size: 2rem;
  color: antiquewhite;
`;

const LoginButtons = styled.section`
  margin-top: 4rem;
`;
