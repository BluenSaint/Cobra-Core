import React from 'react';
import { cn } from '@/lib/utils';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated';
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-military-800 border border-military-600 rounded-lg p-6',
          variant === 'elevated' && 'shadow-lg shadow-military-900/50',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Panel.displayName = 'Panel';

export { Panel }; 