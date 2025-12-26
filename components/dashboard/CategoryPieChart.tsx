'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { salesByCategory } from '@/lib/data';
import { Card } from '@/components/ui/Card';

export const CategoryPieChart: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Ventas por Categoría</h3>
          <p className="text-slate-400 text-sm">Distribución actual</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={salesByCategory}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={1500}
            >
              {salesByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {salesByCategory.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-2 text-sm"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: cat.color }}
            />
            <span className="text-slate-400">{cat.name}</span>
            <span className="ml-auto font-medium">{cat.value}%</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
