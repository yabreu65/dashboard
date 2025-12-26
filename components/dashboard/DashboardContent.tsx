'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Filter } from 'lucide-react';
import { StatsGrid } from './StatsGrid';
import { RevenueChart } from './RevenueChart';
import { CategoryPieChart } from './CategoryPieChart';
import { TransactionList } from './TransactionList';
import { TopProducts } from './TopProducts';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import type { DateRange } from '@/types';

export const DashboardContent: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>('7d');

  const dateRangeOptions = [
    { value: '7d', label: 'Últimos 7 días' },
    { value: '30d', label: 'Últimos 30 días' },
    { value: '90d', label: 'Últimos 90 días' },
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-slate-400 text-sm sm:text-base">Bienvenido de vuelta, Yoryi 👋</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 glass rounded-xl px-3 sm:px-4 py-2">
            <Calendar size={14} className="text-slate-400 sm:w-4 sm:h-4" />
            <Select
              value={dateRange}
              onChange={(value) => setDateRange(value as DateRange)}
              options={dateRangeOptions}
            />
          </div>

          <Button variant="secondary">
            <Filter size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Filtrar</span>
          </Button>

          <Button variant="secondary">
            <Download size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <RevenueChart />
        <CategoryPieChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionList />
        <TopProducts />
      </div>
    </div>
  );
};
