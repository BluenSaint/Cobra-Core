import React from 'react';
import { motion } from 'framer-motion';
import { StatusCard, type ModuleData } from './StatusCard';

interface ModuleGridProps {
  modules: ModuleData[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {modules.map((module) => (
        <motion.div key={module.id} variants={item}>
          <StatusCard module={module} />
        </motion.div>
      ))}
    </motion.div>
  );
} 