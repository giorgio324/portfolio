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
            👋 I am currently a Student who is passionate about web development
          </SectionSubTitle>
        </div>
        <div className='mt-3'>
          <SectionDescription>
            I discovered my passion for web development when I began learning
            front-end development with React. However, as I delved into backend
            development with Laravel, I found myself truly captivated by it.
            Now, while I enjoy working with both, my enthusiasm for backend
            development has grown significantly. I&apos;m also eager to explore
            technologies beyond JavaScript and PHP to expand my knowladge.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
};
export default AboutTitle;
