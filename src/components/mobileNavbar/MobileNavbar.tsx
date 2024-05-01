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
    <div className='md:hidden z-50 fixed top-4 right-4'>
      <MobileNavbarButton openNavbar={openNavbar} />
      <MobileNavbarSidebar closeNavbar={closeNavbar} open={open} />
    </div>
  );
};
export default MobileNavbar;
