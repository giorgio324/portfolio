'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
};

const RevealWithBackground = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const textControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      textControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, slideControls, textControls]);
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='initial'
        animate={textControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: { left: 0 },
          visible: { left: '100%' },
        }}
        initial={'initial'}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className='absolute top-1 left-0 bottom-0 right-0 bg-green-500 z-20'
      />
    </div>
  );
};
export default RevealWithBackground;
