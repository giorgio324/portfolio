'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'down-to-up' | 'right-to-left';
};

const Reveal = ({
  children,
  width = 'fit-content',
  direction = 'down-to-up',
}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: direction === 'down-to-up' ? 30 : 0,
      x: direction === 'right-to-left' ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: direction === 'down-to-up' ? 0 : 0,
      x: direction === 'right-to-left' ? 0 : 0,
    },
  };
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      style={{ position: 'relative', width, overflow: 'hidden' }}
    >
      <motion.div
        variants={variants}
        initial='initial'
        whileInView={'visible'}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
