'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
};

const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      style={{ position: 'relative', width, overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          initial: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
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
