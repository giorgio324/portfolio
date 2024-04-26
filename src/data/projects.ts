//@ts-ignore
import thumbnail from '../../public/thumbnail.PNG';
//@ts-ignore
import thumbnail2 from '../../public/thumbnail.JPG';
export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
  role: string;
  liveLink: string;
  githubLink: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    image: thumbnail,
    title: 'JobHunters - a job posting website',
    description:
      'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
    year: 2024,
    role: 'Front-end-developer',
    githubLink: 'https://github.com/giorgio324/job-hunters-firebase',
    liveLink: 'https://job-hunters-30944.web.app/',
  },
  {
    id: 2,
    image: thumbnail2,
    title: 'Promotional landing page for our favorite show',
    description:
      'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
    year: 2024,
    role: 'Front-end-developer',
    githubLink: 'https://github.com/giorgio324/shoppy',
    liveLink: '',
  },
];
