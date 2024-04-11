'use client';
import { navLinks } from '@/data/navLinks';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavbarLink from './NavbarLink';

const NavbarLinks = () => {
  const [activeLink, setActiveLink] = useState('/');
  const pathname = usePathname() || '/';

  useEffect(() => {
    setActiveLink(pathname);
    console.log(activeLink);
  }, [pathname]);

  return (
    <ul className='p-4 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8'>
      {navLinks.map((link) => {
        const isActive = link.path === pathname;
        return (
          <NavbarLink
            key={link.path}
            isActive={isActive}
            activeLink={activeLink}
            link={link}
            setActiveLink={setActiveLink}
          />
        );
      })}
    </ul>
  );
};
export default NavbarLinks;
