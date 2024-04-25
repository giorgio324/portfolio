import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardDescription from './ProjectCardDescription';
import ProjectCardImage from './ProjectCardImage';
const ProjectsCard = () => {
  return (
    <div className='lg:flex gap-6 items-center'>
      <ProjectCardImage />
      <div className='lg:max-w-md py-10'>
        <ProjectCardDescription />
        <ProjectCardFooter />
      </div>
    </div>
  );
};
export default ProjectsCard;
