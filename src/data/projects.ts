//@ts-ignore
import projectImage1 from '../../public/projectImage1.PNG';
//@ts-ignore
import projectImage2 from '../../public/projectImage2.PNG';
//@ts-ignore
import projectImage3 from '../../public/projectImage3.PNG';
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
    image: projectImage1,
    title: 'JobHunters - a job posting website',
    description:
      'Developed a full-stack web application using advanced technologies including ReactJS for building intuitive UI, TypeScript for enhanced code quality, Redux Toolkit for synchronus and asynchronus state management, and Firebase for user authentication, database and file storage. The application allows users to authenticate with email and password or with google account, create job postings and manage their created job posting. Special attention was given to responsive design and user experience, design was kept minimal for better user experience',
    year: 2024,
    role: 'Front-end-developer',
    githubLink: 'https://github.com/giorgio324/job-hunters-firebase',
    liveLink: 'https://job-hunters-30944.web.app/',
  },
  {
    id: 2,
    image: projectImage2,
    title: 'Infinite Gallery',
    description:
      'Developed a front-end of a web application using technologies including ReactJS for building intuitive UI, TypeScript for enhanced code quality and TailwindCSS for styling components, Created a reusable custom hook for infinite scrolling, Implemented custom caching functionality stored in session storage, to optimize API GET requests, The application enables users to search for images, scroll infinitely, access search history, and view images in a modal window with image stats.',
    year: 2024,
    role: 'Front-end-developer',
    githubLink: 'https://github.com/giorgio324/sweeft-gallery',
    liveLink: 'https://unsplash-infinite-gallery.netlify.app/',
  },
  {
    id: 3,
    image: projectImage3,
    title: 'Shoppy - a Ecommerce catalog website',
    description:
      'Developed a front-end of a web application using technologies including ReactJS for building intuitive UI, Redux Toolkit for state managment,firebase for user authentification, and TailwindCSS for styling components, Created a catalog of ecommerce website using FakestoreAPI. Users can scroll through catalog, view individual item page, add item to cart and view their cart.cart items are persisted in localstorage',
    year: 2023,
    role: 'Front-end-developer',
    githubLink: 'https://github.com/giorgio324/shoppy',
    liveLink: 'https://shoppyecomerce.netlify.app/',
  },
];
