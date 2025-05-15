'use client';

import React from 'react';
import { Panel } from '@/components/ui/Panel';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const modules = [
  {
    title: 'AI Commander',
    description: 'Automated dispute strategy and execution',
    status: 'warning',
    readiness: 75,
  },
  {
    title: 'Letter Engine',
    description: 'Automated letter generation and tracking',
    status: 'success',
    readiness: 100,
  },
  {
    title: 'Timeline',
    description: 'Dispute progress and history tracking',
    status: 'default',
    readiness: 50,
  },
  {
    title: 'Vault',
    description: 'Secure document storage and management',
    status: 'default',
    readiness: 30,
  },
  {
    title: 'Alerts',
    description: 'Real-time notification system',
    status: 'error',
    readiness: 15,
  },
];

export default function WarRoom() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        <Panel variant="elevated">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">War Room</h1>
              <p className="text-gray-400">Command center for dispute operations</p>
            </div>
            <Button variant="success">Initialize Mission</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.title} status={module.status}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{module.title}</h3>
                  <p className="text-sm text-gray-400">{module.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Readiness</span>
                      <span>{module.readiness}%</span>
                    </div>
                    <div className="w-full bg-military-600 rounded-full h-2">
                      <div
                        className="bg-alert-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${module.readiness}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Panel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Panel>
            <h2 className="text-2xl font-bold mb-4">Mission Log</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-alert-green" />
                  <span className="text-gray-400">2h ago</span>
                  <span>System check completed</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <h2 className="text-2xl font-bold mb-4">Status Pulse</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Active Disputes', value: '12' },
                { label: 'Success Rate', value: '87%' },
                { label: 'Response Time', value: '24h' },
                { label: 'Threat Level', value: 'Low' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-military-700 rounded-lg">
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
} 