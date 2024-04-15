'use client';
import { useState } from 'react';
import MobileNavbarButton from './MobileNavbarButton';
import MobileNavbarSidebar from './mobileNavbarSidebar/MobileNavbarSidebar';
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const openNavbar = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNavbar = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <aside className='flex justify-end items-center p-4 md:hidden sticky top-0 z-50'>
      <MobileNavbarButton openNavbar={openNavbar} />
      <MobileNavbarSidebar closeNavbar={closeNavbar} open={open} />
    </aside>
  );
};
export default MobileNavbar;
