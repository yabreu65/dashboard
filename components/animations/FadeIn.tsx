import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/animations';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
