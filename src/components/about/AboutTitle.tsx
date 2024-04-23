import RevealWithBackground from '../animation/RevealWithBackground';
const AboutTitle = () => {
  return (
    <section className='md:flex justify-between gap-10'>
      <div className='flex-grow'>
        <RevealWithBackground>
          <h1 className='text-4xl lg:text-5xl flex flex-col bebas-neue w-max'>
            About me
          </h1>
        </RevealWithBackground>
      </div>
      <div className='md:max-w-lg'>
        <div className='mt-4 md:mt-0'>
          <RevealWithBackground>
            <p className='text-xl md:text-2xl manrope font-medium'>
              👋 I am a Student who is passionate about web development
            </p>
          </RevealWithBackground>
        </div>
        <div className='mt-2'>
          <RevealWithBackground>
            <p className='text-paragraphTextColor md:text-lg manrope'>
              I discovered my passion for web development when I started
              university, where I primarily delve into front-end development
              using React and Next.js. However, I'm also eager to explore
              technologies outside of front-end.
            </p>
          </RevealWithBackground>
        </div>
      </div>
    </section>
  );
};
export default AboutTitle;
