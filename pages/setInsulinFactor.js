import FactorEntry from '../components/SetInsulinFactor';
import Link from 'next/link';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export default function CreateFactor() {
  async function handleSetSubmit(
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  ) {
    const response = await fetch('/api/insulinFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      }),
    });
    const response_ = await response.json();
    console.log(response_);
  }

  return (
    <>
      <FactorEntry onHandleSetFactor={handleSetSubmit} />
      <NavbarHead>
        <Navigation>
          <Link href="/savedInsulinFactor" passHref>
            <Tags>
              Gespeicherter <br /> Insulinfaktor
            </Tags>
          </Link>
        </Navigation>
      </NavbarHead>
    </>
  );
}
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(166deg);
 }
 to {
   -webkit-filter: hue-rotate(-194deg);
 }
`;

const NavbarHead = styled.section`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  display: flex;
  position: fixed;
  bottom: 10rem;
  width: 100%;
  z-index: 1;
  justify-content: space-evenly;
`;

const Navigation = styled.nav`
  display: flex;
  font-size: 1.1em;
  color: darkcyan;
  justify-content: space-evenly;
  padding-top: 0.5rem;
`;

const Tags = styled.a`
  text-decoration: none;
  margin: 15px 20px;
  font-size: 1em;
`;
