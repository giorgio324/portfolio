import { NavLink } from './NavLink';
/* data import */
import { navLinks } from '@/data/navLinks';

const NavbarLinks = () => {
  return (
    <>
      {navLinks.map((link) => (
        <NavLink key={link.label} link={link} />
      ))}
    </>
  );
};
export default NavbarLinks;
