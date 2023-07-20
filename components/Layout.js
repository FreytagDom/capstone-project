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
      </ImageBackGround>
      <Header />
      <main>{children}</main>
      <Navbar />
      <Footer />
    </>
  );
}

const ImageBackGround = styled.span`
  background-attachment: scroll;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`;
