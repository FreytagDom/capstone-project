import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <NavbarHead>
      <Navigation>
        <Link href="/" passHref>
          <Tags>Start</Tags>
        </Link>

        <Link href="/setInsulinFactor" passHref>
          <Tags>
            Insulin <br />
            Faktor
          </Tags>
        </Link>

        <Link href="/setCorrectionFactor" passHref>
          <Tags>
            Korrektur <br />
            Faktor
          </Tags>
        </Link>

        <Link href="/savedInsulinData" passHref>
          <Tags>Daten</Tags>
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

const NavbarHead = styled.section`
  justify-content: space-evenly;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  justify-items: inherit;
  display: flex;
  position: fixed;
  bottom: 0vh;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  height: 4rem;
  z-index: 2;
`;

const Navigation = styled.nav`
  display: flex;
  font-size: 1.1rem;
  color: darkcyan;
  justify-content: space-evenly;
  z-index: 2;
`;

const Tags = styled.a`
  text-decoration: none;
  margin: 5px 20px;
  font-size: 1.1rem;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 8s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  z-index: 2;
  justify-content: space-evenly;
`;
