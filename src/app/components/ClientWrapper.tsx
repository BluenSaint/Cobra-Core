'use client';

import React from 'react';
import Navigation from './Navigation';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
} 