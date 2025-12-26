import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';
import type {
  StatCard,
  RevenueDataPoint,
  TrafficDataPoint,
  SalesCategory,
  Transaction,
  Product,
  NavItem
} from '@/types';

export const navItems: NavItem[] = [
  { icon: '📊', label: 'Dashboard', id: 'overview' },
  { icon: '📈', label: 'Analytics', id: 'analytics' },
  { icon: '👥', label: 'Clientes', id: 'customers' },
  { icon: '📦', label: 'Productos', id: 'products' },
  { icon: '💳', label: 'Transacciones', id: 'transactions' },
  { icon: '📧', label: 'Mensajes', id: 'messages', badge: 3 },
];

export const statsData: StatCard[] = [
  {
    title: 'Ingresos Totales',
    value: '$72,450',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Usuarios Activos',
    value: '8,549',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Pedidos',
    value: '1,423',
    change: '-3.1%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Visitas',
    value: '54.2K',
    change: '+18.7%',
    trend: 'up',
    icon: Eye,
    color: 'from-emerald-500 to-teal-500',
  },
];

export const revenueData: RevenueDataPoint[] = [
  { month: 'Ene', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 34000, profit: 18000 },
  { month: 'Mar', revenue: 48000, expenses: 31000, profit: 17000 },
  { month: 'Abr', revenue: 61000, expenses: 35000, profit: 26000 },
  { month: 'May', revenue: 55000, expenses: 33000, profit: 22000 },
  { month: 'Jun', revenue: 67000, expenses: 38000, profit: 29000 },
  { month: 'Jul', revenue: 72000, expenses: 40000, profit: 32000 },
];

export const trafficData: TrafficDataPoint[] = [
  { name: 'Lun', visitors: 4000, pageViews: 8400 },
  { name: 'Mar', visitors: 3000, pageViews: 6398 },
  { name: 'Mie', visitors: 5000, pageViews: 9800 },
  { name: 'Jue', visitors: 2780, pageViews: 5908 },
  { name: 'Vie', visitors: 4890, pageViews: 9800 },
  { name: 'Sab', visitors: 2390, pageViews: 4800 },
  { name: 'Dom', visitors: 3490, pageViews: 6300 },
];

export const salesByCategory: SalesCategory[] = [
  { name: 'Electrónica', value: 35, color: '#6366f1' },
  { name: 'Ropa', value: 25, color: '#8b5cf6' },
  { name: 'Hogar', value: 20, color: '#a855f7' },
  { name: 'Deportes', value: 12, color: '#d946ef' },
  { name: 'Otros', value: 8, color: '#ec4899' },
];

export const recentTransactions: Transaction[] = [
  {
    id: 1,
    customer: 'María García',
    email: 'maria@email.com',
    amount: 2450,
    status: 'completed',
    date: 'Hace 5 min',
    avatar: 'MG',
  },
  {
    id: 2,
    customer: 'Carlos López',
    email: 'carlos@email.com',
    amount: 1890,
    status: 'pending',
    date: 'Hace 12 min',
    avatar: 'CL',
  },
  {
    id: 3,
    customer: 'Ana Martínez',
    email: 'ana@email.com',
    amount: 3200,
    status: 'completed',
    date: 'Hace 25 min',
    avatar: 'AM',
  },
  {
    id: 4,
    customer: 'Juan Rodríguez',
    email: 'juan@email.com',
    amount: 890,
    status: 'failed',
    date: 'Hace 1 hora',
    avatar: 'JR',
  },
  {
    id: 5,
    customer: 'Laura Sánchez',
    email: 'laura@email.com',
    amount: 4100,
    status: 'completed',
    date: 'Hace 2 horas',
    avatar: 'LS',
  },
];

export const topProducts: Product[] = [
  { name: 'MacBook Pro M3', sales: 1234, revenue: 2467800, growth: 12.5 },
  { name: 'iPhone 15 Pro', sales: 2341, revenue: 2808000, growth: 8.3 },
  { name: 'AirPods Pro', sales: 3456, revenue: 863100, growth: -2.1 },
  { name: 'iPad Air', sales: 987, revenue: 691500, growth: 15.7 },
];
