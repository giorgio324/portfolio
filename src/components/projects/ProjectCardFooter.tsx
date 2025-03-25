import Reveal from '../animation/Reveal';
import PageDivider from '../shared/PageDivider';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';
import ProjectCardLinkButton from './ProjectCardLinkButton';

type Props = {
  year: number;
  role: string;
  liveLink?: string;
  githubLink: string;
  extraLink?: string;
};

const ProjectCardFooter = ({
  year,
  role,
  githubLink,
  liveLink,
  extraLink,
}: Props) => {
  return (
    <>
      <div className='mt-8 lg:mt-4 flex flex-col'>
        <div className='manrope '>
          <Reveal>
            <h5 className='uppercase py-4'>Project Info</h5>
          </Reveal>
          <PageDivider />
        </div>
        <div className='manrope'>
          <Reveal>
            <div className='flex justify-between py-4'>
              <h5 className='uppercase'>Year</h5>
              <p>{year}</p>
            </div>
          </Reveal>
          <PageDivider />
        </div>
        <div className='manrope '>
          <Reveal>
            <div className='flex justify-between py-4'>
              <h5 className='uppercase'>Role</h5>
              <p>{role}</p>
            </div>
          </Reveal>
          <PageDivider />
        </div>
      </div>
      <div className='flex gap-4 mt-8'>
        {liveLink && (
          <ProjectCardLinkButton href={liveLink}>
            Live Demo
            <GoArrowUpRight className='text-xl md:text-2xl' />
          </ProjectCardLinkButton>
        )}
        <ProjectCardLinkButton href={githubLink}>
          {extraLink ? 'Frontend Code' : 'View Code'}
          <FaGithub className='text-xl md:text-2xl' />
        </ProjectCardLinkButton>
        {extraLink && (
          <ProjectCardLinkButton href={extraLink}>
            API Code
            <FaGithub className='text-xl md:text-2xl' />
          </ProjectCardLinkButton>
        )}
      </div>
    </>
  );
};
export default ProjectCardFooter;
