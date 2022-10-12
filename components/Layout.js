import Footer from './Footer';
import Header from './Header';
import { Navbar } from './NavBar';
import bloodsugarvertical from '../public/bloodsugarvertical.jpg';
import Image from 'next/image';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      <ImageBackGround>
        <Image
          src={bloodsugarvertical}
          alt="bloodsugar"
          layout="fill"
          objectFit="cover"
        />
        <Header />

        <main>{children}</main>
        <Navbar />
        <Footer />
      </ImageBackGround>
    </>
  );
}

const ImageBackGround = styled.span`
  background-attachment: scroll;
  position: static;
  width: 100%;
  height: 100%;
`;
