'use client';
import { useState } from 'react';
import MobileNavbarButton from './MobileNavbarButton';
import MobileNavbarSidebar from './MobileNavbarSidebar';
const MobileNavbar = () => {
  const [open, setOpen] = useState(true);
  const openNavbar = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNavbar = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <aside className='flex justify-end items-center p-4 md:hidden'>
      <MobileNavbarButton openNavbar={openNavbar} />
      <MobileNavbarSidebar closeNavbar={closeNavbar} open={open} />
    </aside>
  );
};
export default MobileNavbar;
