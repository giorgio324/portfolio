'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
};

const RevealTextWithBackground = ({
  children,
  width = 'fit-content',
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='start'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          start: { left: 0 },
          visible: { left: '100%' },
        }}
        initial={'start'}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className='absolute top-2 left-0 bottom-0 right-0 bg-green-500 z-20'
      />
    </div>
  );
};
export default RevealTextWithBackground;
