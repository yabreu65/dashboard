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
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-violet-500/50 text-sm transition-colors"
      />
    </div>
  );
};
