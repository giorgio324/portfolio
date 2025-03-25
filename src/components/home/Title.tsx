'use client';
import Reveal from '../animation/Reveal';
import RevealWithBackground from '../animation/RevealWithBackground';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';
import Button from '../shared/Button';

const Title = () => {
  const { setTimeOfLastClick, setCurrentPath } = useActiveLinkContext();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    elementId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(elementId);
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setTimeOfLastClick(Date.now());
    setCurrentPath(elementId);
  };
  return (
    <section className='flex-grow'>
      <RevealWithBackground>
        <h1 className='text-5xl lg:text-6xl flex flex-col bebas-neue'>
          hi, i am <span className='md:w-max'>giorgi kochuashvili.</span>
        </h1>
      </RevealWithBackground>
      <div className='mt-3'>
        <RevealWithBackground>
          <p className='text-paragraphTextColor text-lg manrope'>
            A Full-Stack Developer 🚀 Building a Better Web, One Code Block at a
            Time
          </p>
        </RevealWithBackground>
      </div>
      <div className='mt-8 flex gap-4 manrope'>
        <Reveal>
          <Button handleClick={handleClick}>
            <span className='drop-shadow-xl'>Contact Me</span>
          </Button>
        </Reveal>
        <Reveal>
          <a href='/Giorgi_Kochuashvili.pdf' download>
            <Button inverted>
              <span className='drop-shadow-xl'>Download CV</span>
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
export default Title;
