'use client';

import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';

/* data import */
import { navLinks } from '@/data/navLinks';

const NavbarLinks = () => {
  const currentPath = usePathname() || '/';
  return (
    <>
      {navLinks.map((link) => (
        <NavLink key={link.label} currentPath={currentPath} link={link} />
      ))}
    </>
  );
};
export default NavbarLinks;
