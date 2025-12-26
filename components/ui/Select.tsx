import React from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        'bg-transparent text-sm focus:outline-none cursor-pointer',
        className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-slate-900">
          {option.label}
        </option>
      ))}
    </select>
  );
};
