'use client';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

type Props = {
  closeNavbar: () => void;
};

const MobileNavbarHeader = ({ closeNavbar }: Props) => {
  return (
    <motion.div className='mb-4'>
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='text-sm uppercase flex justify-between items-end mb-2'
      >
        <p>Navigation</p>
        <button className='p-1 rounded-md' onClick={closeNavbar}>
          <IoMdClose className='text-[28px]' />
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='h-[1px] bg-desktopNavLinkBackgroundColor w-full'
      />
    </motion.div>
  );
};
export default MobileNavbarHeader;
