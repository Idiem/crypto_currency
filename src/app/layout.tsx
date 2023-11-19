import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/utils/globals.css';
import Providers from '@/redux/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Tracker',
  description: 'A simple crypto tracker built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="/currency.ico" />
          <meta name="description" content="A simple crypto tracker built with Next.js" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
