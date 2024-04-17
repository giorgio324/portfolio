'use client';

import { NavLink } from './NavLink';

/* data import */
import { navLinks } from '@/data/navLinks';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';

const NavbarLinks = () => {
  const { currentPath, setCurrentPath } = useActiveLinkContext();
  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          currentPath={currentPath}
          link={link}
          setCurrentPath={setCurrentPath}
        />
      ))}
    </>
  );
};
export default NavbarLinks;
