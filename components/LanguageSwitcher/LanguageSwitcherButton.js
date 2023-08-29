import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitchButton() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    // <Wrapper>
    <ToggleButton onClick={toggleLanguage}>
      <FlagContainer>
        <FlagIcon selected={currentLanguage === 'en'}>🇺🇸</FlagIcon>
        <FlagIcon selected={currentLanguage === 'de'}>🇩🇪</FlagIcon>
      </FlagContainer>
    </ToggleButton>
    // </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 10;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: relative;
`;

const FlagContainer = styled.div`
  display: flex;
  position: absolute;
  top: -1.5rem;
  left: ${({ selected }) => (selected ? '0' : '50%')};
  transition: left 1s ease-in-out;
`;

const FlagIcon = styled.span`
  font-size: 24px;
  opacity: ${({ selected }) => (selected ? '1' : '0.5')};
  margin: 0 5px;
`;

// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';

// export default function LanguageSwitchButton({ onChangeLanguage }) {
//   const { i18n } = useTranslation();

//   const languages = [
//     { code: 'en', flag: '🇺🇸' },
//     { code: 'de', flag: '🇩🇪' },
//   ];
//   useEffect(() => {
//     // Stelle sicher, dass die Sprache nach dem ersten Rendern korrekt gesetzt wird
//     i18n.changeLanguage(i18n.language);
//   }, []);

//   return (
//     <Wrapper>
//       <SwitchButton
//         value={i18n.language}
//         onChange={(e) => onChangeLanguage(e.target.value)}
//       >
//         {languages.map((lang) => (
//           <SwitchOption key={lang.code} value={lang.code}>
//             {lang.flag}
//           </SwitchOption>
//         ))}
//       </SwitchButton>
//     </Wrapper>
//   );
// }
// const Wrapper = styled.div`
//   z-index: 10;
// `;
// const SwitchButton = styled.select`
//   background-color: transparent;
//   color: white;
//   border: none;
//   cursor: pointer;
// `;

// const SwitchOption = styled.option`
//   background-color: transparent;
// `;
