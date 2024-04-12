import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NewNavbar from '@/components/navbar/NewNavbar';

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
        <NewNavbar />
        {children}
      </body>
    </html>
  );
}
