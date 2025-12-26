'use client';

import { useState } from 'react';

export const useSidebar = (initialState: boolean = true) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => setIsOpen((prev) => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};
