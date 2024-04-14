'use client';
import { motion } from 'framer-motion';
const MobileNavbarHeader = () => {
  return (
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
  );
};
export default MobileNavbarHeader;
