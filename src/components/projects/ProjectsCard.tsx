import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardDescription from './ProjectCardDescription';
import ProjectCardImage from './ProjectCardImage';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
};

const ProjectsCard = ({ project }: Props) => {
  return (
    <div className='lg:flex gap-6 items-start mt-24 lg:mt-32'>
      <ProjectCardImage image={project.image} />
      <div className='lg:max-w-md'>
        <ProjectCardDescription
          title={project.title}
          description={project.description}
        />
        <ProjectCardFooter
          year={project.year}
          role={project.role}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          extraLink={project.extraLink}
        />
      </div>
    </div>
  );
};
export default ProjectsCard;
