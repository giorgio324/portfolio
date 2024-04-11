'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SetStateAction } from 'react';

type Props = {
  link: { name: string; path: string };
  isActive: boolean;
  activeLink: string;
  setActiveLink: React.Dispatch<SetStateAction<string>>;
};

const NavbarLink = ({ activeLink, isActive, link, setActiveLink }: Props) => {
  return (
    <li key={link.path}>
      <Link
        href={link.path}
        className={`px-4 py-2 rounded-md text-sm lg:text-base relative ${
          isActive ? 'text-zinc-100' : 'text-zinc-400'
        }`}
        data-active={isActive}
        onClick={() => setActiveLink(link.path)}
      >
        {link.name}
        {link.path === activeLink && (
          <motion.div
            className='absolute bottom-0 left-0 h-full bg-desktopNavLinkBackgroundColor rounded-full -z-10'
            layoutId='navLink'
            aria-hidden='true'
            style={{
              width: '100%',
            }}
            transition={{
              type: 'tween',
              stiffness: 120,
              duration: 0.3,
            }}
          />
        )}
      </Link>
    </li>
  );
};
export default NavbarLink;
