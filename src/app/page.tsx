import { Poppins } from 'next/font/google';
import Image from 'next/image';
import arrowImg from '../../public/arrow.svg';
import sittingPerson from '../../public/sittingPerson.svg';
import doodles from '../../public/doodles.svg';
import shadow from '../../public/shadow.svg';
import RevealWithBackground from '@/components/animation/RevealWithBackground';
import Reveal from '@/components/animation/Reveal';
import Title from '@/components/home/Title';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const page = () => {
  return (
    <>
      <main
        className={`${popins.className} max-w-screen-xl mx-auto p-4 md:flex md:px-12`}
      >
        <Title />
        <div className='flex flex-col justify-center items-center  py-8'>
          <div className='max-w-xl relative'>
            <Reveal>
              <Image src={doodles} alt='doodles' />
            </Reveal>
            <div className='absolute top-1/3 md:-left-8'>
              <Reveal>
                <Image src={sittingPerson} alt='person writing on laptop' />
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <div id='home' className='min-h-screen bg-red-400'></div>
      <div id='home' className='min-h-screen bg-red-400'></div>
    </>
  );
};
export default page;
