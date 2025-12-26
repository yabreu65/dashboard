import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Buscar...',
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-500 text-slate-400" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 rounded-xl pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-violet-500/50 text-sm transition-colors dark:text-white text-slate-900 placeholder:text-slate-400"
      />
    </div>
  );
};
