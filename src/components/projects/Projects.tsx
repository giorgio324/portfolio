'use client';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setCurrentPath, setTimeOfLastClick, timeOfLastClick } =
    useActiveLinkContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      console.log('projects');
      setCurrentPath('projects');
    }
  }, [isInView, timeOfLastClick]);
  return (
    <div className='min-h-screen doodle-background' id='projects' ref={ref}>
      page
    </div>
  );
};
export default Projects;
