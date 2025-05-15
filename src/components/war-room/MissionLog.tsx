import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Panel } from '@/components/ui';

export interface MissionEntry {
  id: string;
  timestamp: Date;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
}

interface MissionLogProps {
  entries: MissionEntry[];
  maxHeight?: string;
}

export function MissionLog({ entries, maxHeight = '400px' }: MissionLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  const getTypeStyles = (type: MissionEntry['type']) => {
    switch (type) {
      case 'success':
        return 'bg-alert-green';
      case 'warning':
        return 'bg-alert-amber';
      case 'error':
        return 'bg-alert-red';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Panel>
      <h2 className="text-2xl font-bold mb-4 text-gradient">Mission Log</h2>
      <div
        ref={scrollRef}
        className="space-y-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-military-800 scrollbar-thumb-military-600"
        style={{ maxHeight }}
      >
        <AnimatePresence initial={false}>
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-4 text-sm bg-military-700/30 p-3 rounded-lg"
            >
              <div
                className={`w-2 h-2 rounded-full ${getTypeStyles(entry.type)}`}
              />
              <span className="text-gray-400 font-mono">
                {entry.timestamp.toLocaleTimeString()}
              </span>
              <span className="flex-1">{entry.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Panel>
  );
} 