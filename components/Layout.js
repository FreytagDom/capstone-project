import Footer from './Footer';
import Header from './Header';
import { Navbar } from './NavBar';
import bzBackGround from '../public/bzBackGround.jpg';
import Image from 'next/image';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <ImageBackGround>
        <Image src={bzBackGround} alt="img can't load" layout="fill" />
        <Header />

        <main>{children}</main>
        <Navbar />
        <Footer />
      </ImageBackGround>
    </>
  );
}

const ImageBackGround = styled.span`
  position: -webkit-sticky;
`;
