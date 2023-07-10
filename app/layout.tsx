import './globals.css';
import HydrationHandler from '../components/core/layout/HydrationHandler';
import { Montserrat, Hind } from 'next/font/google';
import LoginModal from '../components/core/organism/modals/LoginModal';
import Footer from '../components/core/organism/footer/Footer';
import Navbar from '../components/core/organism/navbar/Navbar';
import NextAuthSessionProvider from '../providers/SessionProvider';
import getCurrentUser from './actions/getCurrentUser';
import TanstackQueryProvider from '../providers/TanstackQueryProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const hind = Hind({
  subsets: ['latin'],
  variable: '--font-hind',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Lexica',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`relative selection:bg-primary-600 selection:text-white ${montserrat.className} ${hind.className}`}
      >
        <TanstackQueryProvider>
          <NextAuthSessionProvider>
            <LoginModal />
            <HydrationHandler>
              <Navbar session={session} />
              {children}
              <Footer />
            </HydrationHandler>
          </NextAuthSessionProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
