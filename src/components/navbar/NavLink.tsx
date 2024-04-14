'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  link: { path: string; label: string };
  currentPath: string;
};

export const NavLink = ({ link, currentPath }: Props) => {
  return (
    <Link
      href={link.path}
      key={link.label}
      className={`${
        currentPath === link.path ? '' : 'hover:text-white/60'
      } relative rounded-full px-3 py-1.5 font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {currentPath === link.path && (
        <motion.span
          layoutId='active-bubble'
          className='absolute inset-0 z-10 bg-white mix-blend-difference'
          /* style={{ originY: 'top' }} this fixes the scroll bug */
          style={{ borderRadius: 9999, originY: 'top' }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      {link.label}
    </Link>
  );
};
