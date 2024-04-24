import Image from 'next/image';
import thumbnail from '../../../public/thumbnail.JPG';
import PageDivider from '../shared/PageDivider';
import SectionSubTitle from '../shared/SectionSubTitle';
import SectionDescription from '../shared/SectionDescription';
const ProjectsCard = () => {
  return (
    <div>
      <div className='rounded-lg bg-cardBackgroundColor py-8 px-6 md:px-10 md:py-12'>
        <Image src={thumbnail} alt='' className='rounded-lg' />
      </div>
      <div className='mt-10 flex flex-col gap-3'>
        <SectionSubTitle>
          Promotional landing page for our favorite show
        </SectionSubTitle>
        <SectionDescription>
          Teamed up with a designer to breathe life into a promotional webpage
          for our beloved show, Adventure Time. Delivered a fully responsive
          design with dynamic content capabilities, seamlessly integrating a
          newsletter feature to keep fans updated with the latest adventures.
        </SectionDescription>
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        <div className='manrope text-lg'>
          <h5 className='uppercase py-4'>Project Info</h5>
          <PageDivider />
        </div>
        <div className='manrope text-lg'>
          <div className='flex justify-between py-4'>
            <h5 className='uppercase'>Project Info</h5>
            <p>2024</p>
          </div>
          <PageDivider />
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
