import RevealWithBackground from '../animation/RevealWithBackground';

const About = () => {
  return (
    <section>
      <div className='flex justify-center py-8'>
        <RevealWithBackground>
          <h1 className='font-bold text-2xl'>
            About <span className='text-highlightedTextColor'>me</span>
          </h1>
        </RevealWithBackground>
      </div>
    </section>
  );
};
export default About;
