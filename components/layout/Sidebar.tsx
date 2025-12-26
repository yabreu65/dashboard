'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { UserProfile } from './UserProfile';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : '-100%',
          width: isOpen ? 256 : 80
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="glass border-r border-white/5 flex flex-col h-screen fixed lg:sticky top-0 z-50 lg:translate-x-0"
        style={{
          transform: typeof window !== 'undefined' && window.innerWidth >= 1024
            ? isOpen ? 'translateX(0)' : 'translateX(0)'
            : undefined
        }}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <X size={20} />
          </motion.button>
        </div>
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-bold text-lg cursor-pointer"
        >
          A
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-xl"
            >
              Analytics<span className="text-violet-400">Pro</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-left ${
              activeTab === item.id ? 'active text-white' : 'text-slate-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1"
                  >
                    {item.label}
                  </motion.span>
                  {item.badge && (
                    <Badge variant="primary">{item.badge}</Badge>
                  )}
                </>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </nav>

      {/* User Profile */}
      <UserProfile sidebarOpen={isOpen} />
    </motion.aside>
    </>
  );
};
