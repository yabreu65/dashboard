'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { recentTransactions } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { listItemVariants, staggerContainerVariants } from '@/lib/animations';

export const TransactionList: React.FC = () => {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return { text: 'Completada', color: 'text-emerald-400', icon: '✓' };
      case 'pending':
        return { text: 'Pendiente', color: 'text-amber-400', icon: '⏳' };
      case 'failed':
        return { text: 'Fallida', color: 'text-red-400', icon: '✗' };
      default:
        return { text: status, color: 'text-slate-400', icon: '' };
    }
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Transacciones Recientes</h3>
          <p className="text-slate-400 text-sm">Últimas 5 transacciones</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-violet-400 text-sm hover:underline"
        >
          Ver todas
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {recentTransactions.map((tx) => {
          const status = getStatusText(tx.status);
          return (
            <motion.div
              key={tx.id}
              variants={listItemVariants}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-sm font-medium text-violet-300"
                >
                  {tx.avatar}
                </motion.div>
                <div>
                  <p className="font-medium">{tx.customer}</p>
                  <p className="text-sm text-slate-500">{tx.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatCurrency(tx.amount)}</p>
                <p className={`text-xs ${status.color}`}>
                  {status.icon} {status.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Card>
  );
};
