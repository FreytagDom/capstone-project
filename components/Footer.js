import Image from 'next/image';
import styled from 'styled-components';
import copyright2 from '../public/copyright2.png';

export default function Footer() {
  return (
    <FooterLine>
      <Image src={copyright2} alt="" />
      2022 by FreyDom
    </FooterLine>
  );
}

const FooterLine = styled.footer`
  max-height: 1rem;
  color: #5f3dc4;
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
`;
