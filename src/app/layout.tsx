import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from './components/ClientWrapper';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Project Cobra Core',
  description: 'Military-grade dispute management system',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A0C0F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-military-900 text-white antialiased min-h-screen">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
} 