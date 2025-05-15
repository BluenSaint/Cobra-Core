import type { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: {
    default: 'Project Cobra Core',
    template: '%s | Project Cobra Core',
  },
  description: 'Military-grade dispute management system',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A0C0F',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 