'use client';

import { useState, useEffect } from 'react';

interface RealTimeStats {
  revenue: number;
  users: number;
  orders: number;
  visits: number;
}

export const useRealTimeData = () => {
  const [stats, setStats] = useState<RealTimeStats>({
    revenue: 72450,
    users: 8549,
    orders: 1423,
    visits: 54200,
  });

  useEffect(() => {
    // Simulate real-time data updates every 5 seconds
    const interval = setInterval(() => {
      setStats((prev) => ({
        revenue: prev.revenue + Math.floor(Math.random() * 500 - 100),
        users: prev.users + Math.floor(Math.random() * 20 - 5),
        orders: prev.orders + Math.floor(Math.random() * 10 - 3),
        visits: prev.visits + Math.floor(Math.random() * 100 - 20),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return stats;
};
