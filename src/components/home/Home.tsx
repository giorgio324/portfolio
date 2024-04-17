'use client';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import HeroImages from './HeroImages';
import Title from './Title';

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setCurrentPath, timeOfLastClick } = useActiveLinkContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      console.log('home');
      setCurrentPath('home');
    }
  }, [isInView]);
  return (
    <main
      id='home'
      ref={ref}
      className={`max-w-screen-xl mx-auto p-4 md:flex md:px-12 lg:px-16 min-h-screen mt-16 md:mt-0`}
    >
      <Title />
      <HeroImages />
    </main>
  );
};
export default Home;
