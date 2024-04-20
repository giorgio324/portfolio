import Link from 'next/link';
import Reveal from '../animation/Reveal';
import RevealWithBackground from '../animation/RevealWithBackground';

const Title = () => {
  return (
    <section>
      <div>
        <RevealWithBackground>
          <h1 className='text-5xl flex flex-col bebas-neue'>
            hi, i am <span>giorgi kochuashvili.</span>
          </h1>
        </RevealWithBackground>
        <RevealWithBackground>
          <p className='text-paragraphTextColor manrope mt-3'>
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>
        </RevealWithBackground>
      </div>
      <div className='mt-8 flex gap-4 manrope'>
        {/* TODO: i need to make this button scroll to contact part and to change the active link with it */}
        <Reveal>
          <button className='py-3 px-4 rounded-full bg-buttonGreenBackgroundColor text-blackTextColor font-bold'>
            <span className='drop-shadow-xl'>Contact Me</span>
          </button>
        </Reveal>
        <Reveal>
          <a href='/Giorgi_Kochuashvili.pdf' download>
            <button className='py-3 px-4 rounded-full bg-buttonBlackBackgroundColor text-buttonGreenBackgroundColor font-bold'>
              <span className='drop-shadow-xl'>Download CV</span>
            </button>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
export default Title;
