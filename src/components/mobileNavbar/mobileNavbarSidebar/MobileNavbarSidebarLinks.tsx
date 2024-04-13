'use client';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  closeNavbar: () => void;
};

const MobileNavbarSidebarLinks = ({ closeNavbar }: Props) => {
  const currentPath = usePathname() || '/';

  return (
    <div className='flex-grow flex flex-col gap-4'>
      {navLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.2 }}
          className={`text-2xl w-fit  ${
            currentPath === link.path ? 'font-bold' : ''
          }`}
        >
          <Link href={link.path} onClick={closeNavbar}>
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
