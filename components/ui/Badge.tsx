import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const variants = {
    primary: 'bg-violet-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
  };

  return (
    <span
      className={cn(
        'px-2 py-0.5 rounded-full text-xs font-medium text-white',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
