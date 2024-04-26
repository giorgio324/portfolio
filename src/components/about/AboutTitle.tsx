import SectionDescription from '../shared/SectionDescription';
import SectionSubTitle from '../shared/SectionSubTitle';
import SectionTitle from '../shared/SectionTitle';
const AboutTitle = () => {
  return (
    <section className='md:flex justify-between gap-10'>
      <div className='flex-grow'>
        <SectionTitle>About Me</SectionTitle>
      </div>
      <div className='md:max-w-lg'>
        <div className='mt-4 md:mt-0'>
          <SectionSubTitle>
            👋 I am a Student who is passionate about web development
          </SectionSubTitle>
        </div>
        <div className='mt-3'>
          <SectionDescription>
            I discovered my passion for web development when I started
            university, where I primarily delve into front-end development using
            React and Next.js. However, I'm also eager to explore technologies
            outside of front-end.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
};
export default AboutTitle;
