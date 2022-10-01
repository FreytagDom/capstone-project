import Image from 'next/image';
import styled from 'styled-components';
import copyright2 from '../public/copyright2.png';

export default function Footer() {
  return (
    <FooterLine>
      <Image src={copyright2} alt="" />
      <br />
      by FreyDom 2022
    </FooterLine>
  );
}

const FooterLine = styled.footer`
  max-height: 0.8rem;
  color: #5f3dc4;
  display: flex;
  position: fixed;
  bottom: 3px;
  width: 100%;
`;
