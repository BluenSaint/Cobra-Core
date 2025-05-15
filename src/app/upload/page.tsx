import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upload Center',
  description: 'Secure document upload facility',
};

export default function Upload() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        <div className="military-panel">
          <h1 className="text-4xl font-bold mb-6">Upload Center</h1>
          <p className="text-gray-400 mb-8">
            Secure document upload facility. Full functionality coming in Phase 2.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Credit Reports', format: 'PDF' },
              { title: 'ID Verification', format: 'JPG/PNG' },
              { title: 'Utility Bills', format: 'PDF' }
            ].map((doc) => (
              <div key={doc.title} className="p-4 bg-military-700 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-400">Format: {doc.format}</p>
                <button disabled className="military-btn mt-4 opacity-50 cursor-not-allowed">
                  Upload
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 