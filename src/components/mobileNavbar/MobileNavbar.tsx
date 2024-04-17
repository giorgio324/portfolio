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
    <div className='flex justify-end items-center p-4 md:hidden fixed top-2 right-2 z-50'>
      <MobileNavbarButton openNavbar={openNavbar} />
      <MobileNavbarSidebar closeNavbar={closeNavbar} open={open} />
    </div>
  );
};
export default MobileNavbar;
