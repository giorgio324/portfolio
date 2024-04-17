'use client';
import { useInView } from 'framer-motion';
import AboutImages from './AboutImages';
import AboutTitle from './AboutTitle';
import { useEffect, useRef } from 'react';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setCurrentPath, setTimeOfLastClick, timeOfLastClick } =
    useActiveLinkContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      console.log('about');
      setCurrentPath('about');
    }
  }, [isInView, timeOfLastClick]);
  return (
    <section
      ref={ref}
      className='max-w-screen-xl mx-auto p-4  md:px-12 lg:px-16 min-h-screen'
      id='about'
    >
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start '>
        <AboutTitle />
        <AboutImages />
      </div>
    </section>
  );
};
export default About;
