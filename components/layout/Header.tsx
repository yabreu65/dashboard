'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Bell, Settings, Sun, Moon } from 'lucide-react';
import { SearchInput } from '@/components/ui/SearchInput';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const currentTime = useCurrentTime();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 glass border-b border-white/5 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Menu size={20} />
          </motion.button>
          <div className="hidden sm:block">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-right mr-2 sm:mr-4 hidden md:block">
            <p className="text-xs text-slate-500">Última actualización</p>
            <p className="text-sm font-medium">{currentTime.toLocaleTimeString('es-ES')}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-200 transition-colors"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <Moon size={18} className="sm:w-5 sm:h-5 text-slate-700" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-200 transition-colors"
          >
            <Bell size={18} className="sm:w-5 sm:h-5" />
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-200 transition-colors hidden sm:block"
          >
            <Settings size={20} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 sm:hidden">
        <SearchInput />
      </div>
    </header>
  );
};
