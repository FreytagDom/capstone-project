import Footer from './Footer';
import Header from './Header';
import { Navbar } from './NavBar';
import bloodsugarvertical from '../public/bloodsugarvertical.jpg';
import Image from 'next/image';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import happyBlooddrop from '../public/happyBlooddrop.png';

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <>
     {session ? (<>
      <ImageBackGround>
        <Image
          src={bloodsugarvertical}
          alt="bloodsugar"
          layout="fill"
          objectFit="cover"
        />
      </ImageBackGround>
     </>
      ): ( <>
      <ImageBackGround>
        <Image
          src={happyBlooddrop}
          alt="happyBlooddrop"
          layout="fill"
          objectFit="cover"
        />
      </ImageBackGround>
      </> ) }
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
