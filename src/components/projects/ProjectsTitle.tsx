import RevealWithBackground from '../animation/RevealWithBackground';

const ProjectsTitle = () => {
  return (
    <>
      <RevealWithBackground>
        <h2 className='bebas-neue uppercase text-4xl lg:text-5xl'>
          featured projects
        </h2>
      </RevealWithBackground>
      <div className='mt-3'>
        <RevealWithBackground>
          <p className='text-paragraphTextColor md:text-lg manrope'>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </RevealWithBackground>
      </div>
    </>
  );
};
export default ProjectsTitle;
