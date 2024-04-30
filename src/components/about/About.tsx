import AboutImages from './AboutImages';
import AboutSkills from './AboutSkills';
import AboutTitle from './AboutTitle';

const About = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-[108px] py-10 md:py-44'>
      <AboutTitle />
      <AboutImages />
      <AboutSkills />
    </div>
  );
};
export default About;
