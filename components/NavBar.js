import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

export const Navbar = () => {
  return (
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

const Links = styled(Link)`
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
