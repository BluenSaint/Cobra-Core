import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'War Room',
  description: 'Command center for dispute operations',
};

export default function WarRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 