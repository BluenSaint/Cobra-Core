import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-military-800 border-b border-military-600 px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold text-white hover:text-gray-300 transition-colors">
          COBRA CORE
        </Link>
        
        <div className="flex gap-6">
          <Link 
            href="/war-room"
            className={`military-btn ${isActive('/war-room') ? 'bg-military-600' : ''}`}
          >
            War Room
          </Link>
          <Link 
            href="/upload"
            className={`military-btn ${isActive('/upload') ? 'bg-military-600' : ''}`}
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
} 