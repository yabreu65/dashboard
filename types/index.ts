import { LucideIcon } from 'lucide-react';

export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface TrafficDataPoint {
  name: string;
  visitors: number;
  pageViews: number;
}

export interface SalesCategory {
  name: string;
  value: number;
  color: string;
}

export interface Transaction {
  id: number;
  customer: string;
  email: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  avatar: string;
}

export interface Product {
  name: string;
  sales: number;
  revenue: number;
  growth: number;
}

export interface NavItem {
  icon: string;
  label: string;
  id: string;
  badge?: number;
}

export type DateRange = '7d' | '30d' | '90d';
