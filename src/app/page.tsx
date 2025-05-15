import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gradient mb-6"
          >
            Project Cobra Core
          </motion.h1>
          
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Military-Grade Dispute Management System
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link
              href="/war-room"
              className="btn btn-primary inline-flex items-center justify-center gap-2"
            >
              Enter War Room
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            
            <Link
              href="/upload"
              className="btn btn-secondary inline-flex items-center justify-center gap-2"
            >
              Upload Center
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Military-Grade Security',
              description: 'Advanced encryption and secure data handling protocols.',
            },
            {
              title: 'Real-Time Analytics',
              description: 'Monitor dispute progress with live status updates.',
            },
            {
              title: 'Automated Strategy',
              description: 'AI-powered dispute resolution recommendations.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card p-6 hover:transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
