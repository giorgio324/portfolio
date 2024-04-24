import ProjectsCard from './ProjectsCard';
import ProjectsTitle from './ProjectsTitle';

/* TODO: Work on this next */
const Projects = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-10 lg:px-28 py-16 md:py-20'>
      <ProjectsTitle />
      <div className='mt-16'>
        <ProjectsCard />
      </div>
    </div>
  );
};
export default Projects;
