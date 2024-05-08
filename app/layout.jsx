import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Fnd your dream rental property',
  description: 'Find your dream rental property with PropertyPulse',
  keywords:
    'property, rental, rent, house, apartment, condo, townhouse, find rentals',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};
export default MainLayout;
