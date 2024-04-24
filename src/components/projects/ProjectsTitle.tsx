import RevealWithBackground from '../animation/RevealWithBackground';
import SectionDescription from '../shared/SectionDescription';
import SectionTitle from '../shared/SectionTitle';

const ProjectsTitle = () => {
  return (
    <>
      <SectionTitle>featured projects</SectionTitle>
      <div className='mt-3'>
        <SectionDescription>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </SectionDescription>
      </div>
    </>
  );
};
export default ProjectsTitle;
