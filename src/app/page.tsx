import { Poppins } from 'next/font/google';
import Image from 'next/image';
import arrowImg from '../../public/arrow.svg';
import sittingPerson from '../../public/sittingPerson.svg';
import doodles from '../../public/doodles.svg';
import shadow from '../../public/shadow.svg';
import Reveal from '@/components/Reveal';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const page = () => {
  return (
    <>
      <main
        className={`${popins.className} max-w-screen-xl mx-auto py-4 px-12 flex`}
      >
        <div className='relative text-xl'>
          <Reveal width='fit-content'>
            <h1>Giorgi Kochuashvili</h1>
          </Reveal>
          <Reveal width='fit-content'>
            <h1>Front-End Developer</h1>
          </Reveal>
        </div>
      </main>
      <div id='home' className='min-h-screen bg-red-400'></div>
    </>
  );
};
export default page;
