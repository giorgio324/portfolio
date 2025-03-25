export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
  role: string;
  liveLink?: string;
  githubLink: string;
  extraLink?: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    image: '/project-quiz-wiz.PNG',
    title:
      'Quiz wiz - an App that lets users take quizzes for specific categoty',
    description:
      "Developed a full-stack web application using React for the frontend and Laravel's REST API for the backend. The frontend uses React Router 7, Tailwind CSS, TanStack Query, React Hook Form, and Zod. On the backend, the application uses Laravel Sanctum for SPA cookie-based authentication and Laravel Spatie Query Builder for simplified query construction. Additionally, the app features an admin panel built with the Filament library. Users can take quizzes, view their results, and are timed, encouraging them to complete the quizzes quickly.",
    year: 2025,
    role: 'Full-Stack-developer',
    githubLink:
      'https://github.com/RedberryInternship/giorgi-kochuashvili-quizwiz-front',
    liveLink: 'https://quiz-wiz.giorgi-kochuashvili.redberryinternship.ge/',
    extraLink:
      'https://github.com/RedberryInternship/giorgi-kochuashvili-quizwiz-back',
  },
  {
    id: 2,
    image: '/project-task-master.PNG',
    title: 'Task Manager - Multi page web app that tracks tasks for users',
    description:
      'Developed a full-stack web application using Laravel and the Blade templating engine. Implemented authentication with cookies to securely authenticate users. Utilized the Spatie Translations package to support multiple languages on the site. The project supports basic CRUD operations, along with the ability for users to update their profiles.',
    year: 2024,
    role: 'Full-Stack-developer',
    githubLink:
      'https://github.com/RedberryInternship/giorgi-kochuashvili-todo',
  },
  {
    id: 3,
    image: '/projectImage1.PNG',
    title: 'JobHunters - a job posting website',
    description:
      'Developed a full-stack web application using advanced technologies including ReactJS for building intuitive UI, TypeScript for enhanced code quality, Redux Toolkit for synchronus and asynchronus state management, and Firebase for user authentication, database and file storage. The application allows users to authenticate with email and password or with google account, create job postings and manage their created job posting. Special attention was given to responsive design and user experience, design was kept minimal for better user experience',
    year: 2024,
    role: 'Front-End-developer',
    githubLink: 'https://github.com/giorgio324/job-hunters-firebase',
    liveLink: 'https://job-hunters-30944.web.app/',
  },
  {
    id: 4,
    image: '/projectImage2.PNG',
    title: 'Infinite Gallery',
    description:
      'Developed a front-end of a web application using technologies including ReactJS for building intuitive UI, TypeScript for enhanced code quality and TailwindCSS for styling components, Created a reusable custom hook for infinite scrolling, Implemented custom caching functionality stored in session storage, to optimize API GET requests, The application enables users to search for images, scroll infinitely, access search history, and view images in a modal window with image stats.',
    year: 2024,
    role: 'Front-End-developer',
    githubLink: 'https://github.com/giorgio324/sweeft-gallery',
    liveLink: 'https://unsplash-infinite-gallery.netlify.app/',
  },
  {
    id: 5,
    image: '/projectImage3.PNG',
    title: 'Shoppy - a Ecommerce catalog website',
    description:
      'Developed a front-end of a web application using technologies including ReactJS for building intuitive UI, Redux Toolkit for state managment,firebase for user authentification, and TailwindCSS for styling components, Created a catalog of ecommerce website using FakestoreAPI. Users can scroll through catalog, view individual item page, add item to cart and view their cart.cart items are persisted in localstorage',
    year: 2023,
    role: 'Front-End-developer',
    githubLink: 'https://github.com/giorgio324/shoppy',
    liveLink: 'https://shoppyecomerce.netlify.app/',
  },
];
