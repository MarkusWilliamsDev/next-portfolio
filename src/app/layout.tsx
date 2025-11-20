import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Markus Williams Developer Portfolio',
  description:
    'Experienced full-stack developer specializing in modern web technologies. Explore my projects showcasing expertise in React, Next.js, Sitecore, and other innovative solutions for complex development challenges',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50/75">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-800 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

