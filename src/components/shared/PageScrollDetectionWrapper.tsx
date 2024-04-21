'use client';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const PageScrollDetectionWrapper = ({ id, className, children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setCurrentPath, timeOfLastClick } = useActiveLinkContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setCurrentPath(id);
    }
  }, [id, setCurrentPath, isInView, timeOfLastClick]);
  return (
    <section className={className} id={id} ref={ref}>
      {children}
    </section>
  );
};
export default PageScrollDetectionWrapper;
