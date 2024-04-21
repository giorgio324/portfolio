import type { Metadata } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import MobileNavbar from '@/components/mobileNavbar/MobileNavbar';
import Footer from '@/components/footer/Footer';
import { ActiveLinkContextProvider } from '@/context/ActiveLinkContext';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-manrope',
});
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'Giorgi KOCHUASHVILI',
  description: "Giorgi KOCHUASHVILI's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${manrope.variable} ${bebasNeue.variable}`}>
      <body className={'bg-bodyBackgroundColor text-white'}>
        <ActiveLinkContextProvider>
          <Navbar />
          <MobileNavbar />
          {children}
        </ActiveLinkContextProvider>
        <Footer />
      </body>
    </html>
  );
}
