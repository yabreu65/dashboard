'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface UserProfileProps {
  sidebarOpen: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({ sidebarOpen }) => {
  return (
    <div className="p-4 border-t border-white/5">
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center font-semibold text-sm cursor-pointer"
        >
          YA
        </motion.div>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex-1"
          >
            <p className="font-medium text-sm">Yoryi Abreu</p>
            <p className="text-xs text-slate-500">Admin</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
