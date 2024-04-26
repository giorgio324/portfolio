import ProjectsCard from './ProjectsCard';
import ProjectsTitle from './ProjectsTitle';
import { projectData } from '@/data/projects';
const Projects = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-28 py-16 md:py-20'>
      <ProjectsTitle />
      <div className='mt-16'>
        {projectData.map((project) => {
          return <ProjectsCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
