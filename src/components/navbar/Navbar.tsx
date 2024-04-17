import { useEffect, useRef } from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarSocial from './NavbarSocial';

const Navbar = () => {
  return (
    <nav className='hidden max-w-screen-xl mx-auto md:flex justify-center items-center py-4 fixed top-0 left-1/2  -translate-x-1/2 z-50'>
      <ul className='px-4 py-2 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8'>
        <NavbarLinks />
        <NavbarSocial />
      </ul>
    </nav>
  );
};
export default Navbar;
