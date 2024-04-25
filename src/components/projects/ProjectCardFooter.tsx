import Reveal from '../animation/Reveal';
import PageDivider from '../shared/PageDivider';

const ProjectCardFooter = () => {
  return (
    <>
      <div className='mt-8 lg:mt-4 flex flex-col'>
        <div className='manrope '>
          <Reveal>
            <h5 className='uppercase py-4'>Project Info</h5>
          </Reveal>
          <PageDivider />
        </div>
        <div className='manrope '>
          <Reveal>
            <div className='flex justify-between py-4'>
              <h5 className='uppercase'>Year</h5>
              <p>2024</p>
            </div>
          </Reveal>

          <PageDivider />
        </div>
        <div className='manrope '>
          <Reveal>
            <div className='flex justify-between py-4'>
              <h5 className='uppercase'>Year</h5>
              <p>2024</p>
            </div>
          </Reveal>
          <PageDivider />
        </div>
      </div>
      <div className='flex gap-4 mt-8'>
        {/* TODO:work on this to make it a link that goes to project */}
        <button className='uppercase text-buttonGreenBackgroundColor manrope font-semibold border-b-2 border-b-buttonGreenBackgroundColor'>
          Live Demo
        </button>
        <button className='uppercase text-buttonGreenBackgroundColor manrope font-semibold border-b-2 border-b-buttonGreenBackgroundColor'>
          View Code
        </button>
      </div>
    </>
  );
};
export default ProjectCardFooter;
