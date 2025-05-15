import React from 'react';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { motion } from 'framer-motion';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Project Cobra Core',
  description: 'Military-grade dispute management system',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0f1c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-military-950 text-white antialiased min-h-screen">
        <Navigation />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          {children}
        </motion.main>
      </body>
    </html>
  );
} 