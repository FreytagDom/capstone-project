import Footer from './Footer';
import Header from './Header';
import { Navbar } from './NavBar';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navbar />
      <Footer />
    </>
  );
}
