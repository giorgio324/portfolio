import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardDescription from './ProjectCardDescription';
import ProjectCardImage from './ProjectCardImage';
const ProjectsCard = () => {
  return (
    <div className='lg:flex gap-6 items-start'>
      <ProjectCardImage />
      <div className='lg:max-w-md'>
        <ProjectCardDescription />
        <ProjectCardFooter />
      </div>
    </div>
  );
};
export default ProjectsCard;
