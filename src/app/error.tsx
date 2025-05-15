'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="military-panel text-center">
        <h2 className="text-2xl font-bold text-alert-red mb-4">Mission Critical Error</h2>
        <p className="text-gray-400 mb-6">{error.message || 'An unexpected error occurred.'}</p>
        <button
          onClick={reset}
          className="military-btn bg-alert-red hover:bg-red-700"
        >
          Reset Mission
        </button>
      </div>
    </div>
  );
} 