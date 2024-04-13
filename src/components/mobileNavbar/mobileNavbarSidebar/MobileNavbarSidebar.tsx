'use client';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import MobileNavbarSidebarSocial from './MobileNavbarSidebarSocial';
import MobileNavbarSidebarLinks from './MobileNavbarSidebarLinks';

type Props = {
  open: boolean;
  closeNavbar: () => void;
};

const MobileNavbarSidebar = ({ open, closeNavbar }: Props) => {
  /* NOTE: is mounted check is needed because the docuemnt does not exist on server */
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      {createPortal(
        <AnimatePresence mode='wait'>
          {open && (
            <motion.div className='inset-0 fixed flex justify-start items-center z-50'>
              <motion.div
                className='inset-0 absolute bg-black z-10 cursor-pointer'
                onClick={closeNavbar}
                key='backdrop'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className='h-full w-3/4 bg-white z-20 p-8 text-black flex flex-col gap-4'
                key='content'
                initial={{ translateX: '-100%' }}
                animate={{ translateX: '0%', transition: { duration: 0.3 } }}
                exit={{ translateX: '-100%', transition: { duration: 0.3 } }}
              >
                <motion.div className='mb-4'>
                  <motion.div
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='text-sm mb-2 uppercase'
                  >
                    Navigation
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='h-[1px] bg-desktopNavLinkBackgroundColor w-full'
                  ></motion.div>
                </motion.div>
                <MobileNavbarSidebarLinks closeNavbar={closeNavbar} />
                <MobileNavbarSidebarSocial />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
export default MobileNavbarSidebar;
