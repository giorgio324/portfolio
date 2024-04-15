import NavbarLinks from './NavbarLinks';
import NavbarSocial from './NavbarSocial';

const Navbar = () => {
  return (
    <nav className='hidden max-w-screen-xl mx-auto md:flex justify-center items-center py-4 sticky top-0 z-50'>
      <ul className='px-4 py-2 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8'>
        <NavbarLinks />
        <NavbarSocial />
      </ul>
    </nav>
  );
};
export default Navbar;
