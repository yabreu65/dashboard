'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, MapPin, MoreVertical, UserPlus, Filter } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const customers = [
  { id: 1, name: 'María García', email: 'maria@example.com', phone: '+34 612 345 678', location: 'Madrid, España', orders: 24, spent: 4250, status: 'active', avatar: 'MG' },
  { id: 2, name: 'Carlos López', email: 'carlos@example.com', phone: '+34 623 456 789', location: 'Barcelona, España', orders: 18, spent: 3100, status: 'active', avatar: 'CL' },
  { id: 3, name: 'Ana Martínez', email: 'ana@example.com', phone: '+34 634 567 890', location: 'Valencia, España', orders: 32, spent: 5800, status: 'vip', avatar: 'AM' },
  { id: 4, name: 'Juan Rodríguez', email: 'juan@example.com', phone: '+34 645 678 901', location: 'Sevilla, España', orders: 12, spent: 2200, status: 'active', avatar: 'JR' },
  { id: 5, name: 'Laura Sánchez', email: 'laura@example.com', phone: '+34 656 789 012', location: 'Bilbao, España', orders: 8, spent: 1500, status: 'inactive', avatar: 'LS' },
  { id: 6, name: 'Pedro Gómez', email: 'pedro@example.com', phone: '+34 667 890 123', location: 'Málaga, España', orders: 45, spent: 8900, status: 'vip', avatar: 'PG' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'vip': return 'bg-violet-500/20 text-violet-400 border-violet-500/30';
    case 'active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'inactive': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'vip': return 'VIP';
    case 'active': return 'Activo';
    case 'inactive': return 'Inactivo';
    default: return status;
  }
};

export const CustomersContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Clientes</h1>
          <p className="text-slate-400 text-sm sm:text-base">Gestiona tu base de clientes</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="secondary">
            <Filter size={16} />
            <span className="hidden sm:inline">Filtrar</span>
          </Button>
          <Button variant="primary">
            <UserPlus size={16} />
            <span className="hidden sm:inline">Nuevo Cliente</span>
          </Button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {[
          { label: 'Total Clientes', value: customers.length, color: 'from-violet-500 to-purple-600' },
          { label: 'Clientes VIP', value: customers.filter(c => c.status === 'vip').length, color: 'from-amber-500 to-orange-500' },
          { label: 'Ingresos Totales', value: `$${customers.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}`, color: 'from-emerald-500 to-teal-500' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <Card className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 transition-colors"
          />
        </div>
      </Card>

      {/* Customers Table */}
      <Card>
        <div className="overflow-x-auto -mx-6 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap">Cliente</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap hidden md:table-cell">Contacto</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap hidden lg:table-cell">Ubicación</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap">Pedidos</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap">Gastado</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap">Estado</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-400"></th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, i) => (
                  <motion.tr
                    key={customer.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-semibold text-xs sm:text-sm">
                          {customer.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base whitespace-nowrap">{customer.name}</p>
                          <p className="text-xs text-slate-500 md:hidden">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 hidden md:table-cell">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <Mail size={14} className="text-slate-500" />
                          <span className="whitespace-nowrap">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                          <Phone size={14} className="text-slate-500" />
                          <span className="whitespace-nowrap">{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 hidden lg:table-cell">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <MapPin size={14} className="text-slate-500" />
                        <span className="whitespace-nowrap">{customer.location}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className="font-medium text-sm sm:text-base">{customer.orders}</span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className="font-semibold text-emerald-400 text-sm sm:text-base whitespace-nowrap">${customer.spent.toLocaleString()}</span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${getStatusColor(customer.status)}`}>
                        {getStatusLabel(customer.status)}
                      </span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <MoreVertical size={14} className="sm:w-4 sm:h-4" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
