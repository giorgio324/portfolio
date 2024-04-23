'use client';

import { motion } from 'framer-motion';

type Props = {
  index: number;
  children: React.ReactNode;
  delay: number;
  className?: string;
  directionX?: 'left-to-right' | 'right-to-left';
};

const StaggerReveal = ({
  index,
  children,
  delay,
  className,
  directionX = 'left-to-right',
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: directionX === 'left-to-right' ? -50 : 50,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: (index + 1) * delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default StaggerReveal;
