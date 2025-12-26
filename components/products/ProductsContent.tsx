'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, TrendingUp, TrendingDown, Package, DollarSign, Star, MoreVertical } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const products = [
  { id: 1, name: 'MacBook Pro M3', category: 'Electrónica', price: 1999, stock: 45, sales: 1234, revenue: 2467800, rating: 4.9, trend: 12.5, image: '💻' },
  { id: 2, name: 'iPhone 15 Pro', category: 'Electrónica', price: 1199, stock: 128, sales: 2341, revenue: 2808000, rating: 4.8, trend: 8.3, image: '📱' },
  { id: 3, name: 'AirPods Pro', category: 'Audio', price: 249, stock: 234, sales: 3456, revenue: 863100, rating: 4.7, trend: -2.1, image: '🎧' },
  { id: 4, name: 'iPad Air', category: 'Tablets', price: 699, stock: 89, sales: 987, revenue: 691500, rating: 4.6, trend: 15.7, image: '📱' },
  { id: 5, name: 'Apple Watch Series 9', category: 'Wearables', price: 429, stock: 156, sales: 1543, revenue: 661947, rating: 4.8, trend: 5.2, image: '⌚' },
  { id: 6, name: 'Magic Keyboard', category: 'Accesorios', price: 149, stock: 321, sales: 876, revenue: 130524, rating: 4.5, trend: -1.8, image: '⌨️' },
];

const categories = ['Todos', 'Electrónica', 'Audio', 'Tablets', 'Wearables', 'Accesorios'];

export const ProductsContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = products.length;
  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1);

  return (
    <div className="p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Productos</h1>
          <p className="text-slate-400 text-sm sm:text-base">Gestiona tu inventario de productos</p>
        </div>
        <Button variant="primary">
          <Plus size={16} />
          <span className="hidden sm:inline">Nuevo Producto</span>
          <span className="sm:hidden">Nuevo</span>
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
        {[
          { icon: Package, label: 'Total Productos', value: totalProducts, color: 'from-violet-500 to-purple-600' },
          { icon: DollarSign, label: 'Ingresos Totales', value: `$${(totalRevenue / 1000).toFixed(0)}K`, color: 'from-emerald-500 to-teal-500' },
          { icon: TrendingUp, label: 'En Stock', value: totalStock, color: 'from-blue-500 to-cyan-500' },
          { icon: Star, label: 'Rating Promedio', value: avgRating, color: 'from-amber-500 to-orange-500' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 sm:py-3 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-violet-500 text-white'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card withHover className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-3xl">
                  {product.image}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <MoreVertical size={16} />
                </motion.button>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-slate-400">{product.category}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Precio</p>
                  <p className="font-semibold text-lg">${product.price}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">En Stock</p>
                  <p className="font-semibold text-lg">{product.stock}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Ventas</p>
                  <p className="font-semibold">{product.sales.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">Tendencia</span>
                  <div className={`flex items-center gap-1 ${product.trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {product.trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    <span className="text-sm font-medium">{Math.abs(product.trend)}%</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-violet-400">
                  ${(product.revenue / 1000).toFixed(0)}K
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
