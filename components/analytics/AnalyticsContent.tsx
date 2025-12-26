'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const analyticsStats = [
  { title: 'Tasa de Conversión', value: '3.24%', change: '+0.5%', trend: 'up', icon: TrendingUp, color: 'from-violet-500 to-purple-600' },
  { title: 'Tiempo Promedio', value: '4m 32s', change: '-12s', trend: 'up', icon: Clock, color: 'from-blue-500 to-cyan-500' },
  { title: 'Visitantes Únicos', value: '24.5K', change: '+2.1K', trend: 'up', icon: Users, color: 'from-emerald-500 to-teal-500' },
  { title: 'Tasa de Rebote', value: '42.8%', change: '-5.2%', trend: 'up', icon: Globe, color: 'from-amber-500 to-orange-500' },
];

const trafficData = [
  { day: 'Lun', organic: 4200, direct: 2400, social: 1800, referral: 1200 },
  { day: 'Mar', organic: 3800, direct: 2200, social: 2100, referral: 1400 },
  { day: 'Mié', organic: 5100, direct: 2800, social: 1900, referral: 1100 },
  { day: 'Jue', organic: 4600, direct: 2500, social: 2300, referral: 1500 },
  { day: 'Vie', organic: 5400, direct: 3100, social: 2000, referral: 1300 },
  { day: 'Sáb', organic: 3200, direct: 1800, social: 2400, referral: 900 },
  { day: 'Dom', organic: 2900, direct: 1600, social: 2200, referral: 800 },
];

const deviceData = [
  { name: 'Desktop', sessions: 45, color: '#8b5cf6' },
  { name: 'Mobile', sessions: 35, color: '#ec4899' },
  { name: 'Tablet', sessions: 20, color: '#06b6d4' },
];

export const AnalyticsContent: React.FC = () => {
  return (
    <div className="p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Analytics</h1>
        <p className="text-slate-400 text-sm sm:text-base">Análisis detallado de tráfico y comportamiento</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {analyticsStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-emerald-400 text-sm">{stat.change}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Traffic Sources Chart */}
      <Card className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Fuentes de Tráfico</h3>
        <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                background: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
              }}
            />
            <Legend />
            <Bar dataKey="organic" fill="#8b5cf6" name="Orgánico" radius={[8, 8, 0, 0]} />
            <Bar dataKey="direct" fill="#ec4899" name="Directo" radius={[8, 8, 0, 0]} />
            <Bar dataKey="social" fill="#06b6d4" name="Redes Sociales" radius={[8, 8, 0, 0]} />
            <Bar dataKey="referral" fill="#f59e0b" name="Referencias" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Device Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-6">Distribución por Dispositivo</h3>
          <div className="space-y-4">
            {deviceData.map((device, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{device.name}</span>
                  <span className="text-sm text-slate-400">{device.sessions}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${device.sessions}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: device.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-6">Páginas Más Visitadas</h3>
          <div className="space-y-4">
            {[
              { page: '/dashboard', views: 8432, color: '#8b5cf6' },
              { page: '/productos', views: 6234, color: '#ec4899' },
              { page: '/analytics', views: 4821, color: '#06b6d4' },
              { page: '/clientes', views: 3456, color: '#f59e0b' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-mono text-sm">{item.page}</span>
                </div>
                <span className="text-slate-400">{item.views.toLocaleString()} vistas</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
