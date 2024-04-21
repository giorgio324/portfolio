'use client';
import Reveal from '../animation/Reveal';
import RevealWithBackground from '../animation/RevealWithBackground';
import { useActiveLinkContext } from '@/context/ActiveLinkContext';

const Title = () => {
  const { setTimeOfLastClick, setCurrentPath } = useActiveLinkContext();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    elementId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    const elementPosition = element?.getBoundingClientRect().top;
    const navbarHeight = 84;
    if (elementPosition) {
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setTimeOfLastClick(Date.now());
    setCurrentPath(elementId);
  };
  return (
    <section className='flex-grow'>
      <div>
        <RevealWithBackground>
          <h1 className='text-5xl lg:text-6xl flex flex-col bebas-neue'>
            hi, i am <span className='md:min-w-max'>giorgi kochuashvili.</span>
          </h1>
        </RevealWithBackground>
        <RevealWithBackground>
          <p className='text-paragraphTextColor text-lg manrope mt-3'>
            Front-End Developer and a student who is passionate about building
            user friendly interfaces for websites
          </p>
        </RevealWithBackground>
      </div>
      <div className='mt-8 flex gap-4 manrope'>
        <Reveal>
          <button
            className='py-3 px-5 text-sm md:text-base lg:text-lg rounded-full bg-buttonGreenBackgroundColor text-blackTextColor font-bold'
            onClick={(e) => handleClick(e, 'contact')}
          >
            <span className='drop-shadow-xl'>Contact Me</span>
          </button>
        </Reveal>
        <Reveal>
          <a href='/Giorgi_Kochuashvili.pdf' download>
            <button className='py-3 px-5 text-sm md:text-base lg:text-lg rounded-full bg-buttonBlackBackgroundColor text-buttonGreenBackgroundColor font-bold'>
              <span className='drop-shadow-xl'>Download CV</span>
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
export default Title;
