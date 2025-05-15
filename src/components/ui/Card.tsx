import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'default' | 'warning' | 'error' | 'success';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, status = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-4 bg-military-700 rounded-lg border transition-colors',
          {
            'border-military-600': status === 'default',
            'border-alert-amber': status === 'warning',
            'border-alert-red': status === 'error',
            'border-alert-green': status === 'success',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card }; 