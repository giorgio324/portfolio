'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
/* data import */
import { navLinks } from '@/data/navLinks';

const Navbar = () => {
  const currentPath = usePathname() || '/';
  return (
    <div className='flex space-x-1 sticky top-0'>
      <nav className='max-w-screen-xl mx-auto flex justify-center items-center py-4'>
        <ul className='px-4 py-2 bg-desktopNavBackgroundColor rounded-full flex justify-center items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.label}
              className={`${
                currentPath === link.path ? '' : 'hover:text-white/60'
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {currentPath === link.path && (
                <motion.span
                  layoutId='active-bubble'
                  className='absolute inset-0 z-10 bg-white mix-blend-difference'
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
