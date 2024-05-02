import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'PropertyPulse | Fnd your dream rental property',
    description: 'Find your dream rental property with PropertyPulse',
    keywords: 'property, rental, rent, house, apartment, condo, townhouse, find rentals',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default MainLayout;
