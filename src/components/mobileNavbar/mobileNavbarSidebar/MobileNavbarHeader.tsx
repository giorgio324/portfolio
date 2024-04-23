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
        className='text-lg uppercase flex justify-between items-center mb-2 manrope font-semibold'
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
        className='h-[2px] bg-black w-full'
      />
    </motion.div>
  );
};
export default MobileNavbarHeader;
