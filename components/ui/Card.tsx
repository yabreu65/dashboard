import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  withGradientBorder?: boolean;
  withHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  withGradientBorder = false,
  withHover = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={withHover ? { y: -4 } : {}}
      className={cn(
        'glass rounded-2xl p-6',
        withGradientBorder && 'gradient-border',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
