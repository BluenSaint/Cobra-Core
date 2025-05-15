'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Panel } from '@/components/ui';
import { Button } from '@/components/ui';
import { ModuleGrid } from '@/components/war-room/ModuleGrid';
import { MissionLog, type MissionEntry } from '@/components/war-room/MissionLog';
import { disputeModules } from '@/lib/data/modules';
import type { ModuleData } from '@/components/war-room/StatusCard';

const generateMissionEntry = (): MissionEntry => ({
  id: Math.random().toString(36).substring(7),
  timestamp: new Date(),
  message: [
    'System check completed successfully',
    'New dispute strategy generated',
    'Document verification in progress',
    'AI analysis completed',
    'Security scan initiated',
    'Backup completed',
    'Network status verified',
    'Module sync completed',
  ][Math.floor(Math.random() * 8)],
  type: ['success', 'warning', 'info'][Math.floor(Math.random() * 3)] as MissionEntry['type'],
});

export default function WarRoom() {
  const [modules, setModules] = useState<ModuleData[]>(disputeModules);
  const [missionLog, setMissionLog] = useState<MissionEntry[]>([]);

  // Simulate real-time updates
  useEffect(() => {
    // Add initial log entries
    setMissionLog([
      {
        id: '1',
        timestamp: new Date(),
        message: 'War Room initialized',
        type: 'success',
      },
    ]);

    // Update modules and add log entries periodically
    const interval = setInterval(() => {
      // Update a random module's status
      setModules((currentModules) => {
        const moduleIndex = Math.floor(Math.random() * currentModules.length);
        const newModules = [...currentModules];
        const module = { ...newModules[moduleIndex] };
        
        // Randomly adjust readiness
        module.readiness = Math.min(100, Math.max(0, module.readiness + (Math.random() > 0.5 ? 5 : -5)));
        
        // Update status based on readiness
        if (module.readiness >= 90) module.status = 'READY';
        else if (module.readiness < 20) module.status = 'FAILED';
        else module.status = 'WAITING';
        
        module.lastUpdate = new Date();
        newModules[moduleIndex] = module;
        return newModules;
      });

      // Add a new log entry
      setMissionLog((current) => [...current, generateMissionEntry()].slice(-20));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-6"
      >
        <Panel variant="elevated">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gradient">War Room</h1>
              <p className="text-gray-400">Command center for dispute operations</p>
            </div>
            <Button variant="success">Initialize Mission</Button>
          </motion.div>

          <ModuleGrid modules={modules} />
        </Panel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MissionLog entries={missionLog} />

          <Panel>
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Status Pulse
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Active Disputes',
                  value: modules.filter((m) => m.status === 'READY').length.toString(),
                },
                {
                  label: 'Success Rate',
                  value: `${Math.round(
                    (modules.reduce((acc, m) => acc + m.readiness, 0) /
                      (modules.length * 100)) *
                      100
                  )}%`,
                },
                {
                  label: 'Response Time',
                  value: '24h',
                },
                {
                  label: 'Threat Level',
                  value:
                    modules.filter((m) => m.status === 'FAILED').length > 1
                      ? 'High'
                      : 'Low',
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-military-700/30 rounded-lg hover:bg-military-700/50 transition-colors"
                >
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold font-mono">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </Panel>
        </div>
      </motion.div>
    </div>
  );
} 