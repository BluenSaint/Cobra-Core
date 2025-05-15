import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upload Center',
  description: 'Secure document upload facility',
};

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 