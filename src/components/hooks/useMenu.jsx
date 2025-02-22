import { useState } from 'react';

export function useMenu() {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  
  return {
    open,
    toggleMenu,
    closeMenu
  };
}