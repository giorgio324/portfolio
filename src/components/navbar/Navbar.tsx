import NavbarLinks from './NavbarLinks';
import NavbarSocial from './NavbarSocial';

const Navbar = () => {
  return (
    <nav className='hidden md:block fixed top-[22px] left-1/2 -translate-x-1/2 z-50'>
      <ul className='px-4 py-2 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8 manrope'>
        <NavbarLinks />
        <NavbarSocial />
      </ul>
    </nav>
  );
};
export default Navbar;
