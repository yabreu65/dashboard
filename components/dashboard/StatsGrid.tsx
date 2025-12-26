'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatsCard } from './StatsCard';
import { statsData } from '@/lib/data';
import { staggerContainerVariants } from '@/lib/animations';

export const StatsGrid: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {statsData.map((stat, index) => (
        <StatsCard key={stat.title} stat={stat} index={index} />
      ))}
    </motion.div>
  );
};
