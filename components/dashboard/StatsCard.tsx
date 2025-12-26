'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { StatCard as StatCardType } from '@/types';

interface StatsCardProps {
  stat: StatCardType;
  index: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass rounded-2xl p-6 gradient-border cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
        >
          <Icon size={24} />
        </motion.div>
        <div
          className={`flex items-center gap-1 text-sm ${
            stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {stat.change}
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-3xl font-bold"
      >
        {stat.value}
      </motion.p>
    </motion.div>
  );
};
