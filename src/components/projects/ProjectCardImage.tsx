import Image from 'next/image';
import Reveal from '../animation/Reveal';
//@ts-ignore
import thumbnail from '../../../public/thumbnail.PNG';
const ProjectCardImage = () => {
  return (
    <div className='rounded-lg bg-cardBackgroundColor py-6 px-4 md:px-6 md:py-8 flex-grow'>
      <Reveal>
        <Image
          src={thumbnail}
          alt='image of Project'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          className='rounded-lg'
        />
      </Reveal>
    </div>
  );
};
export default ProjectCardImage;
