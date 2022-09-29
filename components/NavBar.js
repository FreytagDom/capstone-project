import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <NavbarHead>
      <Navigation>
        <Link href="/">
          <a>Start</a>
        </Link>
      </Navigation>
      <Navigation>
        <Link href="/setInsulinFactor">
          <a>Faktor</a>
        </Link>
      </Navigation>
      <Navigation>
        <Link href="/savedInsulinFactor">
          <a>Gespeichert</a>
        </Link>
      </Navigation>
    </NavbarHead>
  );
};

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(166deg);
 }
 to {
   -webkit-filter: hue-rotate(-194deg);
 }
`;

const NavbarHead = styled.nav`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  display: grid;
  position: fixed;

  justify-content: space-evenly;
`;

const Navigation = styled.nav`
  display: flex;
  font-size: 1.2em;
  color: darkcyan;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
`;
