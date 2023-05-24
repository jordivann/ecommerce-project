import { Inter } from 'next/font/google';
import Nav from '@/components/nav/nav';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Commerce',
  description: 'Ecommerce site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className && 'flex min-h-screen flex-col justify-between'
        }
      >
        <header>
          <Nav />
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
