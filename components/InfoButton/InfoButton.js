import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import closeIcon from '../../public/closeIcon.svg';
import infoIcon from '../../public/infoIcon.svg';

export default function InfoButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <InfoButtonContainer>
      <Button onClick={toggleCard}>
        {isOpen ? (
          <Icon src={closeIcon} alt="" />
        ) : (
          <Icon src={infoIcon} alt="" />
        )}
      </Button>
      {isOpen && (
        <InfoCard>
          Unter "Insulin Faktor" und "Korrektur Faktor" müssen erst die
          jeweiligen Faktoren angelegt werden. Im nächsten Schritt kann jetzt
          unter "Start" mit der Eingabe des aktuellen Blutzuckerwertes und der
          Kohlenhydrate, die man zu sich nehmen möchte, begonnen werden. Im
          Anschluss klickt man nur noch auf "Bestätigen" und man bekommt die zu
          spritzende Insulin Menge angezeigt. Die Berechnung erfolgt automatisch
          unter Einbezug der Tageszeit und wählt so den entsprechenden Faktor.
          Im Bereich "Daten" kann man sich die verwendeten und gespeicherten
          Daten anzeigen lassen und auch als "PDF" exportieren.
        </InfoCard>
      )}
    </InfoButtonContainer>
  );
}

const InfoButtonContainer = styled.div`
  display: grid;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 9;
  margin-bottom: -1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;

const InfoCard = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  background: linear-gradient(8deg, #09203f, #537895);
  color: azure;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  @media (max-width: 768px) {
    width: 260px;
  }
`;

const Icon = styled(Image)`
  height: 3rem;
  margin-top: -1.5rem;
`;
