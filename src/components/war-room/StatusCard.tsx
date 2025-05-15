import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

export type ModuleStatus = 'READY' | 'WAITING' | 'FAILED';

export interface ModuleData {
  id: string;
  name: string;
  description: string;
  status: ModuleStatus;
  lastUpdate: Date;
  readiness: number;
  icon?: React.ElementType;
}

interface StatusCardProps {
  module: ModuleData;
}

export function StatusCard({ module }: StatusCardProps) {
  const getStatusColor = (status: ModuleStatus) => {
    switch (status) {
      case 'READY':
        return 'text-alert-green';
      case 'WAITING':
        return 'text-alert-amber';
      case 'FAILED':
        return 'text-alert-red';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBg = (status: ModuleStatus) => {
    switch (status) {
      case 'READY':
        return 'bg-alert-green';
      case 'WAITING':
        return 'bg-alert-amber';
      case 'FAILED':
        return 'bg-alert-red';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Card status={module.status === 'READY' ? 'success' : module.status === 'FAILED' ? 'error' : 'warning'}>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {module.icon && (
            <div className="p-2 rounded-lg bg-military-700/50">
              <module.icon className="w-6 h-6" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              {module.name}
              <span
                className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                  module.status
                )} bg-opacity-10`}
              >
                {module.status}
              </span>
            </h3>
            <p className="text-sm text-gray-400">{module.description}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Readiness</span>
            <span className={`font-mono ${getStatusColor(module.status)}`}>
              {module.readiness}%
            </span>
          </div>
          <div className="w-full bg-military-600/50 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${module.readiness}%` }}
              className={`h-2 rounded-full ${getStatusBg(
                module.status
              )} transition-all duration-300`}
            />
          </div>
        </div>

        <div className="text-xs text-gray-400">
          Last updated: {module.lastUpdate.toLocaleString()}
        </div>
      </div>
    </Card>
  );
} 