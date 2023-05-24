import { Inter } from 'next/font/google';
import Nav from '@/components/nav/Nav';

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
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          footer
        </footer>
      </body>
    </html>
  );
}
