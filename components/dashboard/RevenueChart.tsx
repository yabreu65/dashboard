'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { revenueData } from '@/lib/data';
import { Card } from '@/components/ui/Card';

export const RevenueChart: React.FC = () => {
  return (
    <Card className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Ingresos vs Gastos</h3>
          <p className="text-slate-400 text-sm">Comparativa mensual</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <MoreHorizontal size={20} />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Ingresos"
              animationDuration={1500}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#ec4899"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              name="Gastos"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </Card>
  );
};
