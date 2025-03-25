import SectionDescription from '../shared/SectionDescription';
import SectionTitle from '../shared/SectionTitle';

const ProjectsTitle = () => {
  return (
    <>
      <SectionTitle>featured projects</SectionTitle>
      <div className='mt-3'>
        <SectionDescription>
          Here are some of my projects that demonstrate my passion and skills in
          web development.
        </SectionDescription>
      </div>
    </>
  );
};
export default ProjectsTitle;
