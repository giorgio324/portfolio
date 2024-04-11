import { Poppins } from 'next/font/google';
import Image from 'next/image';
import arrowImg from '../../public/arrow.svg';
import sittingPerson from '../../public/sittingPerson.svg';
const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const page = () => {
  return (
    <main className={`${popins.className} max-w-screen-xl mx-auto px-12 flex`}>
      <div className='font-bold text-[96px] relative'>
        <h1>Front-End</h1>
        <h1 className='text-highlightedTextColor'>Developer</h1>
        <Image
          src={arrowImg}
          alt='arrowImage'
          width={100}
          height={200}
          className='absolute top-16 -left-24 -rotate-[10deg]'
        />
        <div className='font-bold text-lg flex gap-12 justify-start items-center mx-4'>
          <button className='px-6 py-2 bg-highlightedTextColor rounded-full'>
            <p className='drop-shadow-lg'>Hire me</p>
          </button>
          <a href='./yourfile.pdf' download>
            <button>Download CV</button>
          </a>
        </div>
      </div>

      <div className='hidden lg:flex'>
        <Image
          src={sittingPerson}
          alt='illustration of person writing code'
          width={100}
          height={200}
        />
      </div>
    </main>
  );
};
export default page;
