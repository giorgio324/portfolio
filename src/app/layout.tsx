import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import MobileNavbar from '@/components/mobileNavbar/MobileNavbar';
import Footer from '@/components/footer/Footer';
import { ActiveLinkContextProvider } from '@/context/ActiveLinkContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: "Home page of Giorgi KOCHUASHVILI's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-bodyBackgroundColor text-white`}>
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
