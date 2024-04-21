import RevealWithBackground from '../animation/RevealWithBackground';
const AboutTitle = () => {
  return (
    <section>
      <RevealWithBackground>
        <h1 className='text-4xl lg:text-5xl flex flex-col bebas-neue'>
          About me
        </h1>
      </RevealWithBackground>
      <div className='mt-4'>
        <RevealWithBackground>
          <p className='text-xl manrope font-medium'>
            👋 I am a Student who is passionate about web development
          </p>
        </RevealWithBackground>
      </div>
      <div className='mt-2'>
        <RevealWithBackground>
          <p className='text-paragraphTextColor text-lg manrope'>
            I discovered my passion for web development when I started
            university, where I primarily delve into front-end development using
            React and Next.js. However, I'm also eager to explore technologies
            outside of front-end.
          </p>
        </RevealWithBackground>
      </div>
    </section>
  );
};
export default AboutTitle;
