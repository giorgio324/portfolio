import AboutImages from './AboutImages';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-[108px] py-10 md:pt-[140px] md:pb-[160px]'>
      <AboutTitle />
      <AboutImages />
    </div>
  );
};
export default About;
