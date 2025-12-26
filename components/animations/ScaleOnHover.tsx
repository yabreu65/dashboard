import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '@/lib/animations';

interface ScaleOnHoverProps {
  children: React.ReactNode;
  className?: string;
}

export const ScaleOnHover: React.FC<ScaleOnHoverProps> = ({ children, className }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverScaleVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
