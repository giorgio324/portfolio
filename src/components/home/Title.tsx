import Reveal from '../animation/Reveal';
import RevealWithBackground from '../animation/RevealWithBackground';

const Title = () => {
  return (
    <div className='relative text-xl flex flex-col justify-center items-center md:items-start w-full gap-2'>
      <RevealWithBackground>
        <h1>Giorgi Kochuashvili</h1>
      </RevealWithBackground>
      <RevealWithBackground>
        <h1 className='text-highlightedTextColor'>Front-End Developer</h1>
      </RevealWithBackground>
      <div className='text-sm flex gap-4 mt-4'>
        <Reveal>
          <button className='py-2 px-6 rounded-full bg-highlightedTextColor text-textColor  font-bold'>
            <span className='drop-shadow-xl'>Hire me</span>
          </button>
        </Reveal>
        <Reveal>
          <button className='py-2 px-6 rounded-full bg-buttonBackgroundColor text-textColor  font-bold'>
            <span className='drop-shadow-xl'>Download cv</span>
          </button>
        </Reveal>
      </div>
    </div>
  );
};
export default Title;
