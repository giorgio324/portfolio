'use client';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'down-to-up' | 'right-to-left';
};

const Reveal = ({ children, direction = 'down-to-up' }: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: direction === 'down-to-up' ? 30 : 0,
      x: direction === 'right-to-left' ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
