import AboutImages from './AboutImages';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <section className='max-w-screen-xl mx-auto p-4  md:px-12 lg:px-16 min-height-screen '>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start '>
        <AboutTitle />
        <AboutImages />
      </div>
    </section>
  );
};
export default About;
