import { Poppins } from 'next/font/google';
import RevealWithBackground from '@/components/animation/RevealWithBackground';
import Reveal from '@/components/animation/Reveal';
import Title from '@/components/home/Title';
import HeroImages from '@/components/home/HeroImages';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const page = () => {
  return (
    <>
      <main
        className={`${popins.className} max-w-screen-xl mx-auto p-4 md:flex md:px-12 lg:px-16 min-h-full`}
      >
        <Title />
        <HeroImages />
      </main>
    </>
  );
};
export default page;
