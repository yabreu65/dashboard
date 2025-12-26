import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, slideInFromLeftVariants } from '@/lib/animations';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'up' | 'left';
  delay?: number;
  className?: string;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className,
}) => {
  const variants = direction === 'up' ? slideUpVariants : slideInFromLeftVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
