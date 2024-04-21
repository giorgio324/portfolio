import AboutImages from './AboutImages';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-16 md:mt-[96px] px-4 md:px-10 lg:px-[108px] py-10 md:pt-[140px] md:pb-[160px] md:flex justify-center items-center gap-8'>
      <AboutTitle />
      <AboutImages />
    </div>
  );
};
export default About;
