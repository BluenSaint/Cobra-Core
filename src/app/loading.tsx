import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="military-panel text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
        <p className="mt-4 text-gray-400">Loading mission data...</p>
      </div>
    </div>
  );
} 