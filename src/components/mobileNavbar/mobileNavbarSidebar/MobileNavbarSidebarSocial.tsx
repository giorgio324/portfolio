'use client';
import { motion } from 'framer-motion';
import { socials } from '@/data/social';
const MobileNavbarSidebarSocial = () => {
  return (
    <motion.div className='flex justify-between'>
      {socials.map((social) => {
        return (
          <motion.a
            href={social.path}
            target='_blank'
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className='text-sm mb-2 uppercase'
          >
            {social.label}
          </motion.a>
        );
      })}
    </motion.div>
  );
};
export default MobileNavbarSidebarSocial;
