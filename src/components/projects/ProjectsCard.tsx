import Image from 'next/image';
import thumbnail from '../../../public/thumbnail.JPG';
import PageDivider from '../shared/PageDivider';
const ProjectsCard = () => {
  return (
    <div>
      <div className='rounded-lg bg-cardBackgroundColor py-8 px-6 md:px-10 md:py-12'>
        <Image src={thumbnail} alt='' className='rounded-lg' />
      </div>
      <div className='mt-10'>
        <h4 className='manrope text-xl'>
          Promotional landing page for our favorite show
        </h4>
        <p className='mt-4 text-paragraphTextColor md:text-lg'>
          Teamed up with a designer to breathe life into a promotional webpage
          for our beloved show, Adventure Time. Delivered a fully responsive
          design with dynamic content capabilities, seamlessly integrating a
          newsletter feature to keep fans updated with the latest adventures.
        </p>
      </div>
      <div className='mt-8'>
        <div className=' py-4'>
          <h5 className='uppercase manrope text-lg mb-4'>Project Info</h5>
          <PageDivider />
        </div>
        <div className=' py-4'>
          <h5 className='uppercase manrope text-lg mb-4'>Project Info</h5>
          <PageDivider />
        </div>
        <div className=' py-4'>
          <h5 className='uppercase manrope text-lg mb-4'>Project Info</h5>
          <PageDivider />
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
