import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-military-900 text-white p-4">
      <div className="military-panel max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          Project Cobra Core
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Military-Grade Dispute Management System
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/war-room" 
            className="military-btn"
          >
            Enter War Room
          </Link>
          <Link 
            href="/upload" 
            className="military-btn"
          >
            Upload Center
          </Link>
        </div>
      </div>
    </main>
  );
}
