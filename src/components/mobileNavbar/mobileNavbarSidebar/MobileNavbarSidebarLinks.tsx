'use client';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';

type Props = {
  closeNavbar: () => void;
};

const MobileNavbarSidebarLinks = ({ closeNavbar }: Props) => {
  const { setTimeOfLastClick, setCurrentPath, currentPath } =
    useActiveLinkContext();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    elementId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(elementId);
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setTimeOfLastClick(Date.now());
    setCurrentPath(elementId);
    closeNavbar();
  };
  return (
    <div className='flex-grow flex flex-col gap-4'>
      {navLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.2 }}
          className={`text-2xl w-fit ${
            currentPath === link.path ? 'font-bold' : ''
          }`}
        >
          <Link
            href={`#${link.path}`}
            onClick={(e) => handleClick(e, link.path)}
          >
            {link.label}
          </Link>
          {currentPath === link.path && (
            <motion.div
              initial={{ opacity: 0, translateX: 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.2 }}
              className='h-[2px] bg-black '
            ></motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};
export default MobileNavbarSidebarLinks;
