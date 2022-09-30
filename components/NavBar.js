import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <NavbarHead>
      <Navigation>
        <Link>
          <Tags href="/">Start</Tags>

          <Tags href="/savedInsulinFactor">Gespeichert</Tags>

          <Tags href="/setInsulinFactor">Faktor</Tags>
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
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
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

const Tags = styled.a`
  text-decoration: none;
  margin: 0px 20px;
  font-size: 1em;
  justify-items: stretch;
`;
