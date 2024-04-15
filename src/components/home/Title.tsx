import Link from 'next/link';
import Reveal from '../animation/Reveal';
import RevealWithBackground from '../animation/RevealWithBackground';

const Title = () => {
  return (
    <div className='relative flex flex-col justify-center items-center md:items-start w-full gap-2'>
      <div className='text-xl md:text-3xl lg:text-5xl lg:leading-[60px] text-center relative'>
        <RevealWithBackground>
          <h1 className='font-bold'>Giorgi KOCHUASHVILI</h1>
        </RevealWithBackground>
        <RevealWithBackground>
          <h1 className='text-highlightedTextColor font-bold'>
            Front-End Developer
          </h1>
        </RevealWithBackground>
      </div>
      <div className='text-sm lg:text-xl flex gap-4 mt-4'>
        <Reveal>
          <Link href={'/contact'}>
            <button className='py-2 px-6 rounded-full bg-highlightedTextColor text-textColor  font-bold'>
              <span className='drop-shadow-xl'>Hire me</span>
            </button>
          </Link>
        </Reveal>
        <Reveal>
          <a href='/Giorgi_Kochuashvili.pdf' download>
            <button className='py-2 px-6 rounded-full bg-buttonBackgroundColor text-textColor  font-bold'>
              <span className='drop-shadow-xl'>Download cv</span>
            </button>
          </a>
        </Reveal>
      </div>
    </div>
  );
};
export default Title;
