'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { topProducts } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { listItemVariants, staggerContainerVariants } from '@/lib/animations';

export const TopProducts: React.FC = () => {
  const getProductEmoji = (index: number) => {
    const emojis = ['🥇', '🥈', '🥉', '📦'];
    return emojis[index] || '📦';
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Productos Top</h3>
          <p className="text-slate-400 text-sm">Mejores vendidos este mes</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-violet-400 text-sm hover:underline"
        >
          Ver todos
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {topProducts.map((product, i) => (
          <motion.div
            key={i}
            variants={listItemVariants}
            whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-lg"
              >
                {getProductEmoji(i)}
              </motion.div>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-slate-500">
                  {product.sales.toLocaleString()} ventas
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${(product.revenue / 1000).toFixed(1)}k</p>
              <p
                className={`text-xs flex items-center justify-end gap-1 ${
                  product.growth > 0 ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {product.growth > 0 ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                {Math.abs(product.growth)}%
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};
