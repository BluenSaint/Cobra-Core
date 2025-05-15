import {
  ShieldCheckIcon,
  DocumentTextIcon,
  ClockIcon,
  LockClosedIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';
import type { ModuleData } from '@/components/war-room/StatusCard';

export const disputeModules: ModuleData[] = [
  {
    id: 'ai-commander',
    name: 'AI Commander',
    description: 'Automated dispute strategy and execution',
    status: 'WAITING',
    lastUpdate: new Date(),
    readiness: 75,
    icon: ShieldCheckIcon,
  },
  {
    id: 'letter-engine',
    name: 'Letter Engine',
    description: 'Automated letter generation and tracking',
    status: 'READY',
    lastUpdate: new Date(),
    readiness: 100,
    icon: DocumentTextIcon,
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'Dispute progress and history tracking',
    status: 'WAITING',
    lastUpdate: new Date(),
    readiness: 50,
    icon: ClockIcon,
  },
  {
    id: 'vault',
    name: 'Vault',
    description: 'Secure document storage and management',
    status: 'WAITING',
    lastUpdate: new Date(),
    readiness: 30,
    icon: LockClosedIcon,
  },
  {
    id: 'alerts',
    name: 'Alerts',
    description: 'Real-time notification system',
    status: 'FAILED',
    lastUpdate: new Date(),
    readiness: 15,
    icon: BellAlertIcon,
  },
]; 