import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <div className='sticky top-0'>
      <nav className='max-w-screen-xl mx-auto flex justify-center items-center py-4'>
        <NavbarLinks />
      </nav>
    </div>
  );
};
export default Navbar;
