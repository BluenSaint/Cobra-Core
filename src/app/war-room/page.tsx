import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'War Room',
  description: 'Command center for dispute operations',
};

export default function WarRoom() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        <div className="military-panel">
          <h1 className="text-4xl font-bold mb-6">War Room</h1>
          <p className="text-gray-400 mb-4">
            Command center for dispute operations. Full functionality coming in Phase 2.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {['AI Commander', 'Letter Engine', 'Timeline', 'Vault', 'Alerts'].map((module) => (
              <div key={module} className="p-4 bg-military-700 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{module}</h3>
                <p className="text-sm text-gray-400">Coming in Phase 2</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 