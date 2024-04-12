import { Poppins } from 'next/font/google';
import Image from 'next/image';
import arrowImg from '../../public/arrow.svg';
import sittingPerson from '../../public/sittingPerson.svg';
import doodles from '../../public/doodles.svg';
import shadow from '../../public/shadow.svg';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const page = () => {
  return (
    <>
      {/* <main
      className={`${popins.className} max-w-screen-xl mx-auto py-4 px-12 flex`}
    >
      <div className='font-bold text-[96px] flex flex-col gap-6'>
        <div className='leading-[96px] relative'>
          <h1>Front-End</h1>
          <h1 className='text-highlightedTextColor'>Developer</h1>
          <Image
            src={arrowImg}
            alt='arrowImage'
            className='absolute top-12 -left-20 -rotate-6'
          />
        </div>
        <div className='font-bold text-lg flex gap-12 justify-start items-center mx-4'>
          <button className='px-6 py-2 bg-highlightedTextColor rounded-full'>
            <p className='drop-shadow-lg'>Hire me</p>
          </button>
          <a href='./yourfile.pdf' download>
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </main> */}
      <div id='home' className='min-h-screen bg-red-400'></div>
      <div id='about' className='min-h-screen bg-blue-400'></div>
      <div id='projects' className='min-h-screen bg-green-400'></div>
    </>
  );
};
export default page;
